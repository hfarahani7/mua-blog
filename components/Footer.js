// components/Footer.js
import styles from '../styles/header.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} JEANICEHUANGMUA LLC <br />
          All Rights Reserved <br />
          Built by Henry Farahani 2025 <br />
          <a href="https://henryfarahani.com">henryfarahani.com</a> <br />
        </p>
      </div>
    </footer>
  );
}
