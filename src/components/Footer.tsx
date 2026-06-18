import { Phone, Send } from 'lucide-react';
import styles from './Footer.module.css';

const InstagramIcon = ({ size = 18, strokeWidth = 1.5 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <img src="/b-orange.svg" alt="Bronly Logo" width={24} height={32} className={styles.logoIcon} />
            <span className={styles.logoText}>Bronly</span>
          </div>
          
          <nav className={styles.nav}>
            <a href="#audience">Для кого</a>
            <a href="#how-it-works">Как работает</a>
            <a href="#features">Возможности</a>
            <a href="#benefits">Преимущества</a>
          </nav>
          
          <div className={styles.socials}>
            <a href="tel:+998935653801" className={styles.socialLink} aria-label="Позвонить">
              <Phone size={18} strokeWidth={1.5} />
            </a>
            <a href="https://t.me/feruuuz1" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Telegram">
              <Send size={18} strokeWidth={1.5} />
            </a>
            <a href="https://instagram.com/bronly.uz/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <InstagramIcon size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        
        <div className={styles.poweredBy}>
          Powered by Bronly
        </div>
      </div>
    </footer>
  );
}
