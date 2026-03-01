const reasons = [
    {
        title: 'Прозора вартість',
        description: 'Ви знижуєте витрати на IT та платите за вимірний сервіс без додаткових витрат на штат.'
    },
    {
        title: 'Команда замість одного спеціаліста',
        description: 'Над вашою інфраструктурою працює група профільних інженерів із розподіленою експертизою.'
    },
    {
        title: 'Швидкі реакції та SLA',
        description: 'Узгоджені терміни реакції та вирішення завдань фіксуються в договорі й контролюються за метриками.'
    },
    {
        title: 'Профілактика інцидентів',
        description: 'Моніторимо стан систем та усуваємо проблеми до того, як вони впливають на працівників і клієнтів.'
    },
    {
        title: 'Єдина точка відповідальності',
        description: 'Один партнер відповідає за весь IT-контур: від робочих місць до серверів, мереж і безпеки.'
    }
];

export default function WhyUs() {
    return (
        <section id="why-us" className="section-padding bg-background">
            <div className="container-main">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h2 className="mb-4 text-balance text-[#1a3a6b]">Чому OST</h2>
                        <p className="max-w-xl text-lg text-muted-foreground">
                            Ми вибудовуємо сервіс навколо цілей бізнесу: передбачувані терміни, високий рівень відмовостійкості та
                            зрозуміла модель обслуговування без зайвої складності.
                        </p>
                        <a href="#contact" className="button-primary mt-8 inline-flex">Отримати пропозицію</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        {reasons.map((reason) => {
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
