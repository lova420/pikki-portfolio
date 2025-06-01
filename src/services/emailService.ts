
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // For now, this will log the form data to console
    // You can replace this with your preferred email service (EmailJS, Formspree, etc.)
    console.log('Contact form submission:', {
      ...formData,
      timestamp: new Date().toISOString(),
      recipient: 'lovarajupikki123@gmail.com'
    });

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
