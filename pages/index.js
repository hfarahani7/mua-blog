// pages/index.js
import * as React from 'react';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from '../styles/header.module.css';
import Stack from '@mui/material/Stack';
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';

import '@fontsource/cormorant-upright';

export default function Index() {
  const [mounted, setMounted] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const gridImages = [
    {
      link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_6084.jpeg",
      altText: "Jeanice doing makeup" //not this one
    },
    {
      link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_4037.JPEG",
      altText: "Bride with dress"
    },
    {
      link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_9555.PNG",
      altText: "Image of finished makeup"
    },
    {
      link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG",
      altText: "Holding mirror up to finished makeup" //not this one
    }
  ];

  const navLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Inquiries", href: "/inquiries" },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && window.instgrm && mounted) {
      window.instgrm.Embeds.process();
    }
  }, [mounted]);

  return (
    <div>
      <Head>
        {/* <script async defer src="//www.instagram.com/embed.js"></script>
        <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-5NJJ6EQXFL"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5NJJ6EQXFL');
</script> */}
      </Head>

      <main>
        <Box className={styles.background}>
          <Box sx={{ flexGrow: 1, display: 'flex', marginLeft: '10%', justifyContent: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              className={styles.logo}
            >
              Jeanice Huang
            </Typography>
          </Box>
          <Box className={styles.linkBox}>
            {navLinks.map((link) => (
                <Link href={link.href}>
                  <Typography variant="inherit" className={styles.navLink}>{link.label}</Typography>
                </Link>
            ))}
          </Box>
        </Box>

        <h2 className={styles.recentHeading}>Recent Looks {' '}
          <Link
            href="https://www.instagram.com/mua__jeanice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              className={styles.iconStyle}
            />
          </Link>
        </h2>
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

        <Box className={styles.lowerBackground}>
        
        </Box>

        <Grid container spacing={4} className={styles.aboutWrapper} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                <h2 className={styles.recentHeading}>About Me</h2>

                <Typography variant="body1" className={styles.aboutText}>
                  Enhancing your natural glow for the big day.<br />
                  From subtle elegance to show-stopping glam,
                  I specialize in making brides feel confident, radiant, and absolutely stunning.
                </Typography>
              </Box>

              <Stack spacing={2} direction="row" sx={{ width: '100%' }}>
                <Link href="/portfolio#bridal" className={styles.labelBox}>
                  <Box className={styles.labelBox} sx={{ backgroundImage: `url("https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_6087.jpeg")` }}>
                    <Typography> Bridal </Typography>
                  </Box>
                </Link>

                <Link href="/portfolio#studio" className={styles.labelBox}>
                  <Box className={styles.labelBox} sx={{ backgroundImage: `url("https://jeanice-mua.s3.us-east-2.amazonaws.com/images/C9FBB259-D95B-4990-9992-CFF20769905C.JPG")` }}>
                    <Typography> Studio </Typography>
                  </Box>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
