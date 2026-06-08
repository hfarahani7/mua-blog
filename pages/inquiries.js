import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';

import styles from '../styles/header.module.css';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';

import {
  initializeEmailJS,
  formatInquiryMessage,
  buildInquiryPayload,
  sendInquiry
} from '../api/sendEmail';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

const Inquiries = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS when component mounts
    initializeEmailJS();
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = formatInquiryMessage(formData);
      const payload = buildInquiryPayload(formData, message);
      await sendInquiry(payload);
      alert('Inquiry sent successfully!');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        streetAddress: '',
        apartment: '',
        city: '',
        state: '',
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
      setStep(1);
    } catch (error) {
      console.error('Error sending inquiry:', error);
      alert('An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
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
            <form className={styles.form} onSubmit={step === 3 ? handleConfirm : (e) => e.preventDefault()}>
              {step === 1 && (
                <StepOne formData={formData} handleChange={handleChange} handleNext={handleNext} />
              )}
              {step === 2 && (
                <StepTwo formData={formData} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange} handlePrevious={handlePrevious} handleNext={handleNext} />
              )}
              {step === 3 && (
                <StepThree formData={formData} handlePrevious={handlePrevious} isSubmitting={isSubmitting} />
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
      <FormControl fullWidth margin="normal">
        <InputLabel id="state-select-label">State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          name="state"
          value={formData.state}
          label="State"
          onChange={handleChange}
        >
          {US_STATES.map((st) => (
            <MenuItem key={st} value={st}>{st}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField fullWidth label="ZIP / Postal Code" name="zip" value={formData.zip} onChange={handleChange} margin="normal" />
    </Box>
    <TextField fullWidth label="Wedding Date" name="weddingDate" type="date" value={formData.weddingDate} onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
      <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
    </Box>
  </Box>
);

const StepTwo = ({ formData, handleChange, handleCheckboxChange, handlePrevious, handleNext }) => (
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
      <Button variant="contained" color="primary" onClick={handleNext}>Review</Button>
    </Box>
  </Box>
);

const StepThree = ({ formData, handlePrevious, isSubmitting }) => (
  <Box>
    <Typography variant="h4" className={styles.aboutTitle} gutterBottom>Confirm Your Information</Typography>
    <Typography variant="body2" className={styles.aboutText} gutterBottom sx={{ mb: 3 }}>Please review your details before submitting</Typography>
    
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Contact Information</Typography>
      <Box sx={{ backgroundColor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: 1 }}>
        <Typography variant="body2"><strong>Name:</strong> {formData.firstName} {formData.lastName}</Typography>
        <Typography variant="body2"><strong>Email:</strong> {formData.email}</Typography>
        <Typography variant="body2"><strong>Phone:</strong> {formData.phone}</Typography>
        <Typography variant="body2"><strong>Address:</strong> {formData.streetAddress} {formData.apartment && `${formData.apartment}`}</Typography>
        <Typography variant="body2"><strong>City:</strong> {formData.city}, {formData.state} {formData.zip}</Typography>
      </Box>
    </Box>

    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Wedding Details</Typography>
      <Box sx={{ backgroundColor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: 1 }}>
        <Typography variant="body2"><strong>Wedding Date:</strong> {formData.weddingDate}</Typography>
        <Typography variant="body2"><strong>Venue:</strong> {formData.venue}</Typography>
        <Typography variant="body2"><strong>Getting Ready Location:</strong> {formData.gettingReadyLocation}</Typography>
        <Typography variant="body2"><strong>Guests Requiring Services:</strong> {formData.bridalPartyGuests}</Typography>
      </Box>
    </Box>

    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Services</Typography>
      <Box sx={{ backgroundColor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: 1 }}>
        <Typography variant="body2"><strong>Hair:</strong> {formData.bridalPartyHair ? 'Yes' : 'No'}</Typography>
        <Typography variant="body2"><strong>Makeup:</strong> {formData.bridalPartyMakeup ? 'Yes' : 'No'}</Typography>
        {formData.additionalInfo && (
          <Typography variant="body2"><strong>Additional Info:</strong> {formData.additionalInfo}</Typography>
        )}
      </Box>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
      <Button variant="outlined" onClick={handlePrevious} disabled={isSubmitting}>Previous</Button>
      <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </Box>
  </Box>
);

export default Inquiries;
