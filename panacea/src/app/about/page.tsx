"use client";

import About from "@/components/About";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-white font-manrope">
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Background Image with improved overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us.jpeg"
                        alt="About Panacea Pharm"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
                </div>

                <div className="relative z-10 text-center px-6">
                    {/* Massive Watermark Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 select-none pointer-events-none whitespace-nowrap">
                        <h2 className="font-manrope text-[20vw] leading-none tracking-tighter uppercase font-black text-white">
                            PANACEA
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-20 flex flex-col items-center"
                    >
                        <span className="text-white/60 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em] mb-4 md:mb-6 block">
                            Познакомьтесь с нами
                        </span>
                        <h1 className="font-manrope text-4xl md:text-8xl lg:text-9xl text-white font-black leading-[0.9] tracking-tighter mb-8 uppercase">
                            О КОМПАНИИ <br /> <span className="opacity-40 italic font-light">PHARM</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Existing About Component Content */}
            <section className="relative z-20 -mt-16 md:-mt-24 px-4 md:px-0">
                <div className="bg-white rounded-t-[3rem] md:rounded-t-[6rem] overflow-hidden shadow-2xl">
                    <About />
                </div>
            </section>
        </div>
    );
}
