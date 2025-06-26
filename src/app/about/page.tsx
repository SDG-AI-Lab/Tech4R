import { Hero } from "@/components/Hero";
import PillarTiles from "@/components/PillarTiles";
import Image from 'next/image';
import TilePanel from '@/components/TilePanel';
import { partners } from './partners';
import { FaQuoteLeft } from "react-icons/fa6";
import { AboutTimeline } from "./AboutTimeline";

export default function AboutPage() {

  const partnerTiles = partners.info.map((item) => {
    return {
      name: item.name,
      desc: item.desc || '',
      icon: <Image src={item.icon} alt={item.name} width={110} height={110}/>,
      url: item.url,
      classNames: "lg:h-70"
    };
  });


  return (
    <>
      <Hero 
        title="About Tech4R" 
        subtitle="Tech4R is a collaborative initiative harnessing digital innovation to strengthen disaster resilience around the world."
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1677529497048-2bf5899e68de?w=1440"
          alt="Team collaboration in disaster response"
          width={1440}
          height={960}
          className="w-full rounded-3xl object-cover"
          priority
        />
      </Hero>

      <div className="flex flex-col items-center justify-center gap-30">        
        <div className="container">
          <div className="lg:grid lg:grid-cols-2">
            <div>
              <Image src="/work-desk.jpg" alt="Work desk" width={601} height={550} className="rounded-3xl mx-auto"/>
            </div>

            <div className="p-10">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="mb-8">
                We believe resilience is built through proactive, tech-enabled solutions. We bridge the gap between crisis and recovery by applying data, AI, and emerging technologies. Our mission is to empower communities before, during, and after disasters strike.
              </p>              
              <h2 className="text-3xl font-bold mb-4">Our Roots</h2>
              <p className="mb-8">
                Tech4R is hosted by the UNDP ICPSD and supported by partners like the SDG AI Lab, among others committed to sustainable development and humanitarian innovation.
              </p>
            </div>
          </div>
        </div>

        <PillarTiles />
        
        <TilePanel title="Host Organizations & Partners" tiles={partnerTiles} />     

        {/* TODO: Track Record & Milestones */}

        <div className="container sm:rounded-3xl overflow-hidden">
          <AboutTimeline />
        </div>
        <div className="container">
          <div className="lg:grid lg:grid-cols-2">
            <div className="m-2 p-4">
              <h2 className="text-4xl md:text-7xl/20 font-semibold mx-auto p-4">Why Tech4R Exists</h2>
              <p className="p-4 text-neutral-02">We believe resilience is built through proactive, tech-enabled solutions.</p>
            </div>

            <div className="bg-color-03 m-2 p-4 rounded-xl">
                <div className="bg-white p-4 rounded">
                  <FaQuoteLeft className="rounded w-16 h-16 text-color-01 mt-1" />
                  <p className="text-3xl font-semibold p-4">Our mission is to empower communities before, during, and after disasters strike.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
