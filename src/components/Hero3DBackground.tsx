
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating geometric shape
const FloatingShape = ({
  position,
  shape,
  color,
  scale = 1,
  speed = 1,
  rotationSpeed = 0.5
}: {
  position: [number, number, number];
  shape: 'sphere' | 'torus' | 'icosahedron' | 'octahedron';
  color: string;
  scale?: number;
  speed?: number;
  rotationSpeed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * rotationSpeed;
      meshRef.current.rotation.y += 0.005 * rotationSpeed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  const renderGeometry = () => {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[1 * scale, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[1 * scale, 0.4 * scale, 16, 32]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1 * scale, 0]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1 * scale, 0]} />;
      default:
        return <sphereGeometry args={[1 * scale, 32, 32]} />;
    }
  };

  const isWireframe = shape === 'icosahedron';

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {renderGeometry()}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={isWireframe ? 0.5 : 0.6}
          wireframe={isWireframe}
          emissive={color}
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
};

// Animated particles in 3D space
const Particles = ({ count = 100 }: { count?: number }) => {
  const points = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Connecting lines between random points
const ConnectionLines = () => {
  const linesRef = useRef<THREE.LineSegments>(null);

  const linePositions = useMemo(() => {
    const positions: number[] = [];
    const points = 15;
    const pointsArray: [number, number, number][] = [];

    for (let i = 0; i < points; i++) {
      pointsArray.push([
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8
      ]);
    }

    for (let i = 0; i < points; i++) {
      for (let j = i + 1; j < points; j++) {
        const dist = Math.sqrt(
          Math.pow(pointsArray[i][0] - pointsArray[j][0], 2) +
          Math.pow(pointsArray[i][1] - pointsArray[j][1], 2) +
          Math.pow(pointsArray[i][2] - pointsArray[j][2], 2)
        );
        if (dist < 6) {
          positions.push(...pointsArray[i], ...pointsArray[j]);
        }
      }
    }

    return new Float32Array(positions);
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
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
      <lineBasicMaterial color="#3b82f6" transparent opacity={0.15} />
    </lineSegments>
  );
};

// Main 3D Scene
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, 5, 0]} intensity={0.3} color="#ec4899" />

      {/* Main floating shapes */}
      <FloatingShape position={[-4, 2, -3]} shape="sphere" color="#3b82f6" scale={0.8} speed={0.8} />
      <FloatingShape position={[4, -1, -2]} shape="torus" color="#8b5cf6" scale={0.6} speed={1.2} />
      <FloatingShape position={[-3, -2, -4]} shape="icosahedron" color="#06b6d4" scale={0.7} speed={0.6} rotationSpeed={0.8} />
      <FloatingShape position={[3, 3, -5]} shape="octahedron" color="#ec4899" scale={0.5} speed={1} />
      <FloatingShape position={[0, -3, -3]} shape="sphere" color="#10b981" scale={0.4} speed={1.5} />
      <FloatingShape position={[-5, 0, -6]} shape="torus" color="#f59e0b" scale={0.5} speed={0.7} />
      <FloatingShape position={[5, 1, -4]} shape="icosahedron" color="#6366f1" scale={0.6} speed={0.9} />

      {/* Particles */}
      <Particles count={150} />

      {/* Connection lines */}
      <ConnectionLines />
    </>
  );
};

const Hero3DBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
