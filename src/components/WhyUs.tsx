const reasons = [
    'Фиксированные SLA и предсказуемый бюджет без скрытых платежей.',
    'Команда инженеров вместо одного специалиста в штате.',
    'Быстрая реакция на обращения и проактивный мониторинг.',
    'Защита данных и контроль доступов на всех уровнях инфраструктуры.',
    'Гибкое масштабирование IT под рост бизнеса.',
    'Прозрачная отчетность и понятная коммуникация с ответственными.'
];

export default function WhyUs() {
    return (
        <section id="why-us" className="section-padding bg-background">
            <div className="container-main">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                        Почему OST
                    </p>
                    <h2 className="text-balance">Партнер, который отвечает за результат</h2>
                    <p className="mt-4 max-w-3xl text-lg text-slate-600">
                        Мы строим обслуживание так, чтобы IT работало стабильно каждый день, а ваша команда не тратила
                        время на технические сбои.
                    </p>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {reasons.map((reason) => (
                            <li
                                key={reason}
                                className="flex gap-3 rounded-2xl border border-[#dbe7ff] bg-white p-5 shadow-sm"
                            >
                                <span className="mt-0.5 text-lg font-bold text-[#2563eb]">✓</span>
                                <p className="text-slate-700">{reason}</p>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="button-primary mt-10 inline-flex">
                        Обсудить задачи
                    </a>
                </div>
            </div>
        </section>
    );
}
