"use client";

import { useRef } from "react";

const categories = [
    {
        id: "01",
        title: "Для мужчин",
        tag: "ENERGY",
    },
    {
        id: "02",
        title: "Для женщин",
        tag: "BALANCE",
    },
    {
        id: "03",
        title: "Для детей",
        tag: "IMMUNITY",
    }
];

export default function Categories() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="py-16 bg-white relative z-30 w-full overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#6F4634]" />
                        <span className="font-unbounded text-[#6F4634] uppercase tracking-[0.4em] font-bold text-[9px]">Категории</span>
                    </div>
                </div>

                <div className="flex flex-col">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="group relative border-b border-[#6F4634]/10"
                        >
                            <div className="flex items-center justify-between py-6 md:py-8 transition-all duration-500 ease-out cursor-pointer group hover:px-2">

                                <div className="flex items-center gap-8 md:gap-14">
                                    <span className="font-manrope text-sm font-bold text-[#6F4634]/30 group-hover:text-[#6F4634] transition-colors duration-500">
                                        {cat.id}
                                    </span>

                                    <h3 className="font-manrope text-3xl md:text-5xl font-bold text-[#6F4634] group-hover:translate-x-4 transition-transform duration-500 ease-out tracking-tight">
                                        {cat.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-8">
                                    <span className="hidden md:block font-unbounded text-[9px] uppercase tracking-[0.3em] text-[#6F4634]/40 font-bold">
                                        {cat.tag}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
