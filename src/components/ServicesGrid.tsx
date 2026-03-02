import { translations, type Lang } from '../i18n/translations';
import { BriefcaseBusiness, MonitorCog, Server, Network, ShieldCheck, Headset } from 'lucide-react';

const icons = [BriefcaseBusiness, MonitorCog, Server, Network, ShieldCheck, Headset];

export default function ServicesGrid({ lang = 'uk' }: { lang?: Lang }) {
    const t = translations[lang].services;
    return (
        <section id="services" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-4 text-center">
                    <h2 className="mb-4 text-balance text-[#1a3a6b]">{t.heading}</h2>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{t.subtitle}</p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {t.items.map((service, i) => {
                        const Icon = icons[i];
                        return (
                            <div key={service.title} className="service-card group">
                                <div className="mb-6">
                                    <Icon className="h-16 w-16 text-[#2563eb] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" strokeWidth={1.6} />
                                </div>
                                <h3 className="mb-3 transition-colors duration-300 group-hover:text-[#2563eb]">{service.title}</h3>
                                <p className="text-base text-muted-foreground">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
