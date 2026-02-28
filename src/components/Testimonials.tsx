const testimonials = [
    {
        quote: 'З OST ми отримали передбачуваний сервіс і зрозумілі SLA. Кількість простоїв помітно знизилась вже у перші місяці роботи.',
        name: 'Андрій Коваленко',
        company: 'ТОВ «ТехноТрейд»',
        role: 'Генеральний директор'
    },
    {
        quote: 'Ми скоротили витрати на IT та отримали команду, яка глибоко розуміє наші бізнес-процеси. Підтримка завжди на зв\'язку.',
        name: 'Марина Петренко',
        company: 'Юридична компанія «Правовест»',
        role: 'Керуючий партнер'
    },
    {
        quote: 'Команда OST стандартизувала інфраструктуру в кількох офісах. У результаті ми швидше масштабуємось і легше впроваджуємо нові сервіси.',
        name: 'Дмитро Савченко',
        company: 'Мережа клінік «Здоров\'я»',
        role: 'IT-директор'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-background">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-balance text-[#1a3a6b]">Відгуки клієнтів</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Компанії обирають OST за стабільність, швидкість реакції та бізнес-орієнтований підхід.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="flex flex-col rounded-2xl border border-[#dbe5ff] bg-white p-6 shadow-lg shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <blockquote className="mb-6 flex-1 text-base text-card-foreground">
                                {testimonial.quote}
                            </blockquote>
                            <div className="border-t border-[#dbe5ff] pt-4">
                                <div className="text-sm font-semibold text-card-foreground">{testimonial.name}</div>
                                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                <div className="text-sm font-medium text-[#2563eb]">{testimonial.company}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
