import { useEffect, useRef, useState } from 'react';

const stats = [
    { target: 30, suffix: '+', label: 'лет на рынке' },
    { target: 200, suffix: '+', label: 'клиентов' },
    { target: 98, suffix: '%', label: 'задач в срок' },
    { target: 24, suffix: '/7', label: 'поддержка' }
];

function CountUp({ target, suffix, label }: { target: number; suffix: string; label: string }) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const duration = 1800;
        let start: number;
        let frame: number;

        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) frame = requestAnimationFrame(step);
        };

        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [target]);

    return (
        <div ref={ref} className="text-center">
            <div className="font-mono text-[clamp(2.8rem,8vw,4.5rem)] font-bold leading-none tracking-tight text-[#1a3a6b] tabular-nums">
                {value}
                {suffix}
            </div>
            <div className="mt-3 text-base font-semibold text-[#1a3a6b]">{label}</div>
        </div>
    );
}

export default function StatsBar() {
    return (
        <section className="section-padding !py-16 bg-[#EFF4FF] border-y border-[#dbe5ff]">
            <div className="container-main">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat) => (
                        <CountUp key={stat.label} target={stat.target} suffix={stat.suffix} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
}
