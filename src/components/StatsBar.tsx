const stats = [
    { value: '30', suffix: '+', label: 'років на ринку' },
    { value: '200', suffix: '+', label: 'клієнтів' },
    { value: '98', suffix: '%', label: 'завдань вчасно' },
    { value: '24', suffix: '/7', label: 'підтримка' }
];

export default function StatsBar() {
    return (
        <section className="section-padding !py-16 bg-[#EFF4FF] border-y border-[#dbe5ff]">
            <div className="container-main">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className="stat-item text-center"
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            <div className="font-mono text-[clamp(2.8rem,8vw,4.5rem)] font-bold leading-none tracking-tight text-[#1a3a6b] tabular-nums">
                                <span data-count-target={stat.value}>{stat.value}</span>
                                {stat.suffix}
                            </div>
                            <div className="mt-3 text-base font-semibold text-[#1a3a6b]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
