// import Stack from '@mui/material/Stack';
// import styles from '../styles/header.module.css';

// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Select,
//   TextField,
//   Typography
// } from '@mui/material';

// export default function Services() {
//     return (
//       <Stack className={styles.inqBackground}>
        
//       </Stack>
//     );
//   }
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
    <Stack className={styles.inqBackground} sx={{ py: 6, px: { xs: 2, md: 6 } }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Services
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom>Hair Services</Typography>
        <Divider sx={{ mb: 2 }} />
        <ul style={{ paddingLeft: '1rem', lineHeight: 1.8 }}>
          <li>Bridal Hair Styling</li>
          <li>Bridesmaid Hair</li>
          <li>Mother of the Bride/Groom Hair</li>
          <li>Flower Girl Styling</li>
          <li>Hair Trials & Consultations</li>
          <li>Clip-In Extension Styling</li>
          <li>Textured/Curly Hair Styling</li>
        </ul>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom>Makeup Services</Typography>
        <Divider sx={{ mb: 2 }} />
        <ul style={{ paddingLeft: '1rem', lineHeight: 1.8 }}>
          <li>Bridal Makeup (Traditional or Airbrush)</li>
          <li>Bridesmaid Makeup</li>
          <li>Mother of the Bride/Groom Makeup</li>
          <li>Flower Girl Light Application</li>
          <li>False Lash Application</li>
          <li>Makeup Trials & Consultations</li>
          <li>Touch-up Kits & On-Location Services</li>
        </ul>
      </Box>

      <Box>
        <Typography variant="h5" gutterBottom>Frequently Asked Questions</Typography>
        <Divider sx={{ mb: 2 }} />

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Do you offer trials before the big day?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes! Hair and makeup trials are encouraged and available by appointment. It's a great way to preview your look and make any adjustments in advance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Do you travel to the venue?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely — we specialize in on-location services throughout Long Island and NYC. Travel fees may apply depending on distance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How far in advance should I book?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              As soon as you have your date set! Popular weekends fill up quickly, so we recommend booking 6–12 months in advance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How should I prepare my skin and hair?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Clean, dry hair and a freshly moisturized face work best. Avoid heavy products or washing your hair right before your session unless otherwise instructed.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
}
