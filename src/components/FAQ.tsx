"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'Чем Bronly отличается от Yclients или Altegio?',
    answer: 'Главное отличие — фокус на Telegram. Bronly работает без громоздких сайтов и скачивания приложений. Ваши клиенты записываются в пару кликов прямо в мессенджере, там же получают напоминания и могут легко перенести визит.'
  },
  {
    question: 'Как происходит перенос базы клиентов?',
    answer: 'Перенос происходит в 1 клик. Мы помогаем экспортировать вашу текущую базу из любой CRM и бережно переносим всю историю визитов, контакты и записи в Bronly без потерь.'
  },
  {
    question: 'Нужно ли моим клиентам скачивать приложение?',
    answer: 'Нет, это главное преимущество. Весь процесс записи происходит внутри Telegram-бота, который выглядит как полноценное мини-приложение (Web App). Клиенту не нужно ничего скачивать и регистрироваться.'
  },
  {
    question: 'Могу ли я управлять графиком мастеров со смартфона?',
    answer: 'Да, Bronly полностью адаптирован для мобильных устройств. У каждого мастера есть свой личный кабинет в Telegram, где он видит свои записи, а владелец может управлять всем бизнесом прямо с телефона.'
  },
  {
    question: 'Есть ли скрытые комиссии с каждой записи?',
    answer: 'У нас прозрачная система оплаты — фиксированная подписка. Мы не берем процент с ваших записей и не навязываем платные SMS-рассылки, так как все уведомления бесплатно приходят в Telegram.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>FAQs</div>
          <h2 className={styles.title}>Часто задаваемые вопросы</h2>
          <p className={styles.subtitle}>Всё, что вам нужно знать о переходе на Bronly и работе с системой</p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.faqQuestion}>
                  <h3>{faq.question}</h3>
                  <button 
                    className={styles.iconBtn} 
                    aria-label={isOpen ? "Закрыть вопрос" : "Открыть вопрос"}
                  >
                    <motion.div
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? <X size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                    </motion.div>
                  </button>
                </div>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className={styles.faqAnswer}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
