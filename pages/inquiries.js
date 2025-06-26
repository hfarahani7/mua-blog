import React, { useState } from 'react';
import Stack from '@mui/material/Stack';

import styles from '../styles/header.module.css';

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

import {
  formatInquiryMessage,
  buildInquiryPayload,
  sendInquiry
} from '../api/sendEmail';

const Inquiries = () => {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState('');

  const [formData, setFormData] = useState({
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

  const handleNext = () => setStep(2);
  const handlePrevious = () => setStep(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = formatInquiryMessage(formData);
    const payload = buildInquiryPayload(formData, message);

    try {
      await sendInquiry(payload);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <Stack>
      <Box
        className={styles.inqBackground}
      >
        <Box
          className={styles.formWrapper}
          sx={{
            width: '60%',
            height: '100vh',
            backgroundImage: 'url(https://dwxk3eiesmmgs.cloudfront.net/images/Dana-28.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box className={styles.overlayWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
              {step === 1 ? (
                <StepOne formData={formData} handleChange={handleChange} handleNext={handleNext} />
              ) : (
                <StepTwo formData={formData} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange} handlePrevious={handlePrevious} />
              )}
            </form>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

const StepOne = ({ formData, handleChange, handleNext }) => (
  <Box>
    <Typography variant="h4" className={styles.aboutTitle} gutterBottom>Contact Information</Typography>
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} margin="normal" />
    </Box>
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <TextField fullWidth required label="Email Address" name="email" value={formData.email} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} margin="normal" />
    </Box>
    <TextField fullWidth label="Street Address" name="streetAddress" value={formData.streetAddress} onChange={handleChange} margin="normal" />
    <TextField fullWidth label="Apartment, suite, etc" name="apartment" value={formData.apartment} onChange={handleChange} margin="normal" />
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <TextField fullWidth label="City" name="city" value={formData.city} onChange={handleChange} margin="normal" />
      <Select fullWidth name="state" value={formData.state} onChange={handleChange} />
      <TextField fullWidth label="ZIP / Postal Code" name="zip" value={formData.zip} onChange={handleChange} margin="normal" />
    </Box>
    <TextField fullWidth label="Wedding Date" name="weddingDate" type="date" value={formData.weddingDate} onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
      <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
    </Box>
  </Box>
);

const StepTwo = ({ formData, handleChange, handleCheckboxChange, handlePrevious }) => (
  <Box>
    <Typography variant="h4" className={styles.aboutTitle} gutterBottom>Services</Typography>
    <Typography variant="body1" className={styles.aboutText} gutterBottom>(Check all that apply)</Typography>
    {/* <FormGroup row>
      <FormControlLabel control={<Checkbox checked={formData.services.hair} onChange={handleCheckboxChange} name="hair" />} label="Hair" />
      <FormControlLabel control={<Checkbox checked={formData.services.makeup} onChange={handleCheckboxChange} name="makeup" />} label="Makeup" />
    </FormGroup> */}
    <TextField fullWidth label="Venue" name="venue" inputProps={{ maxLength: 30 }} value={formData.venue} onChange={handleChange} margin="normal" />
    <TextField fullWidth label="Getting Ready Location" name="gettingReadyLocation" inputProps={{ maxLength: 30 }} value={formData.gettingReadyLocation} onChange={handleChange} margin="normal" />
    <TextField fullWidth label="Guests Requiring Services" name="bridalPartyGuests" type="number" value={formData.bridalPartyGuests} onChange={handleChange} margin="normal" />
    <FormGroup row>
      <FormControlLabel control={<Checkbox checked={formData.bridalPartyHair} onChange={handleCheckboxChange} name="bridalPartyHair" />} label="Hair" />
      <FormControlLabel control={<Checkbox checked={formData.bridalPartyMakeup} onChange={handleCheckboxChange} name="bridalPartyMakeup" />} label="Makeup" />
    </FormGroup>
    <TextField fullWidth label="Additional Info" name="additionalInfo" multiline rows={4} inputProps={{ maxLength: 180 }} value={formData.additionalInfo} onChange={handleChange} margin="normal" />
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <Button variant="outlined" onClick={handlePrevious}>Previous</Button>
      <Button variant="contained" color="primary" type="submit">Send Message</Button>
    </Box>
  </Box>
);

export default Inquiries;
