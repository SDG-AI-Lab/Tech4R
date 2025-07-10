import HeroSection from "@/components/HomePage/HeroSection";
import ProjectsSolutionsSection from "@/components/HomePage/ProjectsSolutionsSection";
import PillarTiles from "@/components/PillarTiles";
import TrackRecord from "@/app/about/TrackRecord";
import CTAImages from "@/components/CTAImages";
import { routes } from "@/lib/routes";
import { FaCircleCheck } from "react-icons/fa6";
import EventsSection from "@/components/HomePage/EventsSection";
import { supabase } from "@/lib/supabaseClient";

export type EventCategory = {
  id: string;
  name: string;
  description: string;
};

export default async function Home() {
  const { data: eventCategories, error: eventCategoriesError } = (await supabase
    .from("event_categories")
    .select("id, name, description")
    .order("name", { ascending: true })) as {
    data: EventCategory[] | null;
    error: Error | null;
  };

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
      </div>
    </>
  );
}
