const testimonials = [
    {
        quote: 'С OST мы закрыли все вопросы по инфраструктуре и больше не теряем время на повторяющиеся технические проблемы.',
        name: 'Андрей Коваленко',
        company: 'ООО "ТехноТрейд"',
        role: 'Генеральный директор'
    },
    {
        quote: 'Скорость реакции поддержки стала заметно выше, а стоимость обслуживания оказалась ниже, чем содержание IT-штата.',
        name: 'Марина Петренко',
        company: 'Юридическая компания "Правовест"',
        role: 'Управляющий партнёр'
    },
    {
        quote: 'Переход на аутсорсинг прошёл спокойно: команда OST взяла на себя поддержку офисов и помогла стандартизировать процессы.',
        name: 'Дмитрий Савченко',
        company: 'Сеть клиник "Здоровье"',
        role: 'IT-директор'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-background">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                        Отзывы
                    </p>
                    <h2 className="text-balance">Нам доверяют компании из разных отраслей</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
                        Реальные отзывы о переходе на сервисную модель IT-поддержки OST.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="flex flex-col rounded-2xl border border-[#dbe7ff] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <blockquote className="mb-6 flex-1 text-slate-700">
                                «{testimonial.quote}»
                            </blockquote>
                            <div className="border-t border-[#dbe7ff] pt-4">
                                <div className="text-sm font-semibold text-slate-900">{testimonial.name}</div>
                                <div className="text-xs text-slate-500">{testimonial.role}</div>
                                <div className="text-xs font-semibold text-[#1a3a6b]">{testimonial.company}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
