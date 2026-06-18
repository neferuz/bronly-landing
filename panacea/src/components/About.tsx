"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Award,
    FlaskConical,
    Target,
    ShieldCheck,
    Heart,
    Zap,
    Users,
    CheckCircle2,
    Star,
    Leaf,
    FileText
} from "lucide-react";
import { useState } from "react";

const stats = [
    { id: 1, label: "Стандарты", value: "DEUTSCH", desc: "Немецкие технологии" },
    { id: 2, label: "Продукция", value: "PREMIUM", desc: "Био-добавки" },
    { id: 3, label: "Стандарты", value: "GMP", desc: "Контроль качества" },
    { id: 4, label: "Экспорт", value: "GLOBAL", desc: "Мировой рынок" },
];

const values = [
    {
        title: "Качество",
        desc: "Высокие стандарты сертификации GMP",
        icon: <Award className="w-5 h-5" />
    },
    {
        title: "Забота",
        desc: "Внимание к потребностям каждого клиента",
        icon: <Heart className="w-5 h-5" />
    },
    {
        title: "Честность",
        desc: "Открытость и прозрачность процессов",
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: "Ответственность",
        desc: "Гарантия безопасности каждого продукта",
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        title: "Развитие",
        desc: "Постоянное совершенствование формул",
        icon: <Star className="w-5 h-5" />
    }
];

const categories = [
    {
        title: "Для мужчин",
        desc: "Энергия, выносливость и поддержка мужского здоровья.",
        image: "https://i.pinimg.com/736x/ac/d1/b3/acd1b3e77f782a67b906e6566b95c56e.jpg"
    },
    {
        title: "Для женщин",
        desc: "Красота, баланс и витамины для женского организма.",
        image: "https://i.pinimg.com/736x/f7/ee/90/f7ee90ee43dff40df973251c3f7a61f8.jpg"
    },
    {
        title: "Для детей",
        desc: "Безопасные решения для крепкого иммунитета и роста.",
        image: "https://i.pinimg.com/736x/31/12/af/3112afd585faf613d19a5d2a3a2b2b57.jpg"
    }
];

const faqs = [
    {
        question: "Безопасны ли ваши препараты?",
        answer: "Все наши продукты проходят строгий многоступенчатый контроль качества и имеют сертификаты GMP. Мы используем только проверенное натуральное сырье высшей очистки."
    },
    {
        question: "Где можно купить продукцию Panacea Pharm?",
        answer: "Наши препараты доступны эксклюзивно во всех крупных аптечных сетях Узбекистана, а также через маркетплейс Uzum. Свяжитесь с нами для уточнения ближайшей к вам точки продаж."
    },
    {
        question: "Есть ли у вас доставка за границу?",
        answer: "На данный момент мы активно расширяем географию экспорта. Для уточнения возможности оптовой доставки свяжитесь с нашим отделом продаж."
    }
];

