export default function PillarTiles() {

    const pillars = {
        info: [
            { title: "Rescue", desc: "Enabling decision-making and resource coordination for faster response." },
            { title: "Response", desc: "Deploying tech tools to support relief logistics and situational awareness." },
            { title: "Recovery", desc: "Using data to rebuild, track progress, and inform community-led recovery." },
            { title: "Resilience", desc: "Fostering preparedness through training, predictive analytics, etc." }
        ]
    };

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 container 2xl:px-20">
            {pillars.info.map((item) => {

                return (
                    <div key={item.title} className="bg-neutral-01 p-10 rounded-xl flex flex-col gap-4">
                        <h2 className="text-2xl font-medium tracking-[-1px]">{item.title}</h2>
                        <p className="text-neutral-02 leading-relaxed font-light">{item.desc}</p>
                    </div>
                );
            })}
        </div>
    );
}