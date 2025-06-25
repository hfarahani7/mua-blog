import '@fontsource/cormorant-upright';
import '@fontsource/mr-de-haviland';

import '../styles/globals.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Socials from '../components/Socials.js';
import { Box, Container, ThemeProvider } from '@mui/material';
import Head from 'next/head';

import { useRouter } from 'next/router';

function MuaApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh" // Full height of the viewport
    >
      {!isHome && <Header />}
        <Box
          sx={{
            paddingTop: isHome ? 0 : '70px'
          }}
          flex="1 0 auto"
        >
          <Component {...pageProps} />
        </Box>
        {/* <Socials /> */}
      <Footer />
    </Box>
    </>
  );
}

export default MuaApp;