const rows = [
    {
        feature: 'Стоимость в месяц',
        inHouse: 'От 40 000 грн (зарплата, налоги, обучение)',
        outsource: 'От 8 000 грн (фиксированный тариф)'
    },
    {
        feature: 'Доступность',
        inHouse: 'Отпуска, больничные, увольнение',
        outsource: 'Постоянная поддержка по SLA'
    },
    {
        feature: 'Экспертиза',
        inHouse: 'Один специалист с ограниченным стеком',
        outsource: 'Команда профильных инженеров'
    },
    {
        feature: 'Масштабирование',
        inHouse: 'Нужно расширять штат',
        outsource: 'Подключаем нужные компетенции по задаче'
    },
    {
        feature: 'Ответственность',
        inHouse: 'Размытая зона ответственности',
        outsource: 'Единый подрядчик и прозрачная отчетность'
    },
    {
        feature: 'Рабочее место',
        inHouse: 'Нужны рабочее место и оборудование',
        outsource: 'Не требует места в вашем офисе'
    }
];

export default function ComparisonTable() {
    return (
        <section id="comparison" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-4 text-center">
                    <h2 className="mb-4 text-balance text-[#1a3a6b]">Сравнение формата обслуживания</h2>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                        Понимайте разницу между внутренним IT-специалистом и моделью IT-аутсорсинга OST.
                    </p>
                </div>

                <div className="mt-12 overflow-x-auto rounded-2xl border border-[#dbe5ff] bg-white shadow-lg shadow-blue-100/60">
                    <table className="w-full min-w-[640px] border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b border-[#dbe5ff] px-6 py-5 text-left text-sm font-semibold text-card-foreground">
                                    Критерий
                                </th>
                                <th className="border-b border-[#dbe5ff] bg-[#f8fafc] px-6 py-5 text-left text-sm font-semibold text-card-foreground">
                                    Штатный IT-специалист
                                </th>
                                <th className="border-b border-[#dbe5ff] bg-[#eff4ff] px-6 py-5 text-left text-sm font-semibold text-[#1a3a6b]">
                                    IT-аутсорсинг OST
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr
                                    key={row.feature}
                                    className={`transition-colors duration-200 hover:bg-[#f8fbff] ${index < rows.length - 1 ? 'border-b border-[#dbe5ff]' : ''}`}
                                >
                                    <td className="px-6 py-4 text-sm font-medium text-card-foreground">{row.feature}</td>
                                    <td className="bg-[#f8fafc] px-6 py-4 text-sm text-muted-foreground">{row.inHouse}</td>
                                    <td className="bg-[#eff4ff] px-6 py-4 text-sm font-semibold text-[#1a3a6b]">
                                        {row.outsource}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
