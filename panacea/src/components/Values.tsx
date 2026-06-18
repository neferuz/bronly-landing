"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Leaf, FlaskConical } from "lucide-react";

const values = [
    {
        icon: <ShieldCheck size={28} strokeWidth={1.5} />,
        title: "Безопасность",
        desc: "Контроль качества сырья на каждом этапе производства согласно мировым стандартам GMP.",
    },
    {
        icon: <FlaskConical size={28} strokeWidth={1.5} />,
        title: "Инновации",
        desc: "Собственная лаборатория и регулярные исследования для создания максимально эффективных формул.",
    },
    {
        icon: <Zap size={28} strokeWidth={1.5} />,
        title: "Эффективность",
        desc: "Биодоступные формы витаминов, которые усваиваются организмом на 98% быстрее аналогов.",
    },
    {
        icon: <Leaf size={28} strokeWidth={1.5} />,
        title: "Экологичность",
        desc: "Мы используем перерабатываемую упаковку и минимизируем углеродный след нашего завода.",
    }
];

export default function Values() {
    return (
        <section className="pt-12 pb-20 md:pt-20 md:pb-32 bg-white border-t border-[#6F4634]/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* Header Information Section - Left Aligned */}
                <div className="flex flex-col items-start text-left mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start gap-3"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-8 bg-[#6F4634]/30" />
                            <span className="font-manrope text-[#6F4634]/60 text-[10px] font-bold uppercase tracking-[0.4em]">
                                Наши Принципы
                            </span>
                        </div>
                        <h2 className="font-manrope text-3xl md:text-5xl text-[#6F4634] font-bold tracking-tighter uppercase leading-[1] mb-6">
                            ЦЕННОСТИ <br />
                            <span className="opacity-20 font-light italic text-2xl md:text-4xl">PANACEA</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-manrope text-[#6F4634] text-base md:text-lg font-bold uppercase tracking-tight leading-snug border-l-2 border-[#6F4634] pl-5 py-1 max-w-xl"
                    >
                        Мы создаем культуру осознанного отношения к своему здоровью.
                    </motion.p>
                </div>

                {/* Values Grid - Strictly 2x2 on Mobile, 4x1 on Desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[#6F4634]/10">
                    {values.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-5 md:p-12 border-r border-b border-[#6F4634]/10 flex flex-col items-start gap-6 md:gap-10 group hover:bg-[#F9F9F9] transition-colors duration-500 min-h-[220px] md:min-h-[400px]"
                        >
                            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-[#F9F9F9] text-[#6F4634]/40 group-hover:bg-[#6F4634] group-hover:text-white rounded-2xl transition-all duration-500 transform group-hover:scale-110">
                                {item.icon}
                            </div>

                            <div className="flex flex-col gap-3 md:gap-4 mt-auto md:mt-0">
                                <h3 className="font-manrope text-[11px] md:text-xl text-[#6F4634] font-bold uppercase tracking-widest">
                                    {item.title}
                                </h3>
                                <p className="font-manrope text-[8px] md:text-[11px] font-bold text-[#6F4634]/40 uppercase tracking-[0.15em] leading-[1.6] md:leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle background identifier */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-[0.01] pointer-events-none select-none">
                <span className="font-manrope text-[40vw] font-black text-[#6F4634] uppercase leading-none block text-center">
                    CORE
                </span>
            </div>
        </section>
    );
}
