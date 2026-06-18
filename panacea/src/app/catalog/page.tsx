"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Search, X, SlidersHorizontal } from "lucide-react";
import WhereToBuyModal from "@/components/WhereToBuyModal";

import { products, Product } from "@/data/products";

const categories = ["Все", ...new Set(products.map(p => p.tags?.[0] || p.category || "Другое"))];

export default function Catalog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("Все");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Scroll locks
    useEffect(() => {
        if (isFilterOpen || selectedProduct) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = 'var(--removed-body-scroll-bar-size)';
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }, [isFilterOpen, selectedProduct]);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.info.toLowerCase().includes(searchQuery.toLowerCase());

            const productCat = product.tags?.[0] || product.category || "Другое";
            const matchesCategory = activeCategory === "Все" || productCat === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    return (
        <main className="bg-white pt-40 pb-32 min-h-screen font-manrope">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* Header Area */}
                <div className="mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        className="flex items-center gap-3 mb-4 md:mb-6"
                    >
                        <div className="h-[1px] w-8 bg-[#6F4634]/30" />
                        <span className="text-[#6F4634]/60 text-[10px] font-bold uppercase tracking-[0.4em]">
                            Наш ассортимент
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        className="text-4xl md:text-7xl font-bold text-[#6F4634] tracking-tighter uppercase leading-none"
                    >
                        КАТАЛОГ <br /> <span className="text-[#6F4634]/20">ПРЕПАРАТОВ</span>
                    </motion.h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    {/* Desktop Filters */}
                    <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-32">
                        <div className="flex flex-col gap-10">
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#6F4634] mb-6">Поиск</h4>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Название..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-[#F9F9F9] border-b border-[#6F4634]/10 py-3 text-xs font-bold uppercase tracking-wider text-[#6F4634] focus:outline-none focus:border-[#6F4634] transition-all"
                                    />
                                    <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-[#6F4634]/30" size={14} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#6F4634] mb-6">Категории</h4>
                                <div className="flex flex-col gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`flex items-center justify-between group py-2 text-left transition-all ${activeCategory === cat ? "text-[#6F4634]" : "text-[#6F4634]/40 hover:text-[#6F4634]/60"}`}
                                        >
                                            <span className="text-[11px] font-bold uppercase tracking-wider">{cat}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <div className="flex-grow w-full overflow-hidden">
                        <div className="lg:hidden mb-8">
                            <button
                                onClick={() => setIsFilterOpen(true)}
                                className="w-full py-4 px-6 bg-[#6F4634] text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-3 active:scale-95 transition-all"
                            >
                                <SlidersHorizontal size={18} /> Фильтры
                            </button>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-8 md:gap-y-12">
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((product, idx) => (
                                    <motion.div
                                        layout
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                        className="group flex flex-col"
                                    >
                                        <div className="relative aspect-[4/5] bg-[#F9F9F9] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-4 md:mb-6 border border-[#6F4634]/5 group-hover:bg-[#F5EFEB]/50 transition-colors duration-700">
                                            <div className="absolute inset-x-4 top-4 md:inset-x-6 top-6 flex justify-between items-start z-10">
                                                <span className="text-[8px] md:text-[10px] font-bold text-[#6F4634]/20 group-hover:text-[#6F4634] transition-colors">{product.id}</span>
                                                <span className="px-2 md:px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-[#6F4634]">{product.tags?.[0] || product.category}</span>
                                            </div>
                                            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                                                <Image src={product.image} alt={product.name} fill className="object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col px-1">
                                            <h3 className="text-sm md:text-lg text-[#6F4634] font-bold tracking-tight mb-1 md:mb-2 uppercase group-hover:text-[#8B5A45] transition-colors leading-tight">{product.name}</h3>
                                            <p className="text-[#6F4634]/50 text-[9px] md:text-[10px] leading-relaxed uppercase tracking-wider line-clamp-1 mb-4 md:mb-6 font-medium">{product.info}</p>
                                            <div className="flex flex-col gap-2 mt-auto">
                                                <button
                                                    onClick={() => setSelectedProduct(product)}
                                                    className="w-full py-2.5 md:py-3 bg-transparent border border-[#6F4634]/15 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[#6F4634] hover:bg-[#F5EFEB] transition-all duration-300 flex items-center justify-center gap-2"
                                                >
                                                    ИНФОРМАЦИЯ
                                                </button>
                                                <a
                                                    href="https://uzum.uz/ru/shop/panaceapharm"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full py-3 md:py-4 bg-[#6F4634] border border-[#6F4634] rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#8B5A45] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                                                >
                                                    КУПИТЬ <ShoppingBag size={12} />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Filter Modal Mobile */}
                <AnimatePresence>
                    {isFilterOpen && (
                        <>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsFilterOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-[110] backdrop-blur-sm" />
                            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="lg:hidden fixed inset-x-0 bottom-0 z-[120] bg-white rounded-t-[2rem] max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
                                <div className="flex items-center justify-between p-6 border-b border-[#6F4634]/10">
                                    <h3 className="text-lg font-bold text-[#6F4634] uppercase tracking-tight">Фильтры</h3>
                                    <button onClick={() => setIsFilterOpen(false)} className="w-10 h-10 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#6F4634]"><X size={18} /></button>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 space-y-8" data-lenis-prevent>
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#6F4634] mb-4">Поиск</h4>
                                        <div className="relative">
                                            <input type="text" placeholder="Название..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-[#F9F9F9] border-b-2 border-[#6F4634]/10 py-4 text-sm font-bold uppercase tracking-wider text-[#6F4634] focus:outline-none focus:border-[#6F4634] transition-all" />
                                            <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-[#6F4634]/30" size={18} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#6F4634] mb-4">Категории</h4>
                                        <div className="flex flex-col gap-2">
                                            {categories.map((cat) => (
                                                <button key={cat} onClick={() => { setActiveCategory(cat); setIsFilterOpen(false); }} className={`py-4 px-5 rounded-2xl text-left text-sm font-bold uppercase tracking-wide transition-all ${activeCategory === cat ? "bg-[#6F4634] text-white" : "bg-[#F5EFEB] text-[#6F4634]"}`}>
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Shared Modal Component */}
                <WhereToBuyModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </main>
    );
}
