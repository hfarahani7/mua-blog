// components/MultiStepForm.js
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Select,
  TextField,
  Typography
} from '@mui/material';

const Inquiries = () => {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState('');

  const [formData, setFormData] = useState({
    // Page 1 fields
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: region,
    zip: '',
    country: '',
    // Page 2 fields
    services: {
      hair: false,
      makeup: false,
    },
    weddingDate: '',
    venue: '',
    gettingReadyLocation: '',
    bridalPartyGuests: '',
    bridalPartyHair: false,
    bridalPartyMakeup: false,
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name in formData.services) {
      setFormData(prev => ({
        ...prev,
        services: { ...prev.services, [name]: checked }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: checked }));
    }
  };

  const handleNext = () => {
    setStep(2);
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
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
        .filter(([key, value]) => value)
        .map(([key]) => key)
        .join(', ')}

      Wedding Date: ${formData.weddingDate}
      Venue: ${formData.venue}
      Getting Ready Location: ${formData.gettingReadyLocation}

      Bridal Party Guests Requiring Services: ${formData.bridalPartyGuests}
      Bridal Party Hair: ${formData.bridalPartyHair ? 'Yes' : 'No'}
      Bridal Party Makeup: ${formData.bridalPartyMakeup ? 'Yes' : 'No'}

      Additional Info: ${formData.additionalInfo}
    `;

    const name = `${formData.firstName} ${formData.lastName}`;
    const payload = {
      message,
      recipient: formData.email,
      subject: `Inquiry from ${name}`
    };

    try {
      const res = await fetch('https://9qdpq9cmyh.execute-api.us-east-2.amazonaws.com/prod/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        alert('Email sent successfully!');
        // Optionally reset the form or redirect the user here
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F7EFDA',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          // position: 'relative',
          width: '60%',
          height: '100vh', // full screen height, or change to '400px' etc
          backgroundImage: 'url(https://jeanice-mua.s3.us-east-2.amazonaws.com/images/Dana-28.JPEG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}
      >
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 2, backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '10px'
}}>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <Box>

                <Typography variant="h4" gutterBottom>
                  Contact Information
                </Typography>



                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px'
                  }}
                >
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    placeholder="E.g. John"
                    value={formData.firstName}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    placeholder="E.g. Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    margin="normal"
                  />

                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px'
                  }}
                >
                  <TextField
                    fullWidth
                    required
                    label="Email Address"
                    name="email"
                    placeholder="E.g. john@doe.com"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    placeholder="E.g. +1 3004005000"
                    value={formData.phone}
                    onChange={handleChange}
                    margin="normal"
                  />
                </Box>
                <TextField
                  fullWidth
                  label="Street Address"
                  name="streetAddress"
                  placeholder="E.g. 42 Wallaby Way"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Apartment, suite, etc"
                  name="apartment"
                  placeholder=""
                  value={formData.apartment}
                  onChange={handleChange}
                  margin="normal"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px'
                  }}
                >
                  <TextField
                    fullWidth
                    label="City"
                    name="city"
                    placeholder="E.g. Sydney"
                    value={formData.city}
                    onChange={handleChange}
                    margin="normal"
                  />

                  <Select
                    fullWidth
                    label="State"
                    name="state"
                    placeholder="New York"
                    value={formData.state}
                    onChange={handleChange}
                  />

                  <TextField
                    fullWidth
                    label="ZIP / Postal Code"
                    name="zip"
                    placeholder="E.g. 2000"
                    value={formData.zip}
                    onChange={handleChange}
                    margin="normal"
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                  </Button>
                </Box>
              </Box>
            )}

            {step === 2 && (
              <Box>
                <Typography variant="h4" gutterBottom>
                  Service Details
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Services (Check all that apply)
                </Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.services.hair}
                        onChange={handleCheckboxChange}
                        name="hair"
                      />
                    }
                    label="Hair"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.services.makeup}
                        onChange={handleCheckboxChange}
                        name="makeup"
                      />
                    }
                    label="Makeup"
                  />
                </FormGroup>

                <TextField
                  fullWidth
                  label="Wedding Date"
                  name="weddingDate"
                  type="date"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />

                <TextField
                  fullWidth
                  label="Venue"
                  name="venue"
                  placeholder=""
                  inputProps={{ maxLength: 30 }}
                  value={formData.venue}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Getting Ready Location"
                  name="gettingReadyLocation"
                  placeholder=""
                  inputProps={{ maxLength: 30 }}
                  value={formData.gettingReadyLocation}
                  onChange={handleChange}
                  margin="normal"
                />

                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Bridal Party Services
                </Typography>
                <TextField
                  fullWidth
                  label="How many guests will require additional services? (Do not include self)"
                  name="bridalPartyGuests"
                  type="number"
                  value={formData.bridalPartyGuests}
                  onChange={handleChange}
                  margin="normal"
                />
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.bridalPartyHair}
                        onChange={handleCheckboxChange}
                        name="bridalPartyHair"
                      />
                    }
                    label="Hair"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.bridalPartyMakeup}
                        onChange={handleCheckboxChange}
                        name="bridalPartyMakeup"
                      />
                    }
                    label="Makeup"
                  />
                </FormGroup>

                <TextField
                  fullWidth
                  label="Additional Info"
                  name="additionalInfo"
                  placeholder="Enter your message..."
                  multiline
                  rows={4}
                  inputProps={{ maxLength: 180 }}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  margin="normal"
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button variant="outlined" onClick={handlePrevious}>
                    Previous
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    Send Message
                  </Button>
                </Box>
              </Box>
            )}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Inquiries;
