"use client";

import { useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Scissors, Sparkles, Stethoscope, Paintbrush, Activity } from 'lucide-react';
import styles from './TargetAudience.module.css';

const audiences = [
  { id: 1, title: 'Барбершопы', desc: 'Запись к мастерам, расписание, база постоянных клиентов.', icon: <Scissors size={20} strokeWidth={1.5} />, img: '/images/audiences/barbershop.jpg' },
  { id: 2, title: 'Салоны красоты', desc: 'Услуги, мастера, напоминания и повторные визиты.', icon: <Sparkles size={20} strokeWidth={1.5} />, img: '/images/audiences/salon.jpg' },
  { id: 3, title: 'Клиники', desc: 'Запись пациентов, уведомления и управление расписанием.', icon: <Stethoscope size={20} strokeWidth={1.5} />, img: '/images/audiences/clinic.jpg' },
  { id: 4, title: 'Nail / brow студии', desc: 'Быстрая запись через Telegram и рассылки по базе.', icon: <Paintbrush size={20} strokeWidth={1.5} />, img: '/images/audiences/nail.jpg' },
  { id: 5, title: 'Фитнес и wellness', desc: 'Запись на тренировки, массаж и персональные занятия.', icon: <Activity size={20} strokeWidth={1.5} />, img: '/images/audiences/fitness.jpg' },
];

export default function TargetAudience() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const scrollLeftBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -344, behavior: 'smooth' }); // 320 + 24 gap
    }
  };

  const scrollRightBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 344, behavior: 'smooth' });
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftState(carouselRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftState - walk;
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="audience" className={styles.section}>
      {/* Большая фоновая анимированная линия */}
      <svg 
        className={styles.sectionLine} 
        viewBox="0 0 1440 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path 
          className={styles.sectionLinePath}
          d="M 1600 150 C 900 150, 600 250, 500 450 C 400 650, 800 750, 1600 650" 
          stroke="var(--color-primary)" 
          strokeWidth="8" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="container">
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <div className={styles.headerText}>
            <h2 className={styles.title}>Для бизнеса с предварительной записью</h2>
            <p className={styles.subtitle}>
              Bronly автоматизирует запись, снижает нагрузку на администратора и возвращает клиентов через Telegram.
            </p>
          </div>
          <div className={styles.controls}>
            <button className={styles.controlBtn} onClick={scrollLeftBtn} aria-label="Назад"><ChevronLeft size={24} /></button>
            <button className={styles.controlBtn} onClick={scrollRightBtn} aria-label="Вперед"><ChevronRight size={24} /></button>
          </div>
        </motion.div>
        
        <div className={styles.carouselContainer}>
          <div 
            className={`${styles.carousel} ${isDragging ? styles.dragging : ''}`} 
            ref={carouselRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {audiences.map((item, i) => (
              <motion.div 
                key={item.id} 
                className={styles.card}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
              >
                <div className={styles.imageWrapper}>
                  <img src={item.img} alt={item.title} className={styles.image} draggable={false} />
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.icon}>{item.icon}</div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
