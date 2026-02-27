import { useEffect, useRef, useState } from 'react';

const stats = [
    { target: 30, suffix: '+', label: 'років на ринку', sublabel: 'працюємо з 1995 року' },
    { target: 200, suffix: '+', label: 'компаній-клієнтів', sublabel: 'довіряють нам щодня' },
    { target: 75, suffix: '%', label: 'економії на IT', sublabel: 'порівняно зі штатним сисадміном' },
    { target: 15, suffix: ' хв', label: 'час реакції', sublabel: 'на критичні заявки' }
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 1800;
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // ease-out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.round(eased * target));
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="font-mono text-3xl font-bold text-primary-light sm:text-4xl lg:text-5xl tabular-nums">
            {count}{suffix}
        </div>
    );
}

export default function StatsBar() {
    return (
        <section className="bg-background section-padding !py-14 border-b border-border">
            <div className="container-main">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <AnimatedNumber target={stat.target} suffix={stat.suffix} />
                            <div className="mt-2 text-sm font-semibold text-card-foreground sm:text-base">{stat.label}</div>
                            <div className="mt-0.5 text-xs text-muted-foreground">{stat.sublabel}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
