import { Mouse, Cpu, Server, Cloud } from 'lucide-react';

export default function FounderIcons() {
    return (
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div
                className="absolute -top-5 -right-5 founder-float-y"
                style={{ animationDelay: '0s' }}
            >
                <Mouse size={48} stroke="#2563eb" strokeWidth={1.5} />
            </div>

            <div
                className="absolute -bottom-4 -left-6 founder-float-y"
                style={{ animationDelay: '0.6s' }}
            >
                <Cpu size={48} stroke="#2563eb" strokeWidth={1.5} />
            </div>

            <div
                className="absolute top-1/2 -translate-y-1/2 -right-10 founder-glow"
                style={{ animationDelay: '1.2s' }}
            >
                <Server size={48} stroke="#2563eb" strokeWidth={1.5} />
            </div>

            <div
                className="absolute -top-7 left-1/4 founder-float-x"
                style={{ animationDelay: '0.3s' }}
            >
                <Cloud size={48} stroke="#2563eb" strokeWidth={1.5} />
            </div>
        </div>
    );
}
