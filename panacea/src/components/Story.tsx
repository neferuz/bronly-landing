"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
    { id: 1, label: "Стандарты", value: "DEUTSCH", desc: "Немецкие технологии" },
    { id: 2, label: "Продукция", value: "PREMIUM", desc: "Био-добавки" },
    { id: 3, label: "Стандарты", value: "GMP", desc: "Контроль качества" },
    { id: 4, label: "Экспорт", value: "GLOBAL", desc: "Мировой рынок" },
];

export default function Story() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                {/* Brand Story Part */}
                <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
                    <div className="relative w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-[3rem] bg-[#F5EFEB] shadow-xl"
                        >
                            <Image
                                src="/images/about.png"
                                alt="Panacea Laboratory"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="absolute -right-6 -bottom-6 bg-[#6F4634] text-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block">
                            <p className="font-serif text-3xl mb-1 italic">Pure</p>
                            <p className="text-[10px] uppercase tracking-widest opacity-60">Nature & Science</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 w-full lg:w-1/2">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <span className="text-[#6F4634] text-[10px] font-bold uppercase tracking-[0.5em] block mb-6">История успеха</span>
                            <h2 className="font-serif text-5xl md:text-6xl text-[#6F4634] leading-[0.9] tracking-tighter mb-8">
                                <span className="italic font-light text-[#6F4634]/40">ВАШ ПУТЬ</span> К ЗДОРОВЬЮ
                            </h2>
                            <p className="text-[#6F4634]/80 text-base md:text-lg leading-relaxed mb-6">
                                Panacea Pharm — это современное производство биологически активных добавок (БАДов), созданное по передовым немецким технологиям, чтобы объединить силу чистой природы и инновационные научные достижения.
                            </p>
                            <p className="text-[#6F4634]/60 text-[10px] md:text-sm leading-relaxed mb-8 uppercase tracking-wider">
                                Мы верим, что забота о здоровье должна быть качественной, доступной и научно обоснованной. Наш завод, оснащенный немецким оборудованием, строго соблюдает международные стандарты GMP.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#F5EFEB]/50 p-6 rounded-3xl border border-[#6F4634]/5 transition-colors hover:bg-[#F5EFEB]">
                                <h4 className="font-serif text-lg text-[#6F4634] mb-2 italic">Наша Миссия</h4>
                                <p className="text-[10px] text-[#6F4634]/50 leading-relaxed uppercase tracking-widest">
                                    Создание безопасных БАДов мирового уровня.
                                </p>
                            </div>
                            <div className="bg-[#6F4634] p-6 rounded-3xl text-white">
                                <h4 className="font-serif text-lg mb-2 italic">Наш Опыт</h4>
                                <p className="text-[10px] text-white/50 leading-relaxed uppercase tracking-widest">
                                    Сотни успешных формул и тысячи довольных клиентов.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Grid */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#6F4634]/10 border border-[#6F4634]/10 rounded-[2.5rem] overflow-hidden">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative aspect-square bg-white flex flex-col items-center justify-center text-center p-6 transition-colors duration-500 hover:bg-[#F5EFEB]/50"
                            >
                                <span className="block text-[8px] uppercase tracking-[0.3em] font-bold text-[#6F4634]/30 mb-4">
                                    {stat.label}
                                </span>
                                <h3 className="font-serif text-3xl md:text-4xl text-[#6F4634] tracking-tighter mb-3">
                                    {stat.value}
                                </h3>
                                <div className="w-4 h-[1px] bg-[#6F4634]/10 mb-3" />
                                <p className="text-[9px] font-medium text-[#6F4634]/40 uppercase tracking-wider leading-tight">
                                    {stat.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
