import { Clock, Users, Zap, Award, HeartHandshake, CheckCircle } from 'lucide-react';

const reasons = [
    {
        icon: Zap,
        title: 'Економія до 75% витрат на IT',
        description: 'Ви платите за реальне обслуговування та отримуєте гарантований сервіс. Не вимагаємо робочого місця, преміальних та оплати навчання.'
    },
    {
        icon: Users,
        title: 'Команда замість одного сисадміна',
        description: 'Штат з 20+ сертифікованих фахівців з досвідом від 5 років. Не йдемо у відпустку \u2014 завжди є хто замінить. Працюйте з професіоналами.'
    },
    {
        icon: Clock,
        title: 'Реакція за 15 хвилин',
        description: 'Середній час відповіді на заявку \u2014 15 хвилин. Критичні проблеми вирішуємо в першу годину. Ваш бізнес не чекатиме.'
    },
    {
        icon: Award,
        title: 'Прозора звітність та SLA',
        description: 'Щомісячні звіти про виконану роботу. Чіткі терміни вирішення задач, закріплені в договорі з фінансовими гарантіями.'
    },
    {
        icon: HeartHandshake,
        title: '30+ років на ринку IT',
        description: 'Працюємо з 1995 року. Понад 200 компаній обрали OST як свого надійного IT-партнера. Це \u2014 вибір успішних людей!'
    },
    {
        icon: CheckCircle,
        title: 'Проактивний моніторинг',
        description: 'Виявляємо та вирішуємо проблеми до того, як ви їх помітите. Мінімізуємо простої та забезпечуємо безперебійну роботу.'
    }
];

export default function WhyUs() {
    return (
        <section id="why-us" className="section-padding bg-background">
            <div className="container-main">
                <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
                    {/* Left Column */}
                    <div className="flex-1 lg:sticky lg:top-32">
                        <span className="mb-3 inline-block rounded-full bg-primary-light/10 px-4 py-1.5 text-sm font-semibold text-primary-light">
                            Чому саме ми
                        </span>
                        <h2 className="mb-4 text-balance text-primary">
                            У чому відмінність від штатного сисадміна?
                        </h2>
                        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                            Сучасний бізнес потребує безперебійної IT інфраструктури. Компанія OST мінімізує простій вашого офісу та розвиває IT. Все це дозволить вам зосередитись на основному бізнесі.
                        </p>
                        <a href="#contact" className="btn-primary mt-8 inline-flex">Отримати пропозицію</a>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-1 flex-col gap-5">
                        {reasons.map((reason) => {
                            const Icon = reason.icon;
                            return (
                                <div key={reason.title} className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-light/30 hover:border-l-4 hover:border-l-primary-light">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light/10 transition-all duration-300 group-hover:bg-primary-light/20 group-hover:scale-110">
                                        <Icon className="h-5 w-5 text-primary-light" strokeWidth={1.75} />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-base font-bold text-card-foreground">{reason.title}</h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
