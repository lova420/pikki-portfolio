import emailjs from 'emailjs-com';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    await emailjs.send(
      'service_wy4ku8n',
      'template_q0wy6vz',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      '7dCF-s_NJkhJlP0uD'
    );
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
