"use client";

import { useState } from 'react';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    businessName: '',
    niche: '',
    employees: '',
    crm: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const text = `🔥 *Новая заявка (Bronly)*\n\n👤 *Имя:* ${formData.name}\n📞 *Контакт:* ${formData.contact}\n🏢 *Бизнес:* ${formData.businessName}\n✂️ *Ниша:* ${formData.niche}\n👥 *Сотрудников:* ${formData.employees || 'Не указано'}\n💻 *CRM:* ${formData.crm}`;

    try {
      await fetch('https://api.telegram.org/bot6127030716:AAGpSk5jHP4bs8n5HgFBXE0MZmgYuzdQPic/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '-5397814563',
          text: text,
          parse_mode: 'Markdown'
        })
      });
      
      setStatus('success');
      setFormData({ name: '', contact: '', businessName: '', niche: '', employees: '', crm: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Ошибка отправки. Пожалуйста, напишите в Telegram напрямую.');
      setStatus('idle');
    }
  };

  return (
    <section id="cta" className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.infoColumn}>
            <div className={styles.badge}>Контакты</div>
            <h2 className={styles.title}>Готовы упростить запись клиентов?</h2>
            <p className={styles.subtitle}>
              Покажем, как Bronly может работать для вашего салона, барбершопа, клиники или другого бизнеса по записи.
            </p>
          </div>
          
          <div className={styles.formColumn}>
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3>Заявка успешно отправлена!</h3>
                <p>Мы свяжемся с вами в ближайшее время для обсуждения деталей.</p>
                <button type="button" className={`btn-secondary ${styles.newBtn}`} onClick={() => setStatus('idle')}>
                  Отправить еще
                </button>
              </div>
            ) : (
              <>
                <h3 className={styles.formTitle}>Получить консультацию</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.inputGroup}>
                      <label>Имя</label>
                      <input type="text" name="name" required placeholder="Ваше имя" value={formData.name} onChange={handleChange} />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label>Телефон / Telegram</label>
                      <input type="text" name="contact" required placeholder="Номер телефона или @username" value={formData.contact} onChange={handleChange} />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label>Название бизнеса</label>
                      <input type="text" name="businessName" required placeholder="Например: Barbershop" value={formData.businessName} onChange={handleChange} />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label>Направление бизнеса</label>
                      <input type="text" name="niche" required placeholder="Барбершоп, салон красоты..." value={formData.niche} onChange={handleChange} />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label>Сколько сотрудников / мастеров</label>
                      <input type="text" name="employees" placeholder="Например: 5" value={formData.employees} onChange={handleChange} />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label>Используете ли сейчас CRM?</label>
                      <select name="crm" onChange={handleChange} required className={formData.crm === '' ? styles.placeholderSelect : ''} value={formData.crm}>
                        <option value="" disabled hidden>Выберите вариант...</option>
                        <option value="altegio">Altegio</option>
                        <option value="other">Другая CRM</option>
                        <option value="manual">Только соцсети / Excel</option>
                        <option value="none">Пока нет системы</option>
                      </select>
                    </div>
                  </div>
                  
                  <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
