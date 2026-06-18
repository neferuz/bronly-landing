"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, ChevronRight } from "lucide-react";

export default function Certificates() {
    return (
        <section id="certificates" className="bg-white py-12 md:py-24 font-manrope border-t border-[#6F4634]/5">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                <div className="bg-[#F5EFEB]/30 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 flex flex-col items-center border border-[#6F4634]/5">
                    
                    {/* Header Section */}
                    <div className="text-center max-w-2xl mb-8 md:mb-14">
                        <span className="text-[#6F4634] text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em] block mb-4 md:mb-6">Наши стандарты</span>
                        <h2 className="text-3xl md:text-5xl text-[#6F4634] font-bold tracking-tighter uppercase leading-[1.1] mb-4 md:mb-6">ISO & GMP <br className="md:hidden" /> <span className="opacity-30">CERTIFIED</span></h2>
                        <p className="text-[#6F4634]/60 text-[10px] md:text-[12px] leading-relaxed uppercase tracking-widest font-medium max-w-[500px] mx-auto px-4 md:px-0">
                            Вся продукция Panacea Pharm строго соответствует международным требованиям безопасности и эффективности.
                        </p>
                    </div>

                    {/* Photo Container - Responsive & Shadowless */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[3/1] bg-white rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-[#6F4634]/10 mb-10 md:mb-16"
                    >
                        <Image 
                            src="/photo.jpg" 
                            alt="Certificates" 
                            fill 
                            className="object-contain p-4 md:p-10"
                            priority
                        />
                    </motion.div>

                    {/* Action Button - Fully Responsive */}
                    <div className="w-full flex justify-center px-2">
                        <a 
                            href="/medstandart.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full max-w-sm bg-white hover:bg-[#6F4634] hover:text-white p-5 md:p-7 rounded-2xl md:rounded-[2rem] border border-[#6F4634]/10 transition-all duration-500 hover:border-[#6F4634] flex items-center justify-between group group-active:scale-[0.98]"
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#6F4634]/5 flex items-center justify-center text-[#6F4634] group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
                                    <FileText size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-[10px] md:text-[13px] font-bold uppercase tracking-tight">Протоколы лаборатории</h4>
                                    <p className="text-[8px] md:text-[10px] opacity-40 uppercase tracking-[0.2em] font-medium">MEDSTANDART LAB PROTOCOLS</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#6F4634]/10 flex items-center justify-center text-[#6F4634] group-hover:bg-white/10 group-hover:text-white group-hover:translate-x-1 transition-all duration-500">
                                <ChevronRight size={16} className="md:w-5 md:h-5" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
