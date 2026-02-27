import { Monitor, Server, Network, ShieldCheck, Cloud, Headphones } from 'lucide-react';

const services = [
    {
        icon: Monitor,
        title: 'IT-аутсорсинг',
        description: 'Полное IT-обслуживание вашей компании. Мы берём на себя все технические задачи, чтобы вы сфокусировались на бизнесе.'
    },
    {
        icon: Server,
        title: 'Обслуживание серверов',
        description: 'Мониторинг, настройка и поддержка серверной инфраструктуры. Обеспечим стабильную работу ваших систем 24/7.'
    },
    {
        icon: Network,
        title: 'Сетевая инфраструктура',
        description: 'Проектирование, монтаж и обслуживание локальных сетей. Надёжная связь между всеми точками вашего офиса.'
    },
    {
        icon: ShieldCheck,
        title: 'Кибербезопасность',
        description: 'Защита от вирусов, DDoS-атак и утечек данных. Аудит безопасности и внедрение политик защиты информации.'
    },
    {
        icon: Cloud,
        title: 'Облачные решения',
        description: 'Миграция в облако, настройка и управление облачными сервисами. Гибкость и масштабируемость для вашего бизнеса.'
    },
    {
        icon: Headphones,
        title: 'Техподдержка пользователей',
        description: 'Оперативная помощь вашим сотрудникам по любым IT-вопросам. Первая линия поддержки с гарантией SLA.'
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding bg-background">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-balance">Наши услуги</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Комплексные IT-решения для бизнеса любого масштаба
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/10">
                                    <Icon className="h-6 w-6 text-primary-light" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{service.title}</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
