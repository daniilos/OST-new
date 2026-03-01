import { translations, type Lang } from '../i18n/translations';

export default function Testimonials({ lang = 'uk' }: { lang?: Lang }) {
    const t = translations[lang].testimonials;
    return (
        <section id="testimonials" className="section-padding bg-background">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-balance text-[#1a3a6b]">{t.heading}</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {t.items.map((testimonial) => (
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
