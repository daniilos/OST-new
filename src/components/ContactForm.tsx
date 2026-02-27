import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
    { icon: Phone, label: 'Телефон', value: '+38 (044) 289 95 41' },
    { icon: Mail, label: 'Email', value: 'info@ost.kiev.ua' },
    { icon: MapPin, label: 'Адреса', value: 'м. Київ' },
    { icon: Clock, label: 'Режим роботи', value: 'Пн-Пт: 9:00 - 18:00' }
];

export default function ContactForm() {
    return (
        <section id="contact" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <span className="mb-3 inline-block rounded-full bg-primary-light/10 px-4 py-1.5 text-sm font-semibold text-primary-light">
                        Контакти
                    </span>
                    <h2 className="mb-4 text-balance text-primary">Зв'яжіться з нами</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Залиште заявку і ми передзвонимо протягом 30 хвилин
                    </p>
                </div>

                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 lg:grid-cols-5">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            {contactInfo.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className="group flex items-start gap-3 transition-all duration-200 hover:translate-x-1">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light/10 transition-colors duration-200 group-hover:bg-primary-light/20">
                                            <Icon className="h-5 w-5 text-primary-light" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-medium text-muted-foreground">{item.label}</div>
                                            <div className="text-sm font-medium text-card-foreground">{item.value}</div>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="mt-4 rounded-xl border border-primary-light/20 bg-primary-light/5 p-4">
                                <p className="text-sm font-semibold text-primary">Безкоштовний IT-аудит</p>
                                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                    Замовте безкоштовний аудит IT-інфраструктури вашого офісу. Ми підготуємо детальний звіт з рекомендаціями та розрахунком вартості обслуговування.
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <form
                            className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg lg:col-span-3"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                        Ім'я
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Ваше ім'я"
                                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-primary-light focus:ring-2 focus:ring-primary-light/20"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                        Телефон
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+38 (0__) ___-__-__"
                                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-primary-light focus:ring-2 focus:ring-primary-light/20"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-primary-light focus:ring-2 focus:ring-primary-light/20"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                    Повідомлення
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Опишіть вашу задачу або питання..."
                                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-primary-light focus:ring-2 focus:ring-primary-light/20"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full py-3 text-base">
                                Надіслати заявку
                            </button>
                            <p className="text-center text-xs text-muted-foreground">
                                Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
