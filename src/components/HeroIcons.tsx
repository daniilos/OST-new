import { Server, ShieldCheck, Cloud, Database, Monitor, Wifi } from 'lucide-react';

const icons = [Server, ShieldCheck, Cloud, Database, Monitor, Wifi];

export default function HeroIcons() {
    return (
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-full sm:max-w-[360px] mx-auto lg:ml-auto lg:mr-0">
            {icons.map((Icon, i) => (
                <div
                    key={i}
                    className="hero-icon-card group flex aspect-square items-center justify-center rounded-2xl bg-[#f0f4ff] transition-all duration-300 hover:bg-[#e4ecff] hover:shadow-lg"
                    style={{ animationDelay: `${i * 0.08}s` }}
                >
                    <Icon
                        size={44}
                        stroke="#2563eb"
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            ))}
        </div>
    );
}
