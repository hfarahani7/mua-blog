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
    message,
    recipient: formData.email,
    subject: `Inquiry from ${name}`,
  };
};

export const sendInquiry = async (payload) => {
  const emailUrl = process.env.NEXT_PUBLIC_EMAIL_URL;
  const res = await fetch(emailUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error('Failed to send inquiry');
  }
  return res;
};
