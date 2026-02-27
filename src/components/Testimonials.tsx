import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: 'Перейшли на обслуговування в OST три роки тому. За цей час жодного серйозного простою. Хлопці реагують миттєво і вирішують проблеми до того, як ми їх помічаємо.',
        name: 'Андрій Коваленко',
        company: 'ТОВ "ТехноТрейд"',
        role: 'Генеральний директор'
    },
    {
        quote: 'Економія порівняно зі штатним сисадміном \u2014 близько 40%. При цьому рівень підтримки значно виріс. Особливо цінуємо цілодобову доступність та проактивний моніторинг.',
        name: 'Марина Петренко',
        company: 'Юридична компанія "Правовест"',
        role: 'Керуючий партнер'
    },
    {
        quote: 'OST допомогли нам безболісно мігрувати всю інфраструктуру в хмару. Тепер наші 5 офісів працюють як єдине ціле. Рекомендую всім, хто цінує надійність.',
        name: 'Дмитро Савченко',
        company: 'Мережа клінік "Здоров\'я"',
        role: 'IT-директор'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-background">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <span className="mb-3 inline-block rounded-full bg-primary-light/10 px-4 py-1.5 text-sm font-semibold text-primary-light">
                        Відгуки
                    </span>
                    <h2 className="mb-4 text-balance text-primary">Що кажуть наші клієнти</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Довіра понад 200 компаній \u2014 наша найкраща рекомендація
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary-light/30"
                        >
                            <Quote className="mb-4 h-8 w-8 text-primary-light/30 transition-colors duration-300 group-hover:text-primary-light/60" />
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
