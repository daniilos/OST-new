const contactInfo = [
    { label: 'Телефон', value: '+38 (044) 289 95 41' },
    { label: 'Email', value: 'info@ost.kiev.ua' },
    { label: 'Місто', value: 'Київ' },
    { label: 'Графік роботи', value: 'Пн-Пт: 9:00 - 18:00' }
];

export default function ContactForm() {
    return (
        <section id="contact" className="section-padding bg-section-alt">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-balance text-[#1a3a6b]">Зв'яжіться з нами</h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Залиште заявку, і ми повернемось із пропозицією під ваш бізнес.
                    </p>
                </div>

                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 lg:grid-cols-5">
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            {contactInfo.map((item) => {
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
                                <p className="text-base font-semibold text-[#1a3a6b]">Безкоштовний IT-аудит</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Підготуємо оцінку поточної інфраструктури та план покращень із зрозумілою вартістю обслуговування.
                                </p>
                            </div>
                        </div>

                        <form
                            className="flex flex-col gap-4 rounded-2xl border border-[#dbe5ff] bg-white p-6 shadow-lg shadow-blue-100/50 transition-shadow duration-300 hover:shadow-xl lg:col-span-3"
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
                                        className="w-full rounded-xl border border-[#dbe5ff] bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
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
                                        className="w-full rounded-xl border border-[#dbe5ff] bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
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
                                    className="w-full rounded-xl border border-[#dbe5ff] bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                                    Повідомлення
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Опишіть ваше завдання або запитання..."
                                    className="w-full resize-none rounded-xl border border-[#dbe5ff] bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                                ></textarea>
                            </div>
                            <button type="submit" className="button-primary w-full py-3 text-base">
                                Надіслати заявку
                            </button>
                            <p className="text-center text-sm text-muted-foreground">
                                Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
