"use client";

import { motion } from 'framer-motion';
import { X, Check, Smartphone, Send } from 'lucide-react';
import styles from './WhyTelegram.module.css';

export default function WhyTelegram() {
  return (
    <section id="why-telegram" className={styles.section}>
      <div className={styles.patternOverlay}></div>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Клиенту не нужно скачивать новое приложение
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Большинство клиентов уже пользуются Telegram. Поэтому Bronly работает там, где клиенту привычно и удобно.
          </motion.p>
        </div>

        <div className={styles.cardsWrapper}>
          
          <motion.div 
            className={styles.badCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapperBad}>
                <Smartphone size={24} />
              </div>
              <h3 className={styles.cardTitle}>Обычное приложение</h3>
            </div>
            <ul className={styles.list}>
              <li><X size={20} className={styles.badIcon} /> <span>Нужно скачивать приложение</span></li>
              <li><X size={20} className={styles.badIcon} /> <span>Нужно регистрироваться</span></li>
              <li><X size={20} className={styles.badIcon} /> <span>Клиент может забыть пароль</span></li>
              <li><X size={20} className={styles.badIcon} /> <span>Меньше повторных касаний</span></li>
              <li><X size={20} className={styles.badIcon} /> <span>Сложнее возвращать клиента</span></li>
            </ul>
          </motion.div>

          <motion.div 
            className={styles.goodCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className={styles.cardBadge}>Наш выбор</div>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapperGood}>
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                </svg>
              </div>
              <h3 className={styles.cardTitleGood}>Bronly в Telegram</h3>
            </div>
            <ul className={styles.list}>
              <li><Check size={20} className={styles.goodIcon} /> <span>Открывается прямо в Telegram</span></li>
              <li><Check size={20} className={styles.goodIcon} /> <span>Быстрая запись без лишних шагов</span></li>
              <li><Check size={20} className={styles.goodIcon} /> <span>Уведомления внутри мессенджера</span></li>
              <li><Check size={20} className={styles.goodIcon} /> <span>Удобные и легальные рассылки</span></li>
              <li><Check size={20} className={styles.goodIcon} /> <span>Повторные визиты через базу</span></li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
