// pages/_app.js
import '../styles/globals.css';
import Header from '../components/Header.js';

function MuaApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MuaApp;