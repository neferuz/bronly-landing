"use client";

import { motion } from 'framer-motion';
import { Smile, Scissors, Briefcase, Check } from 'lucide-react';
import styles from './Benefits.module.css';

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.backgroundOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Удобно клиенту, мастеру и владельцу
        </motion.h2>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Client */}
          <motion.div className={styles.column} variants={itemVariants}>
            <div className={styles.iconWrapper}>
              <Smile className={styles.icon} size={28} strokeWidth={1.5} />
            </div>
            <h3 className={styles.colTitle}>Для клиента</h3>
            <ul className={styles.list}>
              <li><Check size={18} className={styles.checkIcon} /> Запись прямо в Telegram</li>
              <li><Check size={18} className={styles.checkIcon} /> Без скачивания приложений</li>
              <li><Check size={18} className={styles.checkIcon} /> Удобный выбор услуги и времени</li>
              <li><Check size={18} className={styles.checkIcon} /> Уведомления о предстоящей записи</li>
              <li><Check size={18} className={styles.checkIcon} /> Быстрый повторный визит</li>
            </ul>
          </motion.div>
          
          {/* Master */}
          <motion.div className={styles.column} variants={itemVariants}>
            <div className={styles.iconWrapper}>
              <Scissors className={styles.icon} size={28} strokeWidth={1.5} />
            </div>
            <h3 className={styles.colTitle}>Для мастера</h3>
            <ul className={styles.list}>
              <li><Check size={18} className={styles.checkIcon} /> Удобный личный кабинет</li>
              <li><Check size={18} className={styles.checkIcon} /> Наглядное расписание на день</li>
              <li><Check size={18} className={styles.checkIcon} /> Вся информация о клиенте под рукой</li>
              <li><Check size={18} className={styles.checkIcon} /> Моментальные уведомления о записях</li>
              <li><Check size={18} className={styles.checkIcon} /> Меньше путаницы в графике</li>
            </ul>
          </motion.div>
          
          {/* Owner */}
          <motion.div className={styles.column} variants={itemVariants}>
            <div className={styles.iconWrapper}>
              <Briefcase className={styles.icon} size={28} strokeWidth={1.5} />
            </div>
            <h3 className={styles.colTitle}>Для владельца</h3>
            <ul className={styles.list}>
              <li><Check size={18} className={styles.checkIcon} /> Полный контроль всех записей</li>
              <li><Check size={18} className={styles.checkIcon} /> Единая защищенная база клиентов</li>
              <li><Check size={18} className={styles.checkIcon} /> Удобные легальные рассылки</li>
              <li><Check size={18} className={styles.checkIcon} /> Управление сотрудниками</li>
              <li><Check size={18} className={styles.checkIcon} /> Наглядная аналитика доходов</li>
              <li><Check size={18} className={styles.checkIcon} /> Фиксированная подписка</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
