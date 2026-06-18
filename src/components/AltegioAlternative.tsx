"use client";

import { motion } from 'framer-motion';
import { Eye, Settings, ShieldCheck, Database, Users, Calendar, List, CheckCircle2, Layers } from 'lucide-react';
import styles from './AltegioAlternative.module.css';

export default function AltegioAlternative() {
  return (
    <section id="altegio-alternative" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.wrapper}>
          
          {/* LEFT COLUMN: Text & List */}
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Уже есть CRM?<br/>Это не проблема</h2>
            <p className={styles.subtitle}>
              Многие бизнесы уже используют Altegio или похожие системы. Bronly не требует резкого перехода с первого дня.
            </p>
            
            <ul className={styles.featureList}>
              <li>
                <div className={styles.featureIcon}><Eye size={20} strokeWidth={1.5} /></div>
                <p>Мы покажем систему изнутри и дадим полный тестовый доступ для ознакомления.</p>
              </li>
              <li>
                <div className={styles.featureIcon}><Settings size={20} strokeWidth={1.5} /></div>
                <p>Индивидуально обсудим и подберем самый удобный формат и сроки перехода.</p>
              </li>
              <li>
                <div className={styles.featureIcon}><ShieldCheck size={20} strokeWidth={1.5} /></div>
                <p>Уже оплачена подписка? Мы подберём условия, чтобы вы перешли без финансовых потерь и рисков.</p>
              </li>
            </ul>
          </motion.div>

          {/* RIGHT COLUMN: Visual Graphic */}
          <motion.div 
            className={styles.visualColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.visualCard}>
              {/* Scanner Effect */}
              <div className={styles.scannerLine}></div>
              
              <div className={styles.dataPanel}>
                <div className={styles.panelHeader}>
                  <div className={styles.panelHeaderIcon}><Database size={18} /></div>
                  <span>Перенос базы</span>
                </div>
                
                <div className={styles.dataRow}>
                  <span className={styles.dataLabel}><Users size={16} /> Клиенты</span>
                  <span className={styles.dataValue}>Вся история</span>
                </div>
                <div className={styles.dataRow}>
                  <span className={styles.dataLabel}><Calendar size={16} /> Записи</span>
                  <span className={styles.dataValue}>Без потерь</span>
                </div>
                <div className={styles.dataRow}>
                  <span className={styles.dataLabel}><List size={16} /> Услуги</span>
                  <span className={styles.dataValue}>В 1 клик</span>
                </div>
                <div className={styles.dataRowBottom}>
                  <CheckCircle2 size={16} /> <span>+ Индивидуальная настройка</span>
                </div>
              </div>

              <button className={styles.connectButton}>
                <Layers size={16} strokeWidth={1.5} /> Сравнить систему
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
