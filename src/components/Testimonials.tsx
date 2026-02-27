import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: 'Перешли на обслуживание в OST три года назад. За это время ни одного серьёзного простоя. Ребята реагируют моментально и решают проблемы до того, как мы их замечаем.',
        name: 'Андрей Коваленко',
        company: 'ООО "ТехноТрейд"',
        role: 'Генеральный директор'
    },
    {
        quote: 'Экономия по сравнению со штатным сисадмином — около 40%. При этом уровень поддержки значительно вырос. Особенно ценим круглосуточную доступность и проактивный мониторинг.',
        name: 'Марина Петренко',
        company: 'Юридическая компания "Правовест"',
        role: 'Управляющий партнёр'
    },
    {
        quote: 'OST помогли нам безболезненно мигрировать всю инфраструктуру в облако. Теперь наши 5 офисов работают как единое целое. Рекомендую всем, кто ценит надёжность.',
        name: 'Дмитрий Савченко',
        company: 'Сеть клиник "Здоровье"',
        role: 'IT-директор'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-balance">Что говорят наши клиенты</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Доверие более 200 компаний — наша лучшая рекомендация
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
                        >
                            <Quote className="mb-4 h-8 w-8 text-primary-light/30" />
                            <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-card-foreground">
                                {testimonial.quote}
                            </blockquote>
                            <div className="border-t border-border pt-4">
                                <div className="text-sm font-semibold text-card-foreground">{testimonial.name}</div>
                                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                                <div className="text-xs font-medium text-primary-light">{testimonial.company}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
