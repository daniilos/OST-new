import {
    BriefcaseBusiness,
    MonitorCog,
    Server,
    Network,
    ShieldCheck,
    Headset
} from 'lucide-react';

const services = [
    {
        icon: BriefcaseBusiness,
        title: 'IT-аутсорсинг',
        description: 'Полный комплекс IT-обслуживания компании с фиксированным SLA и понятной стоимостью.'
    },
    {
        icon: MonitorCog,
        title: 'Обслуживание ПК',
        description: 'Поддержка рабочих станций сотрудников, настройка ПО, профилактика и оперативное устранение сбоев.'
    },
    {
        icon: Server,
        title: 'Серверы',
        description: 'Администрирование, мониторинг, резервное копирование и отказоустойчивая работа серверной среды.'
    },
    {
        icon: Network,
        title: 'Сети',
        description: 'Проектирование и поддержка локальных и беспроводных сетей для стабильной работы офиса.'
    },
    {
        icon: ShieldCheck,
        title: 'Кибербезопасность',
        description: 'Защита данных, аудит уязвимостей, антивирусный контроль и внедрение политик информационной безопасности.'
    },
    {
        icon: Headset,
        title: 'Техподдержка',
        description: 'Единая линия поддержки пользователей с быстрым временем реакции и контролем качества решения заявок.'
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-main">
                <div className="text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                        Услуги
                    </p>
                    <h2 className="text-balance">Комплексный IT-сервис для бизнеса</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
                        Шесть ключевых направлений обслуживания, которые покрывают все ежедневные IT-задачи компании.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className="service-card border border-[#dbe7ff] shadow-[0_12px_30px_rgba(37,99,235,0.12)]"
                            >
                                <Icon className="h-16 w-16 text-[#2563eb]" strokeWidth={1.75} />
                                <h3 className="mt-8">{service.title}</h3>
                                <p className="mt-3 text-slate-600">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
