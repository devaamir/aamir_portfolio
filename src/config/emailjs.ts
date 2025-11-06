// EmailJS Configuration
// To set up EmailJS:
// 1. Create an account at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the placeholder values below with your actual EmailJS credentials

export const emailjsConfig = {
  // Replace with your EmailJS Public Key
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  
  // Replace with your EmailJS Service ID
  serviceId: 'YOUR_SERVICE_ID',
  
  // Replace with your EmailJS Template ID
  templateId: 'YOUR_TEMPLATE_ID',
}

// Example EmailJS template variables:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{subject}} - message subject
// {{message}} - message content
// {{to_name}} - your name (can be hardcoded in template)
