import { Mouse, Server, Monitor, Wifi, Cloud } from 'lucide-react';

const icons = [
    { Icon: Mouse, top: '5%', left: '58%', delay: '0s' },
    { Icon: Monitor, top: '22%', left: '12%', delay: '0.4s' },
    { Icon: Cloud, top: '40%', left: '52%', delay: '0.8s' },
    { Icon: Wifi, top: '58%', left: '18%', delay: '1.2s' },
    { Icon: Server, top: '74%', left: '48%', delay: '0.6s' },
];

export default function FloatingIcons() {
    return (
        <>
            <div className="hidden lg:block relative w-full min-h-[420px]">
                {icons.map(({ Icon, top, left, delay }, i) => (
                    <div
                        key={i}
                        className="absolute hero-float"
                        style={{ top, left, animationDelay: delay }}
                    >
                        <Icon size={80} stroke="#2563eb" strokeWidth={1.5} />
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 py-4 lg:hidden">
                {icons.map(({ Icon, delay }, i) => (
                    <div key={i} className="hero-float" style={{ animationDelay: delay }}>
                        <Icon size={48} stroke="#2563eb" strokeWidth={1.5} />
                    </div>
                ))}
            </div>
        </>
    );
}
