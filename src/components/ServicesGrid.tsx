import { BriefcaseBusiness, MonitorCog, Server, Network, ShieldCheck, Headset } from 'lucide-react';

const services = [
    {
        icon: BriefcaseBusiness,
        title: 'IT-аутсорсинг',
        description: 'Повний зовнішній IT-відділ для бізнесу: обслуговування інфраструктури, контроль процесів та розвиток вашого IT-середовища.'
    },
    {
        icon: MonitorCog,
        title: 'Обслуговування ПК',
        description: 'Підтримка робочих станцій та периферії, оновлення, діагностика, усунення збоїв та стандартизація робочих місць.'
    },
    {
        icon: Server,
        title: 'Сервери',
        description: 'Адміністрування серверів, резервне копіювання, контроль доступу та підтримка високої доступності бізнес-сервісів.'
    },
    {
        icon: Network,
        title: 'Мережі',
        description: 'Проєктування та супровід офісних мереж, Wi-Fi та VPN. Стабільний зв\'язок між усіма вашими філіями та відділами.'
    },
    {
        icon: ShieldCheck,
        title: 'Кібербезпека',
        description: 'Аудит захищеності, впровадження політик безпеки, захист даних компанії та працівників від актуальних загроз.'
    },
    {
        icon: Headset,
        title: 'Техпідтримка',
        description: 'Єдина точка входу для всіх звернень працівників. Швидкі реакції, прозорі SLA та підтримка у робочий і позаробочий час.'
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-4 text-center">
                    <h2 className="mb-4 text-balance text-[#1a3a6b]">Послуги OST для бізнесу</h2>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                        6 ключових напрямів IT-аутсорсингу для стабільної та безпечної роботи вашого офісу.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.title} className="service-card group">
                                <div className="mb-6">
                                    <Icon
                                        className="h-16 w-16 text-[#2563eb] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                                        strokeWidth={1.6}
                                    />
                                </div>
                                <h3 className="mb-3 transition-colors duration-300 group-hover:text-[#2563eb]">
                                    {service.title}
                                </h3>
                                <p className="text-base text-muted-foreground">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
