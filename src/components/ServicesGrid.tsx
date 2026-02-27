import { Monitor, Server, Network, ShieldCheck, Cloud, Headphones } from 'lucide-react';

const services = [
    {
        icon: Monitor,
        title: 'Обслуговування комп\'ютерів',
        description: 'Оновлення програм, перевстановлення Windows, чищення реєстру, перевірка антивірусом. Повноцінна комп\'ютерна допомога вашому підприємству \u2014 вирішення всіх проблем у роботі техніки.',
        tag: 'Найпопулярніше'
    },
    {
        icon: Server,
        title: 'Обслуговування серверів',
        description: 'Сервер потребує професійного обслуговування. Моніторинг системи, налаштування рівнів доступу, інформаційна безпека, резервне копіювання та відновлення баз даних.',
        tag: null
    },
    {
        icon: Network,
        title: 'Комп\'ютерні мережі',
        description: 'Побудова локальної мережі, монтаж СКС та ЛОМ, монтаж дротових і бездротових мереж, аудит інфраструктури, налаштування роутерів та розмежування прав доступу.',
        tag: null
    },
    {
        icon: ShieldCheck,
        title: 'Кібербезпека',
        description: 'Максимальний захист ваших даних та конфіденційності. Аудит безпеки, впровадження політик захисту, антивірусний моніторинг та захист від загроз.',
        tag: null
    },
    {
        icon: Cloud,
        title: 'Google Workspace для бізнесу',
        description: 'Впровадження та налаштування G Suite, міграція пошти та документів у хмару, навчання персоналу. Гнучкість та масштабованість для зростаючого бізнесу.',
        tag: null
    },
    {
        icon: Headphones,
        title: 'Технічна підтримка 24/7',
        description: 'Оперативна допомога вашим співробітникам з будь-яких IT-питань. Перша лінія підтримки з гарантією SLA \u2014 реакція за 15 хвилин, вирішення у першу годину.',
        tag: null
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-4 text-center">
                    <span className="mb-3 inline-block rounded-full bg-primary-light/10 px-4 py-1.5 text-sm font-semibold text-primary-light">
                        Що ми робимо
                    </span>
                    <h2 className="mb-4 text-balance text-primary">Комплексне IT обслуговування</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Повний спектр IT-послуг для малого та середнього бізнесу у Києві та по всій Україні
                    </p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className="group relative rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:border-primary-light/30 hover:border-l-4 hover:border-l-primary-light"
                            >
                                {service.tag && (
                                    <span className="absolute -top-3 right-6 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-content">
                                        {service.tag}
                                    </span>
                                )}
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light/10 transition-all duration-300 group-hover:bg-primary-light/20 group-hover:scale-110">
                                    <Icon className="h-7 w-7 text-primary-light" strokeWidth={1.5} />
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-card-foreground">{service.title}</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
