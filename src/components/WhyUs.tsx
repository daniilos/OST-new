const reasons = [
    {
        title: 'Прозрачная экономика',
        description: 'Вы снижаете расходы на IT и платите за измеримый сервис без дополнительных затрат на штат.'
    },
    {
        title: 'Команда вместо одного специалиста',
        description: 'Над вашей инфраструктурой работает группа профильных инженеров с распределенной экспертизой.'
    },
    {
        title: 'Быстрые реакции и SLA',
        description: 'Согласованные сроки реакции и решения задач фиксируются в договоре и контролируются по метрикам.'
    },
    {
        title: 'Профилактика инцидентов',
        description: 'Мониторим состояние систем и устраняем проблемы до того, как они влияют на сотрудников и клиентов.'
    },
    {
        title: 'Единая точка ответственности',
        description: 'Один партнер отвечает за весь IT-контур: от рабочих мест до серверов, сетей и безопасности.'
    }
];

export default function WhyUs() {
    return (
        <section id="why-us" className="section-padding bg-background">
            <div className="container-main">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h2 className="mb-4 text-balance text-[#1a3a6b]">Почему OST</h2>
                        <p className="max-w-xl text-lg text-muted-foreground">
                            Мы выстраиваем сервис вокруг целей бизнеса: предсказуемые сроки, высокий уровень отказоустойчивости и
                            понятная модель обслуживания без лишней сложности.
                        </p>
                        <a href="#contact" className="button-primary mt-8 inline-flex">Получить предложение</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        {reasons.map((reason) => {
                            return (
                                <div
                                    key={reason.title}
                                    className="flex gap-4 rounded-2xl border border-[#dbe5ff] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/60"
                                >
                                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eff4ff] text-sm font-bold text-[#2563eb]">
                                        ✓
                                    </span>
                                    <div>
                                        <h3 className="mb-2 text-[#1a3a6b]">{reason.title}</h3>
                                        <p className="text-base text-muted-foreground">{reason.description}</p>
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
