// Inquiry email formatting. Ported unchanged from the old Next.js api/sendEmail.js so the
// email that arrives looks exactly the same, and the EmailJS template (which uses the
// params to_email, from_name, from_email, subject, message, reply_to_email) keeps working.

export interface InquiryData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  /** Not on the form (same as the old site); always empty. Kept so the email format is identical. */
  country: string;
  /** Not on the form (same as the old site); always false. Kept so the email format is identical. */
  services: { hair: boolean; makeup: boolean };
  weddingDate: string;
  venue: string;
  gettingReadyLocation: string;
  bridalPartyGuests: string;
  bridalPartyHair: boolean;
  bridalPartyMakeup: boolean;
  additionalInfo: string;
}

export interface InquiryPayload {
  to_email: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  reply_to_email: string;
}

export const formatInquiryMessage = (formData: InquiryData): string => {
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

export const buildInquiryPayload = (formData: InquiryData, message: string, ownerEmail: string): InquiryPayload => {
  const name = `${formData.firstName} ${formData.lastName}`;
  return {
    to_email: ownerEmail, // Client's email
    from_name: name,
    from_email: formData.email,
    subject: `New Inquiry from ${name}`,
    message: message,
    reply_to_email: formData.email,
  };
};
