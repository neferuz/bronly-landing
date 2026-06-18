"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  { num: '01', title: 'Клиент открывает мини-приложение<br/>в Telegram', desc: 'Без скачивания отдельного приложения.', icon: <ArrowUpRight size={20} strokeWidth={1} /> },
  { num: '02', title: 'Выбирает услугу,<br/>мастера и время', desc: 'Все свободные слоты отображаются автоматически.', icon: <ArrowUpRight size={20} strokeWidth={1} /> },
  { num: '03', title: 'Получает подтверждение<br/>и уведомления', desc: 'Клиент не забывает о записи.', icon: <ArrowUpRight size={20} strokeWidth={1} /> },
  { num: '04', title: 'Мастер видит запись<br/>в своём кабинете', desc: 'Каждый сотрудник видит только своё расписание.', icon: <ArrowUpRight size={20} strokeWidth={1} /> },
  { num: '05', title: 'Владелец управляет<br/>всем процессом', desc: 'Записи, клиенты, услуги, мастера, рассылки и статистика.', icon: <ArrowUpRight size={20} strokeWidth={1} /> },
];

import { useState } from 'react';

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.headerRow}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Как это работает
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Узнайте, какие шаги мы реализуем для автоматизации вашего бизнеса
          </motion.p>
        </div>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.colTitle}>Действие</div>
            <div className={styles.colDesc}>Результат</div>
            <div className={styles.colNum}>Шаг</div>
            <div className={styles.colIcon}></div>
          </div>

          <motion.div 
            className={styles.tableBody}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className={styles.tableRow}>
                <div className={styles.colTitle}>
                  <h3 className={styles.rowTitle} dangerouslySetInnerHTML={{ __html: step.title }}></h3>
                </div>
                <div className={styles.colDesc}>
                  <span className={styles.rowPill}>{step.desc}</span>
                </div>
                <div className={styles.colNum}>
                  <span className={styles.rowNum}>{step.num}</span>
                </div>
                <div className={styles.colIcon}>
                  <div className={styles.rowIconBtn}>
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
