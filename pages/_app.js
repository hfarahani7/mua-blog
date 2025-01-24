// pages/_app.js
import '../styles/globals.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function MuaApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MuaApp;