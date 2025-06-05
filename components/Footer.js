// components/Footer.js
import styles from '../styles/header.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>&copy; {new Date().getFullYear()} JEANICEHUANGMUA LLC</p>
        <p>All Rights Reserved</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Built by Henry Farahani 2025
        </p>
        <p>
          <a href="https://henryfarahani.com">henryfarahani.com</a>
        </p>
      </div>
    </footer>
  );
}
