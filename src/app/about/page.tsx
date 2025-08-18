import { Hero } from "@/components/Hero";
import PillarTiles from "@/components/PillarTiles";
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa6";
import { AboutTimeline } from "./AboutTimeline";
import { SectionContainer } from "@/components/SectionContainer";
import PartnerSection from './PartnerSection';
import { generateAboutMetadata } from "@/lib/seo";
import TrackRecord from "./TrackRecord";

export const metadata = generateAboutMetadata();

export default function AboutPage() {

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
          className="w-full rounded-2xl object-cover"
          priority
        />
      </Hero>

      <div className="flex flex-col items-center justify-center gap-30">
        <SectionContainer>
          <div className="container px-4 md:px-8 lg:px-16 xl:px-20">
            <div className="lg:grid lg:grid-cols-2 gap-0 items-stretch">
              <div className="hidden lg:block relative h-full overflow-hidden rounded-2xl">
                <Image src="/images/work-desk.jpg" alt="Work desk" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>

              <div className="flex flex-col gap-8 h-full justify-center lg:p-16">
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-neutral-04 tracking-[-1.5px]">Our Mission</h2>
                  <p className="text-neutral-03 text-md font-light leading-relaxed">
                    We believe resilience is built through proactive, tech-enabled solutions. We bridge the gap between crisis and recovery by applying data, AI, and emerging technologies. Our mission is to empower communities before, during, and after disasters strike.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-neutral-04 tracking-[-1.5px]">Our Roots</h2>
                  <p className="text-neutral-03 font-light leading-relaxed">
                    Tech4R is hosted by the UNDP ICPSD and supported by partners like the SDG AI Lab, among others committed to sustainable development and humanitarian innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer>
          <PillarTiles />
        </SectionContainer>
        
        <SectionContainer>
          <PartnerSection />
        </SectionContainer>
        
        <SectionContainer>
          <TrackRecord />
        </SectionContainer>

        <SectionContainer>
          <AboutTimeline />
        </SectionContainer>

        <SectionContainer>
          <div className="container">
            <div className="flex flex-row sm:flex-col flex-wrap lg:items-center lg:grid lg:grid-cols-2 2xl:px-24 gap-6">
              <div className="px-8 lg:px-0 mb-4 lg:mb-0">
                <h2 className="text-neutral-04 text-5xl tracking-[-1.5px] lg:text-7xl font-semibold mb-4 lg:max-w-md lg:tracking-[-2.5px]">Why Tech4R Exists</h2>
                <p className="text-neutral-03 font-light lg:max-w-92 leading-relaxed">We believe resilience is built through proactive, tech-enabled solutions.</p>
              </div>
              <div className="xl:px-16">
                <div className="bg-color-06 px-9 py-24 sm:rounded-xl">
                  <div className="bg-white px-8 py-16 rounded-xl">
                    <FaQuoteLeft className="w-16 h-16 text-color-01" />
                    <p className="text-neutral-04 text-4xl tracking-[-1.5px] font-medium p-4 pb-8">Our mission is to empower communities before, during, and after disasters strike.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
