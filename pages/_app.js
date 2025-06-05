// pages/_app.js
import '@fontsource/cormorant-upright';
import '@fontsource/mr-de-haviland';

import '../styles/globals.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Socials from '../components/Socials.js';
import { Box, Container, ThemeProvider } from '@mui/material';


function MuaApp({ Component, pageProps }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh" // Full height of the viewport
    >
      <Header />
        <Box
          height="calc(100%-310px)"
          marginTop="60px"
        >
          <Component {...pageProps} />
        </Box>
        <Socials />
      <Footer />
    </Box>
  );
}

export default MuaApp;