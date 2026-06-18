"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        title: 'PANACEA',
        subtitle: 'HEALTH & SCIENCE',
        desc: 'Инновации в создании биологически активных добавок',
        image: '/images/photo1.png',
        color: '#6F4634'
    },
    {
        id: 2,
        title: 'PHARM',
        subtitle: 'NATURES POWER',
        desc: 'Чистота природы в каждой капсуле',
        image: '/images/photo-2.jpeg',
        color: '#8B5A45'
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image Layer (Fading) */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`img-${current}`}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[current].image}
                            alt={slides[current].title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Layer (Staggered Text Reveal) */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 md:px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`content-${current}`}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-col items-center max-w-[95vw] md:max-w-[90vw]"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -20 }
                            }}
                            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="h-[1px] w-6 md:w-12 bg-white/60" />
                            <span className="font-unbounded text-white text-[9px] md:text-xs font-bold tracking-[0.4em] uppercase">
                                {slides[current].subtitle}
                            </span>
                            <div className="h-[1px] w-6 md:w-12 bg-white/60" />
                        </motion.div>

                        <div className="overflow-hidden mb-4">
                            <motion.h1
                                variants={{
                                    hidden: { y: "100%" },
                                    visible: { y: 0 },
                                    exit: { y: "-100%" }
                                }}
                                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
                                className="font-serif text-[18vw] md:text-[14vw] leading-[0.85] text-white tracking-tighter italic"
                            >
                                {slides[current].title}
                            </motion.h1>
                        </div>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -20 }
                            }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            className="font-unbounded text-white/90 text-sm md:text-xl max-w-2xl leading-relaxed mb-10"
                        >
                            {slides[current].desc}
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -10 }
                            }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                            <span className="text-[18px]">🇩🇪</span>
                            <span className="font-manrope text-white/90 text-[10px] md:text-xs font-semibold tracking-wider uppercase">Произведено по немецким технологиям</span>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-10 md:px-0">
                            <motion.button
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0, scale: 0.9 }
                                }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-12 py-5 bg-white text-[#6F4634] font-unbounded text-[10px] font-bold uppercase tracking-widest rounded-full shadow-2xl"
                            >
                                Заказать
                            </motion.button>
                            <motion.button
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0, scale: 0.9 }
                                }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-12 py-5 bg-transparent border border-white text-white font-unbounded text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors"
                            >
                                Подробнее
                            </motion.button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Overlay - Luxurious & Minimal */}
            <div className="absolute bottom-12 left-0 right-0 z-[50] flex flex-col items-center gap-8">
                <div className="flex items-center gap-8 md:gap-12">
                    <button onClick={prevSlide} className="group flex items-center gap-4 text-white/40 hover:text-white transition-all">
                        <ChevronLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
                        <span className="font-unbounded text-[10px] font-bold tracking-widest uppercase hidden md:block">Back</span>
                    </button>

                    <div className="flex gap-4">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className="relative h-8 w-1 flex items-center justify-center group"
                            >
                                <div className={`h-full w-0.5 transition-all duration-700 ${idx === current ? 'bg-white h-8' : 'bg-white/20 h-4 group-hover:h-6'}`} />
                            </button>
                        ))}
                    </div>

                    <button onClick={nextSlide} className="group flex items-center gap-4 text-white/40 hover:text-white transition-all">
                        <span className="font-unbounded text-[10px] font-bold tracking-widest uppercase hidden md:block">Next</span>
                        <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>

            <div className="absolute bottom-12 left-12 hidden lg:block z-[50]">
                <div className="flex flex-col items-center gap-4">
                    <span className="font-unbounded text-[9px] text-white/40 uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
                        Scroll with care
                    </span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </div>
            </div>
        </section>
    );
}
