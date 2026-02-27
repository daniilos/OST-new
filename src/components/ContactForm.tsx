const contactInfo = [
    { label: 'Телефон', value: '+38 (044) 289 95 41' },
    { label: 'Email', value: 'info@ost.kiev.ua' },
    { label: 'Город', value: 'Киев' },
    { label: 'Режим работы', value: 'Пн-Пт: 9:00 - 18:00' }
];

export default function ContactForm() {
    return (
        <section id="contact" className="section-padding bg-[#f8fbff]">
            <div className="container-main">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                        Контакты
                    </p>
                    <h2 className="text-balance">Оставьте заявку на консультацию</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
                        Обсудим текущие задачи и предложим оптимальный формат IT-аутсорсинга для вашей компании.
                    </p>
                </div>

                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 lg:grid-cols-5">
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="rounded-xl border border-[#dbe7ff] bg-white p-4">
                                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        {item.label}
                                    </div>
                                    <div className="mt-1 text-sm font-medium text-slate-700">{item.value}</div>
                                </div>
                            ))}

                            <div className="rounded-2xl border border-[#dbe7ff] bg-[#eff4ff] p-5">
                                <p className="text-sm font-semibold text-[#1a3a6b]">Бесплатный аудит IT-инфраструктуры</p>
                                <p className="mt-2 text-sm text-slate-600">
                                    Подготовим список улучшений, оценим риски и предложим понятный план поддержки.
                                </p>
                            </div>
                        </div>

                        <form
                            className="flex flex-col gap-4 rounded-2xl border border-[#dbe7ff] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg lg:col-span-3"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                                        Имя
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Ваше имя"
                                        className="w-full rounded-xl border border-[#dbe7ff] bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                                        Телефон
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+38 (0__) ___-__-__"
                                        className="w-full rounded-xl border border-[#dbe7ff] bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full rounded-xl border border-[#dbe7ff] bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Сообщение
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Опишите задачу или вопрос..."
                                    className="w-full resize-none rounded-xl border border-[#dbe7ff] bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                                ></textarea>
                            </div>
                            <button type="submit" className="button-primary w-full justify-center py-3 text-base">
                                Отправить заявку
                            </button>
                            <p className="text-center text-xs text-slate-500">
                                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
