import { X, Check } from 'lucide-react';

const rows = [
    {
        feature: 'Стоимость в месяц',
        inHouse: 'от 50 000 грн (зарплата + налоги)',
        outsource: 'от 12 000 грн (фиксированный тариф)'
    },
    {
        feature: 'Доступность',
        inHouse: 'Отпуска, больничные, увольнение',
        outsource: '24/7 без перерывов и выходных'
    },
    {
        feature: 'Экспертиза',
        inHouse: 'Один специалист — ограниченные знания',
        outsource: 'Команда экспертов по всем направлениям'
    },
    {
        feature: 'Масштабируемость',
        inHouse: 'Нужно нанимать дополнительных людей',
        outsource: 'Гибко подключаем специалистов'
    },
    {
        feature: 'Ответственность',
        inHouse: 'Нет финансовых гарантий',
        outsource: 'SLA с финансовой ответственностью'
    },
    {
        feature: 'Актуальность знаний',
        inHouse: 'Требует обучения за ваш счёт',
        outsource: 'Постоянное повышение квалификации'
    }
];

export default function ComparisonTable() {
    return (
        <section id="comparison" className="section-padding bg-background">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-balance">Свой сисадмин vs IT-аутсорсинг OST</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Сравните затраты и возможности штатного специалиста и команды профессионалов
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] border-collapse">
                        <thead>
                            <tr>
                                <th className="rounded-tl-xl bg-muted px-6 py-4 text-left text-sm font-semibold text-card-foreground">
                                    Критерий
                                </th>
                                <th className="bg-muted px-6 py-4 text-left text-sm font-semibold text-card-foreground">
                                    <div className="flex items-center gap-2">
                                        <X className="h-4 w-4 text-red-500" />
                                        Штатный сисадмин
                                    </div>
                                </th>
                                <th className="rounded-tr-xl bg-primary px-6 py-4 text-left text-sm font-semibold text-primary-content">
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4" />
                                        IT-аутсорсинг OST
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.feature} className={index % 2 === 0 ? 'bg-background' : 'bg-section-alt'}>
                                    <td className="px-6 py-4 text-sm font-medium text-card-foreground">{row.feature}</td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{row.inHouse}</td>
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
