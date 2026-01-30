
import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

interface SkillNode {
  name: string;
  level: number;
  category: 'cloud' | 'data' | 'dev';
}

const skills: SkillNode[] = [
  { name: 'GCP', level: 95, category: 'cloud' },
  { name: 'BigQuery', level: 90, category: 'cloud' },
  { name: 'Cloud Composer', level: 85, category: 'cloud' },
  { name: 'Dataproc', level: 80, category: 'cloud' },
  { name: 'Python', level: 95, category: 'dev' },
  { name: 'Airflow', level: 90, category: 'data' },
  { name: 'SQL', level: 90, category: 'dev' },
  { name: 'FastAPI', level: 85, category: 'dev' },
  { name: 'Snowflake', level: 75, category: 'data' },
  { name: 'DBT', level: 80, category: 'data' },
  { name: 'Flask', level: 80, category: 'dev' },
  { name: 'Cloud SQL', level: 85, category: 'cloud' }
];

const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'cloud': return '#3b82f6';
    case 'data': return '#8b5cf6';
    case 'dev': return '#10b981';
    default: return '#ffffff';
  }
};

// Individual skill orb
const SkillOrb = ({
  skill,
  position,
  index
}: {
  skill: SkillNode;
  position: [number, number, number];
  index: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const color = getCategoryColor(skill.category);
  const scale = 0.15 + (skill.level / 100) * 0.15;

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1;
    }

    if (meshRef.current && hovered) {
      // Pulse effect when hovered
      const pulseScale = scale * (1 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
      meshRef.current.scale.setScalar(pulseScale);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Glow sphere */}
      <mesh scale={scale * 1.5}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>

      {/* Main orb */}
      <mesh
        ref={meshRef}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* HTML Label */}
      <Html
        position={[0, scale + 0.4, 0]}
        center
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div
          className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap transition-all duration-300 ${
            hovered ? 'bg-gray-900/90 scale-110' : 'bg-gray-900/70'
          }`}
          style={{
            color: hovered ? color : 'white',
            border: `1px solid ${hovered ? color : 'rgba(255,255,255,0.2)'}`,
            textShadow: hovered ? `0 0 10px ${color}` : 'none',
          }}
        >
          {skill.name}
          {hovered && <span className="ml-1 text-gray-400">({skill.level}%)</span>}
        </div>
      </Html>
    </group>
  );
};

// Orbiting ring
const OrbitRing = ({ radius, color, speed }: { radius: number; color: string; speed: number }) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </mesh>
  );
};

// Central core
const CentralCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <group>
      {/* Outer glow */}
      <mesh ref={glowRef} scale={0.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.1} />
      </mesh>

      {/* Core icosahedron */}
      <mesh ref={coreRef} scale={0.25}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>

      {/* Inner sphere */}
      <mesh scale={0.15}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
    </group>
  );
};

// Connection lines between skills
const ConnectionLines = ({ positions }: { positions: [number, number, number][] }) => {
  const linesRef = useRef<THREE.LineSegments>(null);

  const linePositions = useMemo(() => {
    const posArray: number[] = [];

    // Connect nearby skills
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dist = Math.sqrt(
          Math.pow(positions[i][0] - positions[j][0], 2) +
          Math.pow(positions[i][1] - positions[j][1], 2) +
          Math.pow(positions[i][2] - positions[j][2], 2)
        );
        if (dist < 1.5) {
          posArray.push(...positions[i], ...positions[j]);
        }
      }
      // Connect to center
      posArray.push(...positions[i], 0, 0, 0);
    }

    return new Float32Array(posArray);
  }, [positions]);

  useFrame((state) => {
    if (linesRef.current && linesRef.current.material instanceof THREE.LineBasicMaterial) {
      linesRef.current.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={linePositions.length / 3}
          array={linePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.15} />
    </lineSegments>
  );
};

// Main scene
const Scene = () => {
  // Calculate positions in a sphere arrangement
  const positions = useMemo((): [number, number, number][] => {
    return skills.map((_, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      const radius = 2;

      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ];
    });
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8b5cf6" />

      <CentralCore />

      {/* Orbit rings */}
      <OrbitRing radius={1} color="#3b82f6" speed={0.2} />
      <OrbitRing radius={1.5} color="#8b5cf6" speed={-0.15} />
      <OrbitRing radius={2} color="#10b981" speed={0.1} />

      {/* Skill orbs */}
      {skills.map((skill, index) => (
        <SkillOrb
          key={skill.name}
          skill={skill}
          position={positions[index]}
          index={index}
        />
      ))}

      {/* Connection lines */}
      <ConnectionLines positions={positions} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 4}
      />
    </>
  );
};

const Skills3DSphere: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-[500px] ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Skills3DSphere;
