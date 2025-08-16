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
    .select("id, name, description")
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
      <section className="container mx-auto flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 xl:px-20">
        <Image src="/images/debugimg.png" alt="ALT TEXT" width={552} height={550} className="rounded-2xl flex-1 mx-auto" />
        <div className="container mx-auto flex-1 p-12">
          <Title>About Tech4R</Title>
          <p className="text-neutral-03 font-light leading-relaxed">
            We believe resilience is built through proactive, tech-enabled solutions. We bridge the gap between crisis and recovery by applying data, AI, and emerging technologies.
            <br /><br />
            Our mission is to empower communities before, during, and after disasters strike.</p>
          <div className="mt-11 inline-flex">
            <Button className="m-auto flex-none" href={routes.about}>Learn More About Us</Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
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
        <section>
          <div className="relative w-full px-6 md:px-16 mx-auto grid">
            <Title>Introducing Our <span className="hidden md:inline">Skilled Team of&nbsp;</span>Volunteers</Title>
            <Button className="m-auto flex-none mb-6" href={routes.volunteers}><span className="hidden md:inline">Become a&nbsp;</span>Volunteer</Button>
            <VolunteerCarousel />
          </div>
        </section>
        <section>
          <ProjectsSolutionsSection />
        </section>

        <section>
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

        <section>
          {/* Partner With Us */}
          <div className="container mx-auto flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 xl:px-20 my-8">
            <Image src="/images/debugimg.png" alt="ALT TEXT" width={552} height={550} className="flex-1 rounded-2xl mx-auto" />
            <div className="container mx-auto flex-1 p-12 m-6">
              <Title>Partner With Us</Title>
              <p className="text-neutral-03 font-light leading-relaxed mtb-5">Tech4R offers a platform to innovate at the intersection of technology and humanitarian aid. Join us to scale impact.</p>
              <div className="mt-11 inline-flex">
                <div className="mr-4 hidden md:flex">
                  <Image alt="" src="/images/debugimg.png" width={60} height={60} className='border-background border-2 h-12 w-12 rounded-full' />
                  <Image alt="" src="/images/debugimg.png" width={60} height={60} className='border-background border-2 h-12 w-12 rounded-full ml-[-15px]' />
                  <Image alt="" src="/images/debugimg.png" width={60} height={60} className='border-background border-2 h-12 w-12 rounded-full ml-[-15px]' />
                  <Image alt="" src="/images/debugimg.png" width={60} height={60} className='border-background border-2 h-12 w-12 rounded-full ml-[-15px]' />
                </div>
                <Button className="m-auto flex-none" href={routes.partnerWithUs}>Learn More</Button>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
