"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ShoppingBag, ExternalLink, MapPin, Phone, Navigation } from "lucide-react";

interface Product {
    id: string;
    name: string;
    info: string;
    image: string;
    images?: string[];
    category?: string;
    tags?: string[];
    description?: string;
    volume?: string;
    composition?: { name: string; amount: string }[];
    characteristics?: string[];
    indications?: string[];
    usage?: string;
    dosage?: { age: string; dose: string }[];
    course?: string;
    contraindications?: string[];
}

interface WhereToBuyModalProps {
    product: Product | null;
    onClose: () => void;
}

const extendedPharmacies = [
    {
        name: "Аптека Panacea (Филиал №1)",
        address: "ул. Низами, 203, Баку",
        phone: "+994 12 493 00 00",
        link: "https://maps.google.com/?q=Nizami+St+203+Baku"
    },
    {
        name: "Сеть 36.6 (Park Bulvar)",
        address: "пр. Нефтяников, ТЦ Park Bulvar",
        phone: "+994 12 598 00 00",
        link: "https://maps.google.com/?q=Park+Bulvar+Baku"
    },
    {
        name: "Аптека Здоровье",
        address: "пр. Гейдара Алиева, 112",
        phone: "+994 12 567 00 00",
        link: "https://maps.google.com/?q=Heydar+Aliyev+Ave+112+Baku"
    },
    {
        name: "Аптека Старт",
        address: "ул. Самеда Вургуна, 88",
        phone: "+994 12 440 00 00",
        link: "https://maps.google.com/?q=Samad+Vurgun+St+88+Baku"
    }
];

export default function WhereToBuyModal({ product, onClose }: WhereToBuyModalProps) {
    useEffect(() => {
        if (product) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [product]);

    return (
        <AnimatePresence>
            {product && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[210] md:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col pointer-events-auto relative"
                            data-lenis-prevent
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-[220] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#6F4634] hover:bg-[#6F4634] hover:text-white transition-all duration-300 active:scale-90 shadow-md"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden custom-scrollbar">

                                {/* Left - Visuals */}
                                <div className="w-full md:w-[380px] bg-[#F5EFEB] shrink-0 p-8 md:p-10 flex flex-col items-center justify-center relative min-h-[40vh] md:min-h-0">
                                    <div className="relative w-48 h-48 md:w-full md:aspect-square mb-6 md:mb-8">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain mix-blend-multiply opacity-90 drop-shadow-2xl"
                                        />
                                    </div>

                                    {/* Additional Images Thumbnails */}
                                    {product.images && product.images.length > 1 && (
                                        <div className="flex gap-2 justify-center">
                                            {product.images.map((img, i) => (
                                                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/50 p-1 border border-[#6F4634]/5">
                                                    <Image src={img} alt="" width={40} height={40} className="object-contain mix-blend-multiply" />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-6 md:mt-8 text-center">
                                        <span className="px-4 py-1.5 bg-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#6F4634] inline-block shadow-sm mb-3">
                                            {product.category || "Биодобавка"}
                                        </span>
                                        <p className="font-unbounded text-[11px] text-[#6F4634]/40 uppercase tracking-widest">{product.volume}</p>
                                    </div>
                                </div>

                                {/* Right - Information */}
                                <div className="flex-1 p-6 md:p-12 bg-white md:overflow-y-auto custom-scrollbar">
                                    <h2 className="font-serif text-3xl md:text-5xl text-[#6F4634] leading-tight italic mb-6">
                                        {product.name}
                                    </h2>

                                    <div className="space-y-8 md:space-y-10">
                                        {/* Description */}
                                        <section>
                                            <p className="text-[#6F4634] text-base md:text-lg font-medium leading-relaxed mb-8">
                                                {product.description || product.info}
                                            </p>
                                            
                                            <a 
                                                href="https://uzum.uz/ru/shop/panaceapharm" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#6F4634] text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#8B5A45] transition-all duration-300 shadow-lg shadow-[#6F4634]/20 group/btn"
                                            >
                                                КУПИТЬ НА UZUM
                                                <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </a>
                                        </section>

                                        {/* Characteristics & Indications */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {product.characteristics && (
                                                <div>
                                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6F4634]/30 mb-4">Характеристики</h4>
                                                    <ul className="space-y-2">
                                                        {product.characteristics.map((c, i) => (
                                                            <li key={i} className="text-xs text-[#6F4634] font-bold uppercase tracking-tight italic flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#6F4634] mt-1 shrink-0 opacity-20" /> {c}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {product.indications && (
                                                <div>
                                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6F4634]/30 mb-4">Показания</h4>
                                                    <ul className="space-y-2">
                                                        {product.indications.map((ind, i) => (
                                                            <li key={i} className="text-xs text-[#6F4634] font-medium uppercase tracking-tight flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#6F4634] mt-1 shrink-0 opacity-10" /> {ind}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        <div className="h-[1px] bg-[#6F4634]/5" />

                                        {/* Composition */}
                                        {product.composition && (
                                            <section>
                                                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6F4634]/30 mb-6">Состав</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                                                    {product.composition.map((item, i) => (
                                                        <div key={i} className="flex justify-between items-center border-b border-[#6F4634]/5 pb-2">
                                                            <span className="text-[11px] font-bold text-[#6F4634] uppercase tracking-tight">{item.name}</span>
                                                            <span className="text-[11px] text-[#6F4634]/60 font-medium italic">{item.amount}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )}

                                        {/* Usage */}
                                        {product.usage && (
                                            <section className="bg-[#F5EFEB]/50 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                                                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6F4634]/30 mb-6 font-manrope">Применение и дозировка</h4>
                                                <div className="space-y-6">
                                                    <p className="text-sm text-[#6F4634] font-bold italic lowercase first-letter:uppercase">{product.usage}</p>
                                                    {product.dosage && (
                                                        <div className="grid gap-3">
                                                            {product.dosage.map((d, i) => (
                                                                <div key={i} className="flex flex-col border-l-2 border-[#6F4634]/20 pl-4 py-1">
                                                                    <span className="text-[9px] font-bold text-[#6F4634]/40 uppercase tracking-widest mb-1">{d.age}</span>
                                                                    <span className="text-sm font-bold text-[#6F4634] uppercase">{d.dose}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {product.course && (
                                                        <p className="text-[10px] font-bold text-[#6F4634]/60 uppercase tracking-[0.2em] mt-4">
                                                            Рекомендуемый курс: <span className="text-[#6F4634] font-black">{product.course}</span>
                                                        </p>
                                                    )}
                                                </div>
                                            </section>
                                        )}

                                        {/* Contraindications */}
                                        {product.contraindications && (
                                            <section className="pb-8">
                                                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6F4634]/30 mb-4">Противопоказания</h4>
                                                <ul className="grid gap-2">
                                                    {product.contraindications.map((c, i) => (
                                                        <li key={i} className="text-[10px] text-[#6F4634]/50 uppercase tracking-widest flex items-center gap-2">
                                                            <X size={10} className="shrink-0" /> {c}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </section>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
