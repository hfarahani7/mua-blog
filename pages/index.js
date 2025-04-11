import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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


  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#EFACA5',
    fontFamily: 'Cormorant Upright'
  };

  const subheadingStyle = {
    fontSize: '1.2rem',
    maxWidth: '600px',
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const instagramGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
  };

  return (
    <div>
      <Head>
        <script
          async
          defer
          src="//www.instagram.com/embed.js"
        ></script>
      </Head>

      <main>
        <Box className="background">
          <Box className="overlay">
            <Typography variant="h3" gutterBottom>
              Welcome to Jeanice Huang MUA
            </Typography>
            <Typography variant="body1">
              Enhancing your natural glow for the big day. From subtle elegance to show-stopping glam.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 12, px: 4, mx: 'auto' }}>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid className="image-wrapper" item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Image
                src="https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_4382.JPEG"
                alt="Jeanice Huang Headshot"
                width={300}
                height={400}
                style={{ borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ mb: 2, color: '#E78E8E', fontWeight: 'bold' }}>
                  About Me
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Enhancing your natural glow for the big day.
                  <br />
                  From subtle elegance to show-stopping glam,
                  I specialize in making brides feel confident, radiant, and absolutely stunning.
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={4} >
                <Box
                  sx={{
                    backgroundImage: "url()",
                  }}
                >
                  <Typography>
                    Glam
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} >

                <Box
                  sx={{
                    backgroundImage: "url()",
                  }}
                >
                  <Typography>
                    Natural
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} >

                <Box
                  sx={{
                    backgroundImage: "url()",
                  }}
                >
                  <Typography>
                    Studio
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
      </Box>

      <h2>Recent Looks</h2>
      <Box sx={{ px: 4, py: 6 }}>
        <Grid container spacing={2}>
          {gridImages.map(({ link, altText }, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={link}
                  alt={altText}
                  width={300}
                  height={300}
                  style={{
                    objectFit: 'cover',
                    borderRadius: '16px',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
    </div >
  );
}
