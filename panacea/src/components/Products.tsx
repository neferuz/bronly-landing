"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import WhereToBuyModal from "./WhereToBuyModal";
import { products } from "@/data/products";

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

    // Scroll lock
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedProduct]);

    return (
        <section id="products" className="bg-white pt-4 pb-20 md:pt-8 md:pb-32 font-manrope">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12">

                {/* Header Section */}
                <div className="flex flex-col items-start text-left mb-16 md:mb-24 px-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start gap-3"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-8 bg-[#6F4634]/30" />
                            <span className="text-[#6F4634]/60 text-[10px] font-bold uppercase tracking-[0.4em]">
                                Наш Ассортимент
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl text-[#6F4634] font-bold tracking-tighter uppercase leading-[1] mb-6">
                            ПРЕПАРАТЫ <br />
                            <span className="opacity-20 font-light italic text-2xl md:text-4xl">PHARMACEUTICALS</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#6F4634] text-base md:text-lg font-bold uppercase tracking-tight leading-snug border-l-2 border-[#6F4634] pl-5 py-1 max-w-xl"
                    >
                        Высокоэффективные нутрицевтики для поддержания вашего жизненного баланса.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 mb-12 md:mb-16">
                    {products.slice(0, 4).map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 4) * 0.1, duration: 0.8 }}
                            className="group flex flex-col"
                        >
                            <div className="relative aspect-[4/5] bg-[#F9F9F9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 md:mb-6 border border-[#6F4634]/5 group-hover:bg-[#F5EFEB]/50 transition-colors duration-500">
                                <div className="absolute inset-x-4 top-4 md:inset-x-6 md:top-6 flex justify-between items-start z-10">
                                    <span className="text-[8px] md:text-[10px] font-bold text-[#6F4634]/20 group-hover:text-[#6F4634] transition-colors">{product.id}</span>
                                    <div className="flex flex-col gap-1.5 items-end">
                                        {product.tags.map(tag => (
                                            <span key={tag} className="px-2 py-0.5 md:px-3 md:py-1 bg-white/80 backdrop-blur-md rounded-full text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-[#6F4634]">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                                    <Image src={product.image} alt={product.name} fill className="object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            <div className="flex flex-col px-1">
                                <h3 className="text-[13px] md:text-lg text-[#6F4634] font-bold tracking-tight mb-1 md:mb-2 uppercase group-hover:text-[#8B5A45] transition-colors leading-tight">{product.name}</h3>
                                <p className="text-[#6F4634]/50 text-[8px] md:text-[10px] leading-relaxed uppercase tracking-wider line-clamp-2 mb-3 md:mb-5 font-medium">{product.info}</p>
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="w-full py-2 md:py-3 bg-transparent border border-[#6F4634]/15 rounded-full text-[7px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[#6F4634] hover:bg-[#F5EFEB] transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        ИНФОРМАЦИЯ
                                    </button>
                                    <a
                                        href="https://uzum.uz/ru/shop/panaceapharm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-2.5 md:py-3.5 bg-[#6F4634] border border-[#6F4634] rounded-full text-[7px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#8B5A45] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        КУПИТЬ <ShoppingBag size={10} className="md:w-3 md:h-3" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Redesigned Compact View All Button */}
                <div className="flex justify-center pt-8">
                    <Link
                        href="/catalog"
                        className="group flex items-center gap-6 py-4 px-10 rounded-full border border-[#6F4634]/10 hover:bg-[#6F4634] hover:border-[#6F4634] transition-all duration-500 ease-out"
                    >
                        <span className="text-[#6F4634] group-hover:text-white text-[10px] font-bold uppercase tracking-[0.4em] transition-colors duration-500">
                            Перейти в каталог
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#F5EFEB] flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
                            <ArrowRight size={14} className="text-[#6F4634] group-hover:text-white transition-transform group-hover:translate-x-0.5 duration-500" />
                        </div>
                    </Link>
                </div>

                {/* Common Modal */}
                <WhereToBuyModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </section>
    );
}
