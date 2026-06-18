"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    const isWhitePage = pathname === "/catalog" || pathname === "/contacts";

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const links = [
        { name: "Главная", href: "/" },
        { name: "О нас", href: "/about" },
        { name: "Каталог", href: "/catalog" },
        { name: "Контакты", href: "/contacts" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 overflow-hidden will-change-transform ${isScrolled || isWhitePage
                    ? "py-3 md:py-4 bg-white/90 backdrop-blur-md border-b border-[#6F4634]/5 shadow-sm"
                    : "py-6 md:py-8 bg-transparent"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex justify-between items-center">
                    {/* Adaptive Logo Section */}
                    <div className="relative z-[120] max-w-[70vw]">
                        <Link href="/" className="group flex items-center gap-2 md:gap-3">
                            <Image
                                src="/img/logo.png"
                                alt="Panacea Pharm"
                                width={44}
                                height={44}
                                className={`w-9 h-9 md:w-11 md:h-11 object-contain transition-all duration-500 group-hover:scale-110 ${isScrolled || isWhitePage ? '' : 'brightness-0 invert'}`}
                            />
                            <div className="flex flex-col">
                                <span className={`font-manrope text-xl md:text-2xl font-bold tracking-tighter leading-none transition-all duration-500 uppercase ${isScrolled || isWhitePage ? "text-[#6F4634]" : "text-white"
                                    }`}>
                                    PANACEA
                                </span>
                                <span className={`font-manrope text-[6px] md:text-[8px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold mt-0.5 transition-all duration-500 ${isScrolled || isWhitePage ? "text-[#6F4634]/40 group-hover:text-[#6F4634]" : "text-white/60 group-hover:text-white"
                                    } inline-block truncate`}>
                                    Pharmaceuticals
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex items-center gap-1 p-1.5 backdrop-blur-2xl rounded-full border transition-all duration-500 ${isScrolled || isWhitePage
                        ? "bg-[#F8F7FF]/80 border-[#6F4634]/10 shadow-[0_8px_32px_rgba(111,70,52,0.08)]"
                        : "bg-white/10 border-white/20 shadow-none"
                        }`}>
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-6 py-2.5 rounded-full font-manrope text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${isScrolled || isWhitePage
                                    ? "text-[#6F4634] hover:bg-white hover:shadow-sm"
                                    : "text-white hover:bg-white/20"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Action Button Section */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/contacts"
                            className={`px-8 py-3 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-lg flex items-center justify-center ${isScrolled || isWhitePage
                                ? "bg-[#6F4634] text-white hover:bg-[#4A34BD] shadow-[#6F4634]/20"
                                : "bg-white text-[#6F4634] hover:bg-[#F8F7FF] shadow-none"
                                }`}
                        >
                            Заказать
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    {!isOpen && (
                        <div className="md:hidden relative z-[150]">
                            <button
                                onClick={() => setIsOpen(true)}
                                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full backdrop-blur-md border transition-all duration-500 shadow-xl ${isScrolled || isWhitePage
                                    ? "bg-white border-[#6F4634]/20 text-[#6F4634]"
                                    : "bg-white/20 border-white/20 text-white"
                                    }`}>
                                <Menu size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 bg-[#F8F7FF] z-[110] flex flex-col p-8 md:p-12 overflow-hidden"
                    >
                        <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-[#6F4634]/5 rounded-full blur-[40px] pointer-events-none" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-[#6F4634]/5 rounded-full blur-[40px] pointer-events-none" />

                        <div className="absolute top-8 right-6 z-[160]">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white border border-[#6F4634]/20 text-[#6F4634] shadow-2xl active:scale-90 transition-transform"
                                aria-label="Close menu"
                            >
                                <X size={20} strokeWidth={2.5} />
                            </button>
                        </div>

                        <div className="relative z-10 flex flex-col h-full items-start justify-center gap-8">
                            <span className="font-manrope text-[10px] uppercase tracking-[0.5em] text-[#6F4634]/40 font-bold">Меню</span>
                            <div className="flex flex-col gap-6">
                                {links.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 * idx + 0.2 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="font-manrope text-4xl md:text-5xl text-[#6F4634] font-bold transition-all duration-500 uppercase tracking-tighter"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-12 flex flex-col gap-4 font-medium"
                            >
                                <p className="font-manrope text-[10px] text-[#6F4634]/60 uppercase tracking-widest leading-relaxed font-bold">
                                    Баку, Хазарский р-он <br /> panacea.pharm@mail.ru
                                </p>
                                <div className="h-[1px] w-12 bg-[#6F4634]/20" />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
