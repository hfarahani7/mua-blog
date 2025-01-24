// components/Footer.js
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    textAlign: 'center',
    marginTop: 'auto',
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

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    transition: 'color 0.2s ease-in-out',
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
        <p>&copy; {new Date().getFullYear()} Blushing Bride Beauty</p>

        {/* Social / Contact Links */}
        <div style={socialLinksStyle}>
          <Link
            href="https://www.instagram.com/yourInstagramHandle"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link
            href="https://www.facebook.com/yourFacebookPage"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Link>
          <Link
            href="mailto:contact@yourdomain.com"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Email
          </Link>
        </div>

        <p>All Rights Reserved</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Built by Mua MVP Design 2025
        </p>
      </div>
    </footer>
  );
}
