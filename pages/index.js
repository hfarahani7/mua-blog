import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

import '@fontsource/cormorant-upright'; 

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // useEffect(() => {
  //   if (window.instgrm && mounted) {
  //     window.instgrm.Embeds.process();
  //   }
  // }, [mounted]);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.instgrm && mounted) {
      window.instgrm.Embeds.process();
    }
  }, [mounted]);

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#F7EFDA'
  };

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

  return(
    <div>
      <Head>
        <script
          async
          defer
          src="//www.instagram.com/embed.js"
        ></script>
      </Head>

      <main style={sectionStyle}>
        <div className='homepage_title' style={{ display: "flex", height: "350px" }}>
          <h1 style={headingStyle}>Welcome to Jeanice Huang Bridal</h1>
          <Image src="/assets/headshot.JPEG" alt="Jeanice Huang Headshot" width={200} height={200} />
        </div>
        <p style={subheadingStyle}>
          Enhancing your natural glow for the big day.
          From subtle elegance to show-stopping glam, 
          I specialize in making brides feel confident, radiant, and absolutely stunning.
        </p>

        <h2 style={{ marginBottom: '1rem' }}>Recent Looks</h2>
        {mounted && ( //make this a component and import?
          <div style={instagramGridStyle}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/CpXXXXXXXXX/"
            data-instgrm-version="14"
            style={{ width: '300px', margin: 0 }}
          ></blockquote>

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/CnXXXXXXXXX/"
            data-instgrm-version="14"
            style={{ width: '300px', margin: 0 }}
          ></blockquote>

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/ClXXXXXXXXX/"
            data-instgrm-version="14"
            style={{ width: '300px', margin: 0 }}
          ></blockquote>
        </div>
        )}
      </main>
    </div>
  );
}
