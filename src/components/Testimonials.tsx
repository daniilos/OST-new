const testimonials = [
    {
        quote: 'С OST мы получили предсказуемый сервис и понятные SLA. Количество простоев заметно снизилось уже в первые месяцы работы.',
        name: 'Андрей Коваленко',
        company: 'ООО «ТехноТрейд»',
        role: 'Генеральный директор'
    },
    {
        quote: 'Мы сократили расходы на IT и получили команду, которая глубоко понимает наши бизнес-процессы. Поддержка всегда на связи.',
        name: 'Марина Петренко',
        company: 'Юридическая компания «Правовест»',
        role: 'Управляющий партнер'
    },
    {
        quote: 'Команда OST стандартизировала инфраструктуру в нескольких офисах. В результате мы быстрее масштабируемся и легче внедряем новые сервисы.',
        name: 'Дмитрий Савченко',
        company: 'Сеть клиник «Здоровье»',
        role: 'IT-директор'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-background">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-balance text-[#1a3a6b]">Отзывы клиентов</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Компании выбирают OST за стабильность, скорость реакции и бизнес-ориентированный подход.
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
