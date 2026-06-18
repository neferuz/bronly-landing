"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp, Instagram, Facebook, Send, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = [
        { name: "Главная", href: "/" },
        { name: "О нас", href: "/about" },
        { name: "Каталог", href: "/catalog" },
        { name: "Контакты", href: "/contacts" },
    ];

    const categories = [
        { name: "Иммунитет", href: "#" },
        { name: "Красота и кожа", href: "#" },
        { name: "Нервная система", href: "#" },
        { name: "Сердце и сосуды", href: "#" },
    ];

    return (
        <footer id="footer" className="bg-[#121212] text-white pt-20 pb-10 overflow-hidden border-t border-white/5 font-manrope relative">

            {/* Massive Background Text - Reintroduced and refined */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
                <h2 className="font-manrope text-[28vw] leading-none tracking-tighter uppercase font-black">
                    PANACEA
                </h2>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 md:mb-12">

                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="font-manrope text-3xl font-black tracking-tighter hover:opacity-70 transition-opacity uppercase">
                            PANACEA <span className="opacity-40 font-bold">PHARM</span>
                        </Link>
                        <p className="text-[12px] text-white/40 leading-relaxed uppercase tracking-[0.2em] max-w-[240px] font-medium">
                            Производство биологически активных добавок (БАД) мирового уровня по немецким технологиям.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={18} />, href: "https://instagram.com/panacea_pharm" },
                                { icon: <Facebook size={18} />, href: "#" },
                                { icon: <Send size={18} />, href: "#" }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-6 font-bold">Навигация</span>
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[14px] text-white/60 hover:text-white transition-all font-medium uppercase tracking-widest">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Categories */}
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-6 font-bold">Категории</span>
                        <ul className="flex flex-col gap-3">
                            {categories.map((cat) => (
                                <li key={cat.name}>
                                    <Link href={cat.href} className="text-[14px] text-white/60 hover:text-white transition-all font-medium uppercase tracking-widest">
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Top Button */}
                    <div className="flex flex-col gap-8 lg:items-end">
                        <div className="lg:text-right">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-6 font-bold">Контакты</span>
                            <div className="flex flex-col gap-4">
                                <a href="tel:+998884064548" className="text-[15px] text-white/80 hover:text-white transition-colors flex lg:justify-end items-center gap-3 font-medium tracking-tight">
                                    <Phone size={14} className="text-white/20" /> +998 88 406 45 48
                                </a>
                                <a href="mailto:panacea.pharm@mail.ru" className="text-[15px] text-white/80 hover:text-white transition-colors flex lg:justify-end items-center gap-3 font-medium tracking-tight">
                                    <Mail size={14} className="text-white/20" /> panacea.pharm@mail.ru
                                </a>
                                <span className="text-[15px] text-white/40 flex lg:justify-end items-center gap-3 font-medium tracking-tight text-right uppercase">
                                    <MapPin size={14} className="text-white/20" /> Международные стандарты качества. <br /> Дистрибуция в СНГ и Европе.
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group hover:bg-white hover:text-black transition-all duration-500 mt-auto"
                        >
                            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-medium">
                        &copy; {new Date().getFullYear()} Panacea Pharmaceuticals. Все права защищены.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-[9px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors font-medium">Privacy</Link>
                        <Link href="#" className="text-[9px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors font-medium">Terms</Link>
                        <Link href="#" className="text-[9px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors font-medium">Cookies</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
