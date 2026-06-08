import emailjs from '@emailjs/browser';

// Initialize EmailJS - must be called once when the app loads
export const initializeEmailJS = () => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
};

export const formatInquiryMessage = (formData) => {
  return `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Street Address: ${formData.streetAddress}
Apartment: ${formData.apartment}
City: ${formData.city}
State: ${formData.state}
ZIP/Postal Code: ${formData.zip}
Country: ${formData.country}

Services Selected: ${Object.entries(formData.services)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(', ')}

Wedding Date: ${formData.weddingDate}
Venue: ${formData.venue}
Getting Ready Location: ${formData.gettingReadyLocation}

Guests Requiring Services: ${formData.bridalPartyGuests}
Bridal Party Hair: ${formData.bridalPartyHair ? 'Yes' : 'No'}
Bridal Party Makeup: ${formData.bridalPartyMakeup ? 'Yes' : 'No'}

Additional Info: ${formData.additionalInfo}
  `;
};

export const buildInquiryPayload = (formData, message) => {
  const name = `${formData.firstName} ${formData.lastName}`;
  return {
    to_email: process.env.NEXT_PUBLIC_OWNER_EMAIL, // Client's email
    from_name: name,
    from_email: formData.email,
    subject: `New Inquiry from ${name}`,
    message: message,
    reply_to_email: formData.email,
  };
};

export const sendInquiry = async (payload) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        to_email: payload.to_email,
        from_name: payload.from_name,
        from_email: payload.from_email,
        subject: payload.subject,
        message: payload.message,
        reply_to_email: payload.reply_to_email,
      }
    );
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send inquiry');
  }
};
