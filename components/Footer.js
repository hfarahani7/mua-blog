// components/Footer.js
import React from 'react';
import Link from 'next/link';

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
    // gap: '0.5rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <p>&copy; {new Date().getFullYear()} JEANICEHUANGMUA LLC</p>

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