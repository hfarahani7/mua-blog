import Stack from '@mui/material/Stack';
import styles from '../styles/header.module.css';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Services() {
  return (
    <Stack className={styles.serviceWrapper} >
      {/* <Typography className={styles.aboutTitle}>
        Services
      </Typography> */}

      <Box className={styles.serviceWrapper}>
        <Box className={styles.serviceBox} >
          {/* sx={{backgroundImage: `url(https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_9076.JPG)`}} */}
          <Typography variant="h5" gutterBottom className={styles.aboutTitle}>Hair Services</Typography>
          <Divider />
          <ul className={styles.serviceList} >
            <li className={styles.serviceItem}>Bridal hair and makeup</li>
            <li className={styles.serviceItem}>Bridal party hair and makeup</li>
            <li className={styles.serviceItem}>Mother of the bride/groom hair</li>
            <li className={styles.serviceItem}>Hair and makeup trials</li>
            <li className={styles.serviceItem}>Clip-in hair extension application</li>
            <li className={styles.serviceItem}>Event/photoshoot hair and makeup</li>
          </ul>
        </Box> 
      </Box>

      <Box sx={{paddingTop: "20px", paddingBottom: "20px"}}>
        <Typography variant="h5" gutterBottom className={styles.aboutTitle}>Frequently Asked Questions</Typography>
        <Divider sx={{ mb: 2 }} />

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.serviceItem}>Do you offer trials before the big day?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.serviceItem}>
              Yes! Hair and makeup trials are encouraged and are booked after contracts are signed.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.serviceItem}>Do you travel?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.serviceItem}>
              Absolutely — we specialize in on-location services throughout Long Island and NYC. Travel fees may apply depending on distance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.serviceItem}>Do you require a deposit?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.serviceItem}>
              Yes, a non-refundable deposit is made after initial consultation.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.serviceItem}>How should I prepare my skin and hair?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.serviceItem}>
              A prep guide will be send via email after booking.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.serviceItem}>Where are your services provided?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.serviceItem}>
              We work on-location.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
}
