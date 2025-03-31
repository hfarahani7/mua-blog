// components/Footer.js
import React from 'react';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#BADD7F',
    padding: '1rem',
    textAlign: 'center',
    marginTop: 'auto',
    color: '#3E8440',
    width: '100%',
    bottom: '0',
    height: '310px'
  };

  const footerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = '#0070f3';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = '#333';
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <p>&copy; {new Date().getFullYear()} Jeanice Huang MUA</p>

        {/* Social / Contact Links */}
        <div style={socialLinksStyle}>
            <Link
              href="https://www.instagram.com/mua__jeanice/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Link>
          
            <Link
              href="mailto:mua.jeanice@gmail.com"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <EmailIcon />
            </Link>
          
        </div>

        <p>All Rights Reserved</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Built by Henry Farahani 2025
        </p>
        <p>
          <a href="henryfarahani.com">henryfarahani.com</a>
        </p>
      </div>
    </footer>
  );
}
