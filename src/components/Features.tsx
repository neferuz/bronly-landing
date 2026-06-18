"use client";

import { motion, Variants } from 'framer-motion';
import { Smartphone, Briefcase, Database, Send, Bell, Settings, Users, Award } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: <Smartphone strokeWidth={1.5} size={28} />,
    title: 'Онлайн-запись через Telegram',
    desc: 'Клиенты записываются без звонков и скачивания.',
  },
  {
    icon: <Briefcase strokeWidth={1.5} size={28} />,
    title: 'Кабинет мастера',
    desc: 'Каждый мастер видит своё расписание.',
  },
  {
    icon: <Database strokeWidth={1.5} size={28} />,
    title: 'CRM и база',
    desc: 'История визитов, контакты и сегменты.',
  },
  {
    icon: <Send strokeWidth={1.5} size={28} />,
    title: 'Рассылки',
    desc: 'Акции, новости и возвращение клиентов.',
  },
  {
    icon: <Bell strokeWidth={1.5} size={28} />,
    title: 'Авто-уведомления',
    desc: 'Клиент и мастер вовремя получают уведомления о записи.',
  },
  {
    icon: <Settings strokeWidth={1.5} size={28} />,
    title: 'Услуги',
    desc: 'Настройка цен и категорий.',
  },
  {
    icon: <Users strokeWidth={1.5} size={28} />,
    title: 'Управление сотрудниками',
    desc: 'Добавление мастеров, графики работы и уровни доступов.',
  },
  {
    icon: <Award strokeWidth={1.5} size={28} />,
    title: 'Фиксированная подписка',
    desc: 'Сотрудников можно добавлять без ограничений — стоимость не растёт.',
  }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="features" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Всё, что нужно для управления записью и клиентами
          </motion.h2>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className={styles.featureItem}
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <div className={styles.content}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
