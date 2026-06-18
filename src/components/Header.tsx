"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <motion.div 
          className={`container ${styles.container}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Mobile Hamburger */}
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Открыть меню">
            <Menu size={26} strokeWidth={2} />
          </button>

          {/* Logo */}
          <div className={styles.logo}>
            <motion.img 
              src="/b-orange.svg" 
              alt="Bronly Logo" 
              width={24} 
              height={32} 
              className={styles.logoIcon}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            />
            <span className={styles.logoText}>Bronly</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className={styles.nav}>
            <ul>
              <li><a href="#audience">Для кого</a></li>
              <li><a href="#features">Возможности</a></li>
              <li><a href="#how-it-works">Как работает</a></li>
              <li><a href="#benefits">Преимущества</a></li>
            </ul>
          </nav>
          
          {/* CTA Button */}
          <a href="#cta" className={`btn-primary ${styles.ctaButton}`}>
            <span className={styles.ctaTextDesktop}>Получить демо</span>
            <span className={styles.ctaTextMobile}>Получить</span>
          </a>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className={styles.mobileMenuHeader}>
              <div className={styles.logo}>
                <img src="/b-orange.svg" alt="Bronly Logo" width={24} height={32} />
                <span className={styles.logoText}>Bronly</span>
              </div>
              <button className={styles.closeBtn} onClick={toggleMenu} aria-label="Закрыть меню">
                <X size={28} strokeWidth={2} />
              </button>
            </div>
            
            <nav className={styles.mobileNav}>
              <ul>
                <li><a href="#audience" onClick={toggleMenu}>Для кого</a></li>
                <li><a href="#how-it-works" onClick={toggleMenu}>Как работает</a></li>
                <li><a href="#features" onClick={toggleMenu}>Возможности</a></li>
                <li><a href="#benefits" onClick={toggleMenu}>Преимущества</a></li>
              </ul>
            </nav>
            
            <div className={styles.mobileMenuFooter}>
              <a href="#cta" className={`btn-primary ${styles.mobileCtaBtn}`} onClick={toggleMenu}>
                Получить консультацию
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
