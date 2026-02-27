import { CheckCircle, Clock, Users, Award } from 'lucide-react';

const reasons = [
    {
        icon: Clock,
        title: 'Быстрая реакция',
        description: 'Среднее время ответа на заявку — 15 минут. Критичные проблемы решаем в первый час.'
    },
    {
        icon: Users,
        title: 'Команда экспертов',
        description: 'Более 30 сертифицированных специалистов с опытом работы от 5 лет.'
    },
    {
        icon: Award,
        title: 'Прозрачная отчётность',
        description: 'Ежемесячные отчёты о проделанной работе. Вы всегда знаете, за что платите.'
    },
    {
        icon: CheckCircle,
        title: 'Гарантия SLA',
        description: 'Чёткие сроки решения задач, закреплённые в договоре. Финансовые гарантии.'
    }
];

export default function WhyUs() {
    return (
        <section id="why-us" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
                    {/* Left Column */}
                    <div className="flex-1">
                        <h2 className="mb-4 text-balance">Почему выбирают OST?</h2>
                        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                            Более 30 лет мы помогаем бизнесу работать эффективно, обеспечивая надёжную IT-инфраструктуру и профессиональную поддержку.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-1 flex-col gap-6">
                        {reasons.map((reason) => {
                            const Icon = reason.icon;
                            return (
                                <div key={reason.title} className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light/10">
                                        <Icon className="h-5 w-5 text-primary-light" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-base font-semibold text-card-foreground">{reason.title}</h3>
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
