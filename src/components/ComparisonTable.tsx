import { X, Check } from 'lucide-react';

const rows = [
    {
        feature: 'Вартість на місяць',
        inHouse: 'від 40 000 грн (зарплата + податки + навчання)',
        outsource: 'від 8 000 грн (фіксований тариф)'
    },
    {
        feature: 'Доступність',
        inHouse: 'Відпустки, лікарняні, звільнення',
        outsource: 'Завжди на зв\'язку без перерв'
    },
    {
        feature: 'Експертиза',
        inHouse: 'Одна людина \u2014 обмежені знання',
        outsource: 'Команда 20+ експертів з усіх напрямків'
    },
    {
        feature: 'Масштабованість',
        inHouse: 'Потрібно наймати додаткових людей',
        outsource: 'Гнучко підключаємо потрібних фахівців'
    },
    {
        feature: 'Відповідальність',
        inHouse: 'Немає фінансових гарантій',
        outsource: 'SLA з фінансовою відповідальністю'
    },
    {
        feature: 'Робоче місце',
        inHouse: 'Потрібен стіл в офісі + обладнання',
        outsource: 'Не потребує місця у вашому офісі'
    }
];

export default function ComparisonTable() {
    return (
        <section id="comparison" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-4 text-center">
                    <span className="mb-3 inline-block rounded-full bg-primary-light/10 px-4 py-1.5 text-sm font-semibold text-primary-light">
                        Порівняння
                    </span>
                    <h2 className="mb-4 text-balance text-primary">Штатний сисадмін vs IT-аутсорсинг OST</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Порівняйте витрати та можливості штатного спеціаліста та команди професіоналів
                    </p>
                </div>

                <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
                    <table className="w-full min-w-[640px] border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b border-border px-6 py-5 text-left text-sm font-semibold text-card-foreground">
                                    Критерій
                                </th>
                                <th className="border-b border-border bg-danger/5 px-6 py-5 text-left text-sm font-semibold text-card-foreground">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-danger/10">
                                            <X className="h-3.5 w-3.5 text-danger" strokeWidth={3} />
                                        </div>
                                        Штатний сисадмін
                                    </div>
                                </th>
                                <th className="border-b border-primary-light/20 bg-primary-light/5 px-6 py-5 text-left text-sm font-semibold text-primary">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10">
                                            <Check className="h-3.5 w-3.5 text-success" strokeWidth={3} />
                                        </div>
                                        IT-аутсорсинг OST
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.feature} className={`transition-colors duration-200 hover:bg-muted/50 ${index < rows.length - 1 ? 'border-b border-border' : ''}`}>
                                    <td className="px-6 py-4 text-sm font-medium text-card-foreground">{row.feature}</td>
                                    <td className="bg-danger/5 px-6 py-4 text-sm text-muted-foreground">{row.inHouse}</td>
                                    <td className="bg-primary-light/5 px-6 py-4 text-sm font-medium text-primary">
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
