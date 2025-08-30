import Image from "next/image";
import HeroSection from "@/components/HomePage/HeroSection";
import ProjectsSolutionsSection from "@/components/HomePage/ProjectsSolutionsSection";
import PillarTiles from "@/components/PillarTiles";
import TrackRecord from "@/app/about/TrackRecord";
import CTAImages from "@/components/CTAImages";
import { routes } from "@/lib/routes";
import { FaCircleCheck } from "react-icons/fa6";
import EventsSection from "@/components/HomePage/EventsSection";
import { supabase } from "@/lib/supabaseClient";
import { EventCategory } from "./events/page";
import Title from "@/components/Title";
import { Button } from "@/components/Button";
import VolunteerCarousel from "@/app/volunteers/CarouselVolunteer";


export default async function Home() {
  const { data: eventCategories, error: eventCategoriesError } = (await supabase
    .from("event_categories")
    .select("id, name, description, image")
    .order("name", { ascending: true })) as {
      data: EventCategory[] | null;
      error: Error | null;
    };

  return (
    <div className="flex flex-col gap-30">
      <section className="sm:mx-6">
        <HeroSection />
      </section>

      {/* Pillars */}
      <section className="flex items-center justify-center">
        <PillarTiles />
      </section>
      {/* About */}
      <section className="container mx-auto flex flex-col lg:flex-row 2xl:px-20 gap-16">
        <div className="flex-1">
          <Image
            src="/images/about-tech4r.jpg"
            alt="Tech4R global collaboration"
            width={1539}
            height={863}
            sizes="(min-width: 1024px) 552px, 100vw"
            className="rounded-2xl mx-auto w-full h-auto"
          />
        </div>
        <div className="container mx-auto flex flex-col h-full flex-1 justify-center xl:pt-8 2xl:pt-12">
          <h2 className="font-semibold text-5xl leading-snug tracking-tight w-full mx-auto mb-6">About Tech4R</h2>
          <p className="text-neutral-03 font-light leading-relaxed">
            We believe resilience is built through proactive, tech-enabled solutions. We bridge the gap between crisis and recovery by applying data, AI, and emerging technologies.
          </p>
          <p className="text-neutral-03 font-light leading-relaxed mt-4">
            Our mission is to empower communities before, during, and after disasters strike.
          </p>
          <div className="mt-12">
            <Button className="flex-none" href={routes.about}>Learn More About Us</Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <TrackRecord />
        
      </section>
        <section className="container mx-auto">
          <CTAImages
            title="What We Do"
            text="Tech4R operates across four strategic pillars that guide our mission to deliver impactful digital solutions for disaster resilience."
            btnHref={routes.pillars}
            btnLabel="Explore Our Pillars of Action"
            content={[
              { icon: <CircleCheckIcon />, text: "Rescue" },
              { icon: <CircleCheckIcon />, text: "Recovery" },
              { icon: <CircleCheckIcon />, text: "Response" },
              { icon: <CircleCheckIcon />, text: "Resilience" },
            ]}
          />
        </section>
        <section className="container mx-auto">
          <div className="relative w-full px-6 md:px-16 mx-auto grid">
            <Title>Introducing Our <span className="hidden md:inline">Skilled Team of&nbsp;</span>Volunteers</Title>
            <Button className="m-auto flex-none mb-6" href={routes.volunteers}><span className="hidden md:inline">Become a&nbsp;</span>Volunteer</Button>
            <VolunteerCarousel />
          </div>
        </section>
        <section className="container mx-auto">
          <ProjectsSolutionsSection />
        </section>

        <section className="container mx-auto">
          {eventCategoriesError ? (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-red-600 py-14">
              Failed to load event categories.
              <br />
              {eventCategoriesError?.message || "Unknown error"}
            </div>
          ) : (
            <EventsSection events={eventCategories || []} />
          )}
        </section>


        <section className="container mx-auto flex flex-col lg:flex-row 2xl:px-20 gap-16">
        <div className="flex-1">
          <Image
            src="/images/partnership.jpg"
            alt="Tech4R Partnership"
            width={1539}
            height={863}
            sizes="(min-width: 1024px) 552px, 100vw"
            className="rounded-2xl mx-auto w-full h-auto"
          />
        </div>
        <div className="container mx-auto flex flex-col h-full flex-1 justify-center xl:pt-12 2xl:pt-18">
          <h2 className="font-semibold text-5xl leading-snug tracking-tight w-full mx-auto mb-6">Partner With Us</h2>
          <p className="text-neutral-03 font-light leading-relaxed">
          Tech4R offers a platform to innovate at the intersection of technology and humanitarian aid. Join us to scale impact.
          </p>
          <div className="mt-8 flex flex-col">
            <div className="mr-4 hidden md:flex flex-wrap items-center gap-6">
              <Image alt="UN Volunteers" src="/images/partner-unv.png" height={39} width={218} className='h-8 w-auto object-contain grayscale hover:grayscale-0 transition' />
              <Image alt="HP LIFE" src="/images/partner-hp-life.png" width={186} height={99} className='h-8 w-auto object-contain grayscale hover:grayscale-0 transition' />
              <Image alt="Bridge to Türkiye Fund" src="/images/partner-btf.png" width={250} height={78} className='h-8 w-auto object-contain grayscale hover:grayscale-0 transition' />
              <Image alt="ATÖLYE" src="/images/partner-atölye.png" width={250} height={82} className='h-8 w-auto object-contain grayscale hover:grayscale-0 transition' />
              <Image alt="EKA" src="/images/partner-eka.png" width={250} height={143} className='h-8 w-auto object-contain grayscale hover:grayscale-0 transition' />
              <Image alt="LJS" src="/images/partner-ljs.png" width={229} height={726} className='h-8 w-auto object-contain grayscale hover:grayscale-0 transition' />
            </div>
            <Button className="flex-none mt-12 self-start" href={routes.partnerWithUs}>Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  );
}


// FaCircleCheck on white background
const CircleCheckIcon = () => <div className="rounded-full bg-white"><FaCircleCheck /></div>