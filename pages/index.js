// pages/index.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from '../styles/header.module.css';
import Stack from '@mui/material/Stack';
import Link from "next/link";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import '@fontsource/cormorant-upright';

export default function Index() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gridImages = [
    {
      link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG",
      altText: "Jeanice doing makeup"
    },
    {
      link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG",
      altText: "Bride with dress"
    },
    {
      link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_9555.PNG",
      altText: "Image of finished makeup"
    },
    {
      link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8631.PNG",
      altText: "Holding mirror up to finished makeup"
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && window.instgrm && mounted) {
      window.instgrm.Embeds.process();
    }
  }, [mounted]);

  return (
    <div>
      <Head>
        <script async defer src="//www.instagram.com/embed.js"></script>
      </Head>

      <main>
        <Box className={styles.background}>
          <Box className={styles.overlay}>
            <Typography variant="h3" gutterBottom className={styles.heading}>
              Welcome to Jeanice Huang MUA
            </Typography>
            <Typography variant="body1" className={styles.subheading}>
              Enhancing your natural glow for the big day. From subtle elegance to show-stopping glam.
            </Typography>
          </Box>
        </Box>


        <Grid container spacing={4} className={styles.aboutWrapper} sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Grid item xs={12} sm={6} className={styles.imageWrapper} >
            <Image
              src="https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_4382.JPEG"
              alt="Jeanice Huang Headshot"
              width={300}
              height={400}
              className={styles.profileImage}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="h4" className={styles.aboutTitle}>
                  About Me
                </Typography>
                <Typography variant="body1" className={styles.aboutText}>
                  Enhancing your natural glow for the big day.<br />
                  From subtle elegance to show-stopping glam,
                  I specialize in making brides feel confident, radiant, and absolutely stunning.
                </Typography>
              </Box>

              <Stack spacing={2} direction="row" sx={{ width: '100%' }}>
                <Link href="/portfolio#glam" className={styles.labelBox}>
                  <Box className={styles.labelBox} sx={{ backgroundImage: `url("https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG")` }}>
                    <Typography> Glam </Typography>
                  </Box>
                </Link>

                <Link href="/portfolio#natural" className={styles.labelBox}>

                  <Box className={styles.labelBox} sx={{ backgroundImage: `url("https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG")` }}>
                    <Typography> Natural </Typography>
                  </Box>
                </Link>

                <Link href="/portfolio#studio" className={styles.labelBox}>
                  <Box className={styles.labelBox} sx={{ backgroundImage: `url("https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG")` }}>
                    <Typography> Studio </Typography>
                  </Box>
                </Link>
              </Stack>
            </Stack>
          </Grid>

        </Grid>


        <h2 className={styles.recentHeading}>Recent Looks</h2>
        <Box className={styles.galleryWrapper}>
          <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            {gridImages.map(({ link, altText }, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box className={styles.galleryImageBox}>
                  <Image
                    src={link}
                    alt={altText}
                    width={300}
                    height={300}
                    className={styles.galleryImage}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
    </div>
  );
}
