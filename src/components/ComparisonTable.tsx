const rows = [
    {
        feature: 'Вартість на місяць',
        inHouse: 'Від 40 000 грн (зарплата, податки, навчання)',
        outsource: 'Від 8 000 грн (фіксований тариф)'
    },
    {
        feature: 'Доступність',
        inHouse: 'Відпустки, лікарняні, звільнення',
        outsource: 'Постійна підтримка за SLA'
    },
    {
        feature: 'Експертиза',
        inHouse: 'Один спеціаліст з обмеженим стеком',
        outsource: 'Команда профільних інженерів'
    },
    {
        feature: 'Масштабування',
        inHouse: 'Потрібно розширювати штат',
        outsource: 'Підключаємо потрібні компетенції під завдання'
    },
    {
        feature: 'Відповідальність',
        inHouse: 'Розмита зона відповідальності',
        outsource: 'Єдиний підрядник та прозора звітність'
    },
    {
        feature: 'Робоче місце',
        inHouse: 'Потрібні робоче місце та обладнання',
        outsource: 'Не потребує місця у вашому офісі'
    }
];

export default function ComparisonTable() {
    return (
        <section id="comparison" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-4 text-center">
                    <h2 className="mb-4 text-balance text-[#1a3a6b]">Порівняння формату обслуговування</h2>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                        Розумійте різницю між внутрішнім IT-спеціалістом та моделлю IT-аутсорсингу OST.
                    </p>
                </div>

                <div className="mt-12 overflow-x-auto rounded-2xl border border-[#dbe5ff] bg-white shadow-lg shadow-blue-100/60">
                    <table className="w-full min-w-[640px] border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b border-[#dbe5ff] px-6 py-5 text-left text-sm font-semibold text-card-foreground">
                                    Критерій
                                </th>
                                <th className="border-b border-[#dbe5ff] bg-[#f8fafc] px-6 py-5 text-left text-sm font-semibold text-card-foreground">
                                    Штатний IT-спеціаліст
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
