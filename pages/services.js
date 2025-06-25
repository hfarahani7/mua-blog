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
        <Box className={styles.serviceBox}>
          <Typography variant="h5" gutterBottom className={styles.aboutTitle}>Hair Services</Typography>
          <Divider />
          <ul className={styles.serviceList} >
            <li className={styles.serviceItem}>Bridal Hair Styling</li>
            <li className={styles.serviceItem}>Bridesmaid Hair</li>
            <li className={styles.serviceItem}>Mother of the Bride/Groom Hair</li>
            <li className={styles.serviceItem}>Flower Girl Styling</li>
            <li className={styles.serviceItem}>Hair Trials & Consultations</li>
            <li className={styles.serviceItem}>Clip-In Extension Styling</li>
            <li className={styles.serviceItem}>Textured/Curly Hair Styling</li>
          </ul>
        </Box>
        <Box className={styles.serviceBox}>
          <Typography variant="h5" gutterBottom className={styles.aboutTitle}>Makeup Services</Typography>
          <Divider />
          <ul className={styles.serviceList}>
            <li className={styles.serviceItem}>Bridal Makeup (Traditional or Airbrush)</li>
            <li className={styles.serviceItem}>Bridesmaid Makeup</li>
            <li className={styles.serviceItem}>Mother of the Bride/Groom Makeup</li>
            <li className={styles.serviceItem}>Flower Girl Light Application</li>
            <li className={styles.serviceItem}>False Lash Application</li>
            <li className={styles.serviceItem}>Makeup Trials & Consultations</li>
            <li className={styles.serviceItem}>Touch-up Kits & On-Location Services</li>
          </ul>
        </Box>
      </Box>

      <Box>
        <Typography variant="h5" gutterBottom className={styles.aboutTitle}>Frequently Asked Questions</Typography>
        <Divider sx={{ mb: 2 }} />

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.serviceItem}>Do you offer trials before the big day?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.serviceItem}>
              Yes! Hair and makeup trials are encouraged and available by appointment. It's a great way to preview your look and make any adjustments in advance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.serviceItem}>Do you travel to the venue?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.serviceItem}>
              Absolutely — we specialize in on-location services throughout Long Island and NYC. Travel fees may apply depending on distance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.serviceItem}>How far in advance should I book?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.serviceItem}>
              As soon as you have your date set! Popular weekends fill up quickly, so we recommend booking 6–12 months in advance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.serviceItem}>How should I prepare my skin and hair?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.serviceItem}>
              Clean, dry hair and a freshly moisturized face work best. Avoid heavy products or washing your hair right before your session unless otherwise instructed.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
}
