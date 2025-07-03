import { Hero } from "@/components/Hero";
import PillarTiles from "@/components/PillarTiles";
import Image from 'next/image';
import TilePanel from '@/components/TilePanel';
import { partners } from './partners';
import TrackRecord from './TrackRecord';
import { FaQuoteLeft } from "react-icons/fa6";
import { AboutTimeline } from "./AboutTimeline";
import { SectionContainer } from "@/components/SectionContainer";

export default function AboutPage() {

  const partnerTiles = partners.info.map((item) => {
    return {
      name: item.name,
      desc: item.desc || '',
      icon: <Image src={item.icon} alt={item.name} width={110} height={110} />,
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
        <section>
          <div className="container">
            <div className="lg:grid lg:grid-cols-2 gap-4">
              <div>
                <Image src="/images/work-desk.jpg" alt="Work desk" width={601} height={550} className="rounded-3xl" />
              </div>

              <div className="flex flex-col gap-4 h-fit my-auto">
                <h2 className="text-5xl font-semibold">Our Mission</h2>
                <p className="text-neutral-03">
                  We believe resilience is built through proactive, tech-enabled solutions. We bridge the gap between crisis and recovery by applying data, AI, and emerging technologies. Our mission is to empower communities before, during, and after disasters strike.
                </p>
                <h2 className="text-5xl font-semibold">Our Roots</h2>
                <p className="text-neutral-03">
                  Tech4R is hosted by the UNDP ICPSD and supported by partners like the SDG AI Lab, among others committed to sustainable development and humanitarian innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <PillarTiles />
        </section>

        <section>
          <TilePanel title="Host Organizations & Partners" tiles={partnerTiles} />
        </section>

        <SectionContainer>
          <AboutTimeline />
        </SectionContainer>

        <section>
          <TrackRecord />
        </section>

        <section>
          <div className="container my-8">
            <div className="flex flex-row sm:flex-col flex-wrap items-center lg:grid lg:grid-cols-2 px-4 md:px-6 lg:px-10 xl:px-20 2xl:px-24 gap-6">
              <div>
                <h2 className="text-7xl font-semibold mb-4">Why Tech4R Exists</h2>
                <p className="text-neutral-02">We believe resilience is built through proactive, tech-enabled solutions.</p>
              </div>
              <div className="px-2 xl:px-10 2xl:px-24">
                <div className="bg-color-03 my-2 p-4 py-14 rounded-xl">
                  <div className="bg-white p-4 rounded">
                    <FaQuoteLeft className="rounded w-16 h-16 text-color-01 mt-1" />
                    <p className="text-4xl font-medium p-4 pb-8">Our mission is to empower communities before, during, and after disasters strike.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}
