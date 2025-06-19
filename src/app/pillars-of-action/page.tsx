import { Hero } from "@/components/Hero";
import { pillars } from './pillars';


export default function PillarsOfActionPage() {
  return (
    <>
      <Hero title="Pillars of Action" subtitle="Tech4R operates across four strategic pillars that guide our mission to deliver impactful digital solutions for disaster resilience." />
      <div className="flex-1 flex items-center justify-center">
        
        <div className="container grid grid-cols-1 lg:grid lg:grid-cols-2 py-20">

          {pillars.info.map((item) => {
            const Icon = item.icon; // grab the component
            
            return (
              <div key={item.title} className="bg-color-03 m-2 p-4 pt-32 rounded-xl">
                <div className="bg-white p-4 rounded hover:bg-color-01 hover:text-white transition">
                  <Icon className="bg-color-03 rounded w-16 h-16 text-color-01 mt-1 p-4" />
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </>
  );
}

