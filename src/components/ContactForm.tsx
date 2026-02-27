import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
    { icon: MapPin, label: 'Адрес', value: 'г. Киев, ул. Крещатик, 10, оф. 301' },
    { icon: Phone, label: 'Телефон', value: '+38 (044) 123-45-67' },
    { icon: Mail, label: 'Email', value: 'info@ost.ua' },
    { icon: Clock, label: 'Режим работы', value: 'Пн-Пт: 9:00 - 18:00' }
];

export default function ContactForm() {
    return (
        <section id="contact" className="section-padding bg-background">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-balance">Свяжитесь с нами</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Оставьте заявку и мы перезвоним в течение 30 минут
                    </p>
                </div>

                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 lg:grid-cols-5">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            {contactInfo.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className="flex items-start gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light/10">
                                            <Icon className="h-5 w-5 text-primary-light" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-medium text-muted-foreground">{item.label}</div>
                                            <div className="text-sm font-medium text-card-foreground">{item.value}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Form */}
                        <form
                            className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-3"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                        Имя
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Ваше имя"
                                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary-light focus:ring-1 focus:ring-primary-light"
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
                                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary-light focus:ring-1 focus:ring-primary-light"
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
                                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary-light focus:ring-1 focus:ring-primary-light"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                    Сообщение
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Опишите вашу задачу..."
                                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary-light focus:ring-1 focus:ring-primary-light"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full py-3 text-base">
                                Отправить заявку
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
