export default function PillarTiles() {
    
    const pillars = {
        info: [
            {title: "Rescue", desc: "Enabling decision-making and resource coordination for faster response."},
            {title: "Response", desc: "Deploying tech tools to support relief logistics and situational awareness."},
            {title: "Recovery", desc: "Using data to rebuild, track progress, and inform community-led recovery."},
            {title: "Resilience", desc: "Fostering preparedness through training, predictive analytics, etc."}
        ]
    };

    return (
    <div className="container lg:grid lg:grid-cols-4 p-8 gap-6">
        {pillars.info.map((item) => {
            
            return (
                <div key={item.title} className="bg-neutral-01 m-2 p-8 rounded-xl">
                    <h2 className="text-2xl font-medium leading-[1.4]">{item.title}</h2>
                    <p className="text-neutral-02">{item.desc}</p>
                </div>
            );
        })}
    </div>
    );
}