// Categories Carousel Component
function CategoriesCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
    };

    return (
        <div className="mb-20 md:mb-32 relative">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-10 mb-12 md:mb-20">
                <div className="max-w-xl">
                    <span className="text-[#6F4634] text-[8px] md:text-[10px] font-bold uppercase tracking-[0.6em] block mb-4">Для всей семьи</span>
                    <h2 className="font-manrope text-3xl md:text-6xl text-[#6F4634] font-bold tracking-tighter leading-none uppercase">ЗАБОТА О <br /><span className="opacity-30">КАЖДОМ</span></h2>
                </div>
                <p className="text-[#6F4634]/60 text-xs md:text-base lg:max-w-md uppercase tracking-widest border-l-2 border-[#6F4634]/10 pl-5 md:pl-6 leading-relaxed">
                    Мы создаем индивидуальные решения, учитывая особенности мужского, женского и детского организмов.
                </p>
            </div>

            {/* Mobile Carousel - Only visible on mobile */}
            <div className="md:hidden relative overflow-hidden px-4">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        className="w-full"
                    >
                        <div className="w-full">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#F5EFEB] shadow-2xl">
                                <Image
                                    src={categories[currentSlide].image}
                                    alt={categories[currentSlide].title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#6F4634] via-[#6F4634]/20 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-8 md:p-14 text-white">
                                    <motion.h3
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="font-manrope text-3xl mb-3 font-black tracking-tighter uppercase"
                                    >
                                        {categories[currentSlide].title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-xs uppercase tracking-widest opacity-90 leading-relaxed"
                                    >
                                        {categories[currentSlide].desc}
                                    </motion.p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons - Mobile Only */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border-2 border-[#6F4634]/20 flex items-center justify-center text-[#6F4634] hover:bg-[#6F4634] hover:text-white hover:border-[#6F4634] transition-all duration-300 group active:scale-95"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2">
                        {categories.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className="group relative"
                                aria-label={`Go to slide ${idx + 1}`}
                            >
                                <div className={`h-1 rounded-full transition-all duration-500 ${idx === currentSlide
                                    ? 'w-12 bg-[#6F4634]'
                                    : 'w-1 bg-[#6F4634]/20 group-hover:bg-[#6F4634]/40 group-hover:w-4'
                                    }`} />
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border-2 border-[#6F4634]/20 flex items-center justify-center text-[#6F4634] hover:bg-[#6F4634] hover:text-white hover:border-[#6F4634] transition-all duration-300 group active:scale-95"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Desktop Grid - Only visible on desktop */}
            <div className="hidden md:grid grid-cols-3 gap-8">
                {categories.map((c, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-[#F5EFEB] shadow-lg"
                    >
                        <Image src={c.image} alt={c.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#6F4634] via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-x-0 bottom-0 p-10 text-white">
                            <h4 className="font-manrope text-3xl mb-3 font-bold tracking-tighter uppercase">{c.title}</h4>
                            <p className="text-[11px] uppercase tracking-widest opacity-80 leading-relaxed">{c.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default function About() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="bg-white pb-32 font-manrope overflow-hidden relative border-t border-[#6F4634]/5">
            {/* Background Decorative Text - Hidden on small screens to prevent overflow */}
            <div className="absolute top-0 right-0 opacity-[0.015] pointer-events-none translate-x-1/4 -translate-y-1/4 select-none hidden lg:block">
                <span className="font-manrope text-[30vw] uppercase font-black leading-none">Nature</span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* 1. Brand Story & Mission */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-20 md:mb-32 pt-12 md:pt-16">
                    <div className="relative w-full lg:w-1/2 group">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square overflow-hidden rounded-[3rem] bg-[#F5EFEB] shadow-xl"
                        >
                            <Image
                                src="/images/about.png"
                                alt="Panacea Laboratory"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </motion.div>
                        <div className="absolute -right-6 -bottom-6 bg-[#6F4634] text-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block">
                            <p className="font-manrope text-3xl mb-1 font-bold">Pure</p>
                            <p className="text-[10px] uppercase tracking-widest opacity-60">Nature & Science</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:gap-10 w-full lg:w-1/2">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <span className="text-[#6F4634] text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em] block mb-4 md:mb-6">О компании</span>
                            <h2 className="font-manrope text-4xl md:text-7xl text-[#6F4634] font-bold leading-[0.9] tracking-tighter mb-6 md:mb-8 uppercase">
                                <span className="text-[#6F4634]/30">PANACEA</span> PHARM
                            </h2>
                            <p className="text-[#6F4634]/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                Мы специализируемся на производстве биологически активных добавок (БАДов), используя инновационные немецкие технологии и оборудование. Вся наша продукция соответствует международным стандартам качества и безопасности.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                            <div className="bg-[#F5EFEB]/50 p-6 md:p-8 rounded-[2rem] border border-[#6F4634]/5">
                                <h4 className="font-manrope text-lg md:text-xl text-[#6F4634] mb-2 md:mb-3 font-bold uppercase">Наша Миссия</h4>
                                <p className="text-[10px] md:text-[12px] text-[#6F4634]/60 leading-relaxed uppercase tracking-wider">
                                    Обеспечивать людей качественными, безопасными и доступными продуктами для поддержания здоровья всей семьи.
                                </p>
                            </div>
                            <div className="bg-[#6F4634] p-6 md:p-8 rounded-[2rem] text-white">
                                <h4 className="font-manrope text-lg md:text-xl mb-2 md:mb-3 font-bold uppercase">Приоритет</h4>
                                <p className="text-[10px] md:text-[12px] text-white/60 leading-relaxed uppercase tracking-wider">
                                    Безопасность, эффективность и доступность продукции для каждого человека.
                                </p>
                            </div>
                        </div>

                        <a 
                            href="/medstandart.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-[#F5EFEB]/80 hover:bg-[#F5EFEB] p-5 md:p-6 rounded-[2rem] border border-[#6F4634]/10 transition-all duration-300 flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#6F4634]/5 flex items-center justify-center text-[#6F4634] group-hover:bg-[#6F4634] group-hover:text-white transition-all duration-300">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h4 className="font-manrope text-sm md:text-base text-[#6F4634] font-bold uppercase">Протоколы лаборатории</h4>
                                    <p className="text-[9px] md:text-[10px] text-[#6F4634]/40 uppercase tracking-widest font-medium">MEDSTANDART PDF • 4.2 MB</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-[#6F4634]/10 flex items-center justify-center text-[#6F4634] group-hover:translate-x-1 transition-all">
                                <ChevronRight size={16} />
                            </div>
                        </a>
                    </div>
                </div>

                {/* 2. Values - New Minimalist Section */}
                <div className="mb-20 md:mb-32">
                    <div className="text-center mb-12 md:mb-20">
                        <span className="text-[#6F4634] text-[8px] md:text-[10px] font-bold uppercase tracking-[0.6em] block mb-4">Наш фундамент</span>
                        <h2 className="font-manrope text-3xl md:text-6xl text-[#6F4634] font-bold tracking-tighter uppercase leading-[1.1]">ЦЕННОСТИ <span className="opacity-30">БРЕНДА</span></h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-5 md:p-8 bg-[#F5EFEB]/30 rounded-[1.5rem] md:rounded-[2.5rem] border border-[#6F4634]/5 hover:bg-[#F5EFEB] transition-all duration-500 group"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#6F4634]/5 flex items-center justify-center text-[#6F4634] mb-4 md:mb-6 group-hover:bg-[#6F4634] group-hover:text-white transition-all duration-500">
                                    {v.icon}
                                </div>
                                <h5 className="font-manrope text-sm md:text-xl text-[#6F4634] font-bold uppercase tracking-tight mb-2 md:mb-3">{v.title}</h5>
                                <p className="text-[9px] md:text-[11px] text-[#6F4634]/50 leading-relaxed uppercase tracking-wider">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. Solutions for Everyone - Carousel */}
                <CategoriesCarousel />

                {/* 4. Compact Minimalist Statistics Grid */}
                <div className="max-w-4xl mx-auto mb-20 md:mb-32 px-2 md:px-0">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#6F4634]/10 border border-[#6F4634]/10 rounded-2xl md:rounded-[2rem] overflow-hidden">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.id}
                                className="group relative aspect-square bg-white flex flex-col items-center justify-center text-center p-4 md:p-6 transition-colors duration-500 hover:bg-[#F5EFEB]/50"
                            >
                                <div className="relative z-10 flex flex-col items-center text-center px-2 md:px-4">
                                    <span className="block text-[7px] md:text-[8px] uppercase tracking-[0.3em] font-bold text-[#6F4634]/30 mb-2 md:mb-4">
                                        {stat.label}
                                    </span>
                                    <h3 className="font-manrope text-2xl md:text-4xl text-[#6F4634] font-bold tracking-tighter mb-2 md:mb-3 uppercase">
                                        {stat.value}
                                    </h3>
                                    <div className="w-4 h-[1px] bg-[#6F4634]/10 mb-2 md:mb-3" />
                                    <p className="text-[8px] md:text-[9px] font-medium text-[#6F4634]/40 uppercase tracking-wider leading-tight">
                                        {stat.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 5. FAQ Section */}
                <div className="max-w-3xl mx-auto pb-12 md:pb-20 relative px-2 md:px-0">
                    <div className="flex flex-col items-center text-center mb-8 md:mb-14">
                        <span className="text-[#6F4634] text-[8px] md:text-[10px] font-bold uppercase tracking-[0.8em] mb-3 md:mb-4 block">FAQ</span>
                        <h2 className="font-manrope text-2xl md:text-4xl text-[#6F4634] font-bold tracking-tight leading-[1.1]">Есть <span className="opacity-30">вопросы?</span></h2>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-3">
                        {faqs.map((faq, idx) => (
                            <motion.div key={idx} layout className="group">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className={`w-full p-4 md:p-5 rounded-xl md:rounded-2xl text-left transition-all duration-500 flex justify-between items-center group relative overflow-hidden ${openFaq === idx
                                        ? "bg-[#6F4634] text-white shadow-lg"
                                        : "bg-[#F5EFEB]/40 hover:bg-[#F5EFEB]/80 text-[#6F4634]"
                                        }`}
                                >
                                    <div className="relative z-10 flex items-center gap-3 md:gap-5">
                                        <span className={`font-manrope text-sm md:text-lg font-bold transition-colors duration-500 ${openFaq === idx ? "text-white/40" : "text-[#6F4634]/20"}`}>
                                            0{idx + 1}
                                        </span>
                                        <h3 className={`font-manrope text-sm md:text-base leading-snug transition-all duration-500 max-w-[70%] md:max-w-none ${openFaq === idx ? "font-semibold" : "font-medium"}`}>
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className={`relative z-10 w-7 h-7 md:w-8 md:h-8 rounded-full border flex items-center justify-center transition-all duration-500 flex-shrink-0 ${openFaq === idx ? "bg-white text-[#6F4634] border-white" : "border-[#6F4634]/10 text-[#6F4634]"}`}>
                                        <ChevronDown size={14} className={`transition-transform duration-500 md:w-[18px] md:h-[18px] ${openFaq === idx ? "rotate-180" : ""}`} />
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 py-4 md:px-8 md:py-6">
                                                <p className="text-[12px] md:text-[15px] text-[#6F4634]/60 leading-relaxed font-normal max-w-2xl">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}