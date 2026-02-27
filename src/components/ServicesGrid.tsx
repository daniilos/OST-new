import { BriefcaseBusiness, MonitorCog, Server, Network, ShieldCheck, Headset } from 'lucide-react';

const services = [
    {
        icon: BriefcaseBusiness,
        title: 'IT-аутсорсинг',
        description: 'Полный внешний IT-отдел для бизнеса: обслуживание инфраструктуры, контроль процессов и развитие вашей IT-среды.'
    },
    {
        icon: MonitorCog,
        title: 'Обслуживание ПК',
        description: 'Поддержка рабочих станций и периферии, обновления, диагностика, устранение сбоев и стандартизация рабочих мест.'
    },
    {
        icon: Server,
        title: 'Серверы',
        description: 'Администрирование серверов, резервное копирование, контроль доступов и поддержание высокой доступности бизнес-сервисов.'
    },
    {
        icon: Network,
        title: 'Сети',
        description: 'Проектирование и сопровождение офисных сетей, Wi-Fi и VPN. Стабильная связь между всеми вашими филиалами и отделами.'
    },
    {
        icon: ShieldCheck,
        title: 'Кибербезопасность',
        description: 'Аудит защищённости, внедрение политик безопасности, защита данных компании и сотрудников от актуальных угроз.'
    },
    {
        icon: Headset,
        title: 'Техподдержка',
        description: 'Единая точка входа для всех обращений сотрудников. Быстрые реакции, прозрачные SLA и поддержка в рабочее и внерабочее время.'
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-4 text-center">
                    <h2 className="mb-4 text-balance text-[#1a3a6b]">Услуги OST для бизнеса</h2>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                        6 ключевых направлений IT-аутсорсинга для стабильной и безопасной работы вашего офиса.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.title} className="service-card border border-[#dbe5ff] bg-white shadow-blue-100/80">
                                <div className="mb-7">
                                    <Icon className="h-16 w-16 text-[#2563eb]" strokeWidth={1.6} />
                                </div>
                                <h3 className="mb-3 text-[#1a3a6b]">{service.title}</h3>
                                <p className="text-base text-muted-foreground">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
