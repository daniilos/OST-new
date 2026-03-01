import { translations, type Lang } from '../i18n/translations';

export default function WhyUs({ lang = 'uk' }: { lang?: Lang }) {
    const t = translations[lang].whyUs;
    return (
        <section id="why-us" className="section-padding bg-background">
            <div className="container-main">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h2 className="mb-4 text-balance text-[#1a3a6b]">{t.heading}</h2>
                        <p className="max-w-xl text-lg text-muted-foreground">
                            {t.subtitle}
                        </p>
                        <a href="#contact" className="button-primary mt-8 inline-flex">{t.cta}</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        {t.reasons.map((reason) => {
                            return (
                                <div
                                    key={reason.title}
                                    className="flex gap-4 rounded-2xl border border-[#dbe5ff] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/60"
                                >
                                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eff4ff] text-sm font-bold text-[#2563eb]">
                                        ✓
                                    </span>
                                    <div>
                                        <h3 className="mb-2 text-[#1a3a6b]">{reason.title}</h3>
                                        <p className="text-base text-muted-foreground">{reason.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
