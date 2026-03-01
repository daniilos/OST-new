import { translations, type Lang } from '../i18n/translations';

export default function ContactForm({ lang = 'uk' }: { lang?: Lang }) {
    const t = translations[lang].contact;
    return (
        <section id="contact" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-balance text-[#1a3a6b]">{t.heading}</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        {t.subtitle}
                    </p>
                </div>

                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 lg:grid-cols-5">
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            {t.info.map((item) => {
                                return (
                                    <div key={item.label} className="rounded-2xl border border-[#dbe5ff] bg-white p-4">
                                        <div>
                                            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{item.label}</div>
                                            <div className="text-base font-semibold text-card-foreground">{item.value}</div>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="rounded-2xl border border-[#dbe5ff] bg-[#eff4ff] p-5">
                                <p className="text-base font-semibold text-[#1a3a6b]">{t.auditTitle}</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {t.auditText}
                                </p>
                            </div>
                        </div>

                        <form
                            className="flex flex-col gap-4 rounded-2xl border border-[#dbe5ff] bg-white p-6 shadow-lg shadow-blue-100/50 transition-shadow duration-300 hover:shadow-xl lg:col-span-3"
                            id="contact-form"
                            aria-label={lang === 'en' ? 'Contact form' : 'Контактна форма'}
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                        {t.nameLabel}
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder={t.namePlaceholder}
                                        className="w-full rounded-xl border border-[#dbe5ff] bg-background px-4 py-3 text-base text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                        {t.phoneLabel}
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        inputMode="tel"
                                        autoComplete="tel"
                                        placeholder="+38 (0__) ___-__-__"
                                        className="w-full rounded-xl border border-[#dbe5ff] bg-background px-4 py-3 text-base text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                    {t.emailLabel}
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    inputMode="email"
                                    autoComplete="email"
                                    placeholder="your@email.com"
                                    className="w-full rounded-xl border border-[#dbe5ff] bg-background px-4 py-3 text-base text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                    {t.messageLabel}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder={t.messagePlaceholder}
                                    className="w-full resize-none rounded-xl border border-[#dbe5ff] bg-background px-4 py-3 text-base text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                                ></textarea>
                            </div>
                            <button type="submit" className="button-primary w-full py-3 text-base">
                                {t.submit}
                            </button>
                            <p className="text-center text-sm text-muted-foreground">
                                {t.consent}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
