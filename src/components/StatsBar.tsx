const stats = [
    { value: '30+', text: '30+ лет' },
    { value: '200+', text: '200+ клиентов' },
    { value: '98%', text: '98% в срок' },
    { value: '24/7', text: '24/7 поддержка' }
];

export default function StatsBar() {
    return (
        <section className="section-padding !py-14 bg-[#EFF4FF]">
            <div className="container-main">
                <div className="grid gap-8 text-center sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.text} className="rounded-2xl border border-[#dbe7ff] bg-white px-6 py-8">
                            <div className="font-mono text-[44px] font-bold leading-none text-[#1a3a6b] sm:text-[56px] xl:text-[72px]">
                                {stat.value}
                            </div>
                            <div className="mt-4 text-base font-semibold text-slate-600">
                                {stat.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
