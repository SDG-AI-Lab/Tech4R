import HeroSection from "@/components/HomePage/HeroSection";
import PillarTiles from "@/components/PillarTiles";
import TrackRecord from "@/app/about/TrackRecord";
import CTAImages from "@/components/CTAImages";
import { routes } from '@/lib/routes';
import { FaCircleCheck } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <section className="sm:mx-6">
        <HeroSection />      
      </section>

      <div className="flex flex-col items-center justify-center">  
        
        <section>
          <PillarTiles />
        </section>

        <section>
          <TrackRecord />
        </section>

        <section>
          <CTAImages 
            title="What We Do"
            text="Tech4R operates across four strategic pillars that guide our mission to deliver impactful digital solutions for disaster resilience."
            btnHref={routes.pillars}
            btnLabel="Explore Our Pillars of Action"
            content={[
              { icon: <FaCircleCheck />, text: "Rescue" },
              { icon: <FaCircleCheck />, text: "Recovery" },
              { icon: <FaCircleCheck />, text: "Response" },
              { icon: <FaCircleCheck />, text: "Resilience" },
            ]}
            // TODO: Set img1Src, img2Src, img3Src
           />
        </section>

      </div>
    </>
  );
}
