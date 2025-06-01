
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // EmailJS configuration
    const serviceId = 'YOUR_SERVICE_ID'; // You need to replace this with your EmailJS service ID
    const templateId = 'YOUR_TEMPLATE_ID'; // You need to replace this with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // You need to replace this with your EmailJS public key

    // Check if EmailJS is configured
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      // For now, this will log the form data to console until EmailJS is configured
      console.log('Contact form submission:', {
        ...formData,
        timestamp: new Date().toISOString(),
        recipient: 'lovarajupikki123@gmail.com',
        note: 'To receive actual emails, please configure EmailJS with your service ID, template ID, and public key'
      });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    }

    // Send email using EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'lovarajupikki123@gmail.com',
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    console.log('Email sent successfully via EmailJS');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
