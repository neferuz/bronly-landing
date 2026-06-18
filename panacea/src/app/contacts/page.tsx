"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Monitor } from "lucide-react";
import { useState } from "react";

export default function ContactsPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        alert("Спасибо! Ваше сообщение отправлено.");
        setFormState({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <main className="bg-white pt-28 md:pt-40 pb-16 md:pb-24 min-h-screen">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">

                {/* Header Section */}
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
                    >
                        <div className="h-[1px] w-6 md:w-8 bg-[#6F4634]/30" />
                        <span className="font-manrope text-[#6F4634]/60 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">
                            Свяжитесь с нами
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-manrope text-4xl md:text-5xl lg:text-7xl font-black text-[#6F4634] tracking-tighter uppercase leading-none"
                    >
                        КОНТАКТЫ <br /> <span className="text-[#6F4634]/20">И ПОДДЕРЖКА</span>
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mb-20 md:mb-32">

                    {/* Left side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-8 md:gap-12"
                    >
                        <div className="flex flex-col gap-6 md:gap-8">
                            <h3 className="font-manrope text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] text-[#6F4634]/40">Наш офис</h3>

                            <div className="space-y-6 md:space-y-10">
                                <div className="flex items-start gap-4 md:gap-6 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#6F4634]/40 group-hover:bg-[#6F4634] group-hover:text-white transition-all duration-500 flex-shrink-0">
                                        <MapPin size={18} className="md:w-5 md:h-5" />
                                    </div>
                                    <div>
                                        <p className="font-manrope text-[9px] md:text-[10px] uppercase tracking-widest text-[#6F4634]/50 mb-1">Адрес</p>
                                        <p className="font-manrope text-base md:text-lg text-[#6F4634] font-bold leading-relaxed">Баку, Хазарский р-он <br />Бузовна, ул. 18 октября поворот 6</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 md:gap-6 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#6F4634]/40 group-hover:bg-[#6F4634] group-hover:text-white transition-all duration-500 flex-shrink-0">
                                        <Phone size={18} className="md:w-5 md:h-5" />
                                    </div>
                                    <div>
                                        <p className="font-manrope text-[9px] md:text-[10px] uppercase tracking-widest text-[#6F4634]/50 mb-1">Телефон</p>
                                        <p className="font-manrope text-base md:text-lg text-[#6F4634] font-bold">+998 88 406 45 48</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 md:gap-6 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#6F4634]/40 group-hover:bg-[#6F4634] group-hover:text-white transition-all duration-500 flex-shrink-0">
                                        <Mail size={18} className="md:w-5 md:h-5" />
                                    </div>
                                    <div>
                                        <p className="font-manrope text-[9px] md:text-[10px] uppercase tracking-widest text-[#6F4634]/50 mb-1">Email</p>
                                        <p className="font-manrope text-base md:text-lg text-[#6F4634] font-bold">panacea.pharm@mail.ru</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 md:pt-12 border-t border-[#6F4634]/5">
                            <h3 className="font-manrope text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] text-[#6F4634]/40 mb-6 md:mb-8">Социальные сети</h3>
                            <div className="flex gap-3 md:gap-4">
                                {[
                                    { icon: <Instagram size={16} className="md:w-[18px] md:h-[18px]" />, label: "Instagram", href: "https://instagram.com/panacea_pharm" },
                                    { icon: <Facebook size={16} className="md:w-[18px] md:h-[18px]" />, label: "Facebook", href: "#" },
                                    { icon: <Monitor size={16} className="md:w-[18px] md:h-[18px]" />, label: "Telegram", href: "#" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#6F4634]/10 flex items-center justify-center text-[#6F4634]/60 hover:bg-[#6F4634] hover:text-white hover:border-[#6F4634] transition-all duration-500"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#F5EFEB] p-6 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[3rem] border border-[#6F4634]/5 shadow-sm"
                    >
                        <h2 className="font-manrope text-2xl md:text-3xl font-black text-[#6F4634] mb-8 md:mb-10 uppercase tracking-tighter">Напишите нам</h2>

                        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="font-manrope text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-widest text-[#6F4634]/40 ml-1">Ваше имя</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="bg-white/50 border-b-2 border-[#6F4634]/10 py-3 font-manrope text-sm font-bold text-[#6F4634] focus:outline-none focus:border-[#6F4634] transition-all placeholder:text-[#6F4634]/20"
                                        placeholder="Алексей"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-manrope text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-widest text-[#6F4634]/40 ml-1">Номер телефона</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formState.phone}
                                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                        className="bg-white/50 border-b-2 border-[#6F4634]/10 py-3 font-manrope text-sm font-bold text-[#6F4634] focus:outline-none focus:border-[#6F4634] transition-all placeholder:text-[#6F4634]/20"
                                        placeholder="+998 88 406 45 48"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-manrope text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-widest text-[#6F4634]/40 ml-1">Email (необязательно)</label>
                                <input
                                    type="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="bg-white/50 border-b-2 border-[#6F4634]/10 py-3 font-manrope text-sm font-bold text-[#6F4634] focus:outline-none focus:border-[#6F4634] transition-all placeholder:text-[#6F4634]/20"
                                    placeholder="example@mail.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-manrope text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-widest text-[#6F4634]/40 ml-1">Сообщение</label>
                                <textarea
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="bg-white/50 border-b-2 border-[#6F4634]/10 py-3 font-manrope text-sm font-bold text-[#6F4634] focus:outline-none focus:border-[#6F4634] transition-all resize-none placeholder:text-[#6F4634]/20"
                                    placeholder="Ваш вопрос или пожелание..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 md:py-5 bg-[#6F4634] text-white rounded-full font-manrope text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] flex items-center justify-center gap-2 md:gap-3 hover:bg-[#8B5A45] transition-all duration-500 shadow-xl shadow-[#6F4634]/20 group"
                            >
                                ОТПРАВИТЬ <Send size={13} className="md:w-[14px] md:h-[14px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#6F4634]/5 grayscale hover:grayscale-0 transition-all duration-1000 shadow-lg"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12140.736932598383!2d50.1118335359253!3d40.48560007204648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308819543e3f4f%3A0xc3f947e8eb281df6!2sBuzovna%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1710134400000!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>

            </div>
        </main>
    );
}
