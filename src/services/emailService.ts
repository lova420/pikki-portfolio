
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

    // For demonstration, we'll show the data that would be sent to your email
    alert(`Message details that would be sent to your email:
    
From: ${formData.name} (${formData.email})
Subject: ${formData.subject}
Message: ${formData.message}
    
To integrate with a real email service, you can:
1. Use EmailJS (free tier available)
2. Use Formspree
3. Set up a backend with Supabase Edge Functions
4. Use Netlify Forms if deploying to Netlify`);

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
