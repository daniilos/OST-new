const rows = [
    {
        feature: 'Стоимость в месяц',
        inHouse: 'от 40 000 грн (зарплата, налоги, отпускные)',
        outsource: 'от 8 000 грн (фиксированный тариф)'
    },
    {
        feature: 'Доступность',
        inHouse: 'Отпуск, больничный, риск простоя',
        outsource: 'Постоянная доступность команды'
    },
    {
        feature: 'Экспертиза',
        inHouse: 'Один специалист, ограниченный стек',
        outsource: 'Инженеры по инфраструктуре, сетям и безопасности'
    },
    {
        feature: 'Масштабирование',
        inHouse: 'Нужно расширять штат',
        outsource: 'Гибкое подключение нужных специалистов'
    },
    {
        feature: 'Ответственность',
        inHouse: 'Без фиксированных SLA',
        outsource: 'SLA с прописанными сроками и KPI'
    },
    {
        feature: 'Рабочее место',
        inHouse: 'Нужны место и оборудование',
        outsource: 'Не требуется место в вашем офисе'
    }
];

export default function ComparisonTable() {
    return (
        <section id="comparison" className="section-padding bg-[#f8fbff]">
            <div className="container-main">
                <div className="text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                        Сравнение
                    </p>
                    <h2 className="text-balance">Штатный специалист vs IT-аутсорсинг OST</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
                        Понимание разницы в стоимости и уровне сервиса помогает выбрать устойчивую модель IT-поддержки.
                    </p>
                </div>

                <div className="mt-12 overflow-x-auto rounded-2xl border border-[#dbe7ff] bg-white shadow-sm">
                    <table className="w-full min-w-[640px] border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b border-[#dbe7ff] px-6 py-5 text-left text-sm font-semibold text-slate-700">
                                    Критерий
                                </th>
                                <th className="border-b border-[#dbe7ff] bg-slate-50 px-6 py-5 text-left text-sm font-semibold text-slate-700">
                                    Штатный IT-специалист
                                </th>
                                <th className="border-b border-[#dbe7ff] bg-[#eff4ff] px-6 py-5 text-left text-sm font-semibold text-[#1a3a6b]">
                                    IT-аутсорсинг OST
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr
                                    key={row.feature}
                                    className={`transition-colors duration-200 hover:bg-[#f8fbff] ${
                                        index < rows.length - 1 ? 'border-b border-[#dbe7ff]' : ''
                                    }`}
                                >
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">{row.feature}</td>
                                    <td className="bg-slate-50 px-6 py-4 text-sm text-slate-600">{row.inHouse}</td>
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
