"use client";

import { motion } from 'framer-motion';
import { Sparkles, Download, Heart, Clock, ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.hero}>
      {/* Анимированный паттерн-фон SaaS */}
      <div className={styles.pattern}></div>
      
      {/* Мягкие свечения на фоне */}
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>
      
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            <Sparkles size={16} strokeWidth={2.5} className={styles.badgeIcon} />
            <span className={styles.badgeText}>CRM нового поколения в Telegram</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className={styles.title}>
            Автоматизируйте запись клиентов через <span className={styles.highlightWrapper}>
              <span className={styles.highlight}>Telegram</span>
              <svg className={styles.highlightSvg} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path 
                  className={styles.highlightPath}
                  d="M 20 95 C -10 95, -10 15, 20 15 L 180 15 C 210 15, 210 95, 180 95 L 40 95 C 25 95, 20 105, 15 115" 
                  stroke="var(--color-primary)" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  className={styles.highlightArrow}
                  d="M 15 100 L 15 115 L 30 110" 
                  stroke="var(--color-primary)" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className={styles.description}>
            Bronly — онлайн-запись, CRM и рассылки в одном Telegram mini app для салонов, барбершопов, клиник и других бизнесов.
          </motion.p>
          
          <motion.div variants={itemVariants} className={styles.actions}>
            <a href="#cta" className="btn-primary">Получить демо</a>
            <a href="#test-drive" className="btn-secondary">Тестовый доступ</a>
          </motion.div>
          
          <motion.div variants={itemVariants} className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Download size={18} strokeWidth={2.5} /></div>
              <div className={styles.statText}>
                <span className={styles.statValue}>0</span>
                <span className={styles.statLabel}>Приложений</span>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Heart size={18} strokeWidth={2.5} /></div>
              <div className={styles.statText}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Удобства</span>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Clock size={18} strokeWidth={2.5} /></div>
              <div className={styles.statText}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Запись</span>
              </div>
            </div>
          </motion.div>
          
          <motion.a 
            variants={itemVariants}
            href="#audience" 
            className={styles.scrollIndicator}
            aria-label="Узнать больше"
          >
            <ChevronDown size={32} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
