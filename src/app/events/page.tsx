import { supabase } from "@/lib/supabaseClient";
import { Hero } from "@/components/Hero";
import CTAImages from "@/components/CTAImages";
import { FaLocationDot, FaCircleCheck } from "react-icons/fa6";
import EventsSection from "@/components/Events/EventsSection";

export type Speaker = {
  name: string;
  bio: string;
};

export type EventSpeaker = {
  speakers: Speaker | Speaker[];
};

export type EventCategory = {
  name: string;
  description: string;
};

export type Event = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  date: string;
  location: string;
  event_categories?: EventCategory;
  event_speakers?: EventSpeaker[];
  photos?: string[];
};

export default async function EventsPage() {
  const { data: events, error } = (await supabase
    .from("events")
    .select(
      `
      id,
      name,
      description,
      slug,
      date,
      location,
      event_categories ( name ),
      event_speakers (
        speakers (
          name,
          bio
        )
      )
    `
    )
    .order("date", { ascending: false })) as {
    data: Event[] | null;
    error: Error | null;
  };

  const { data: eventCategories, error: eventCategoriesError } = (await supabase
    .from("event_categories")
    .select("name, description")
    .order("name", { ascending: true })) as {
    data: EventCategory[] | null;
    error: Error | null;
  };

  const upcomingEvents =
    events?.filter((event) => {
      const eventDate = new Date(event.date);
      const today = new Date();
      return eventDate >= today;
    }) ?? [];

  const pastEvents =
    events?.filter((event) => {
      const eventDate = new Date(event.date);
      const today = new Date();
      return eventDate < today;
    }) ?? [];

  if (error || eventCategoriesError) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-red-600 py-14">
        Failed to load events or event categories.
        <br />
        {error?.message || eventCategoriesError?.message || "Unknown error"}
      </div>
    );
  }

  return (
    <>
      <Hero
        title={
          <span className="max-w-[538px] block">Past and Upcoming Events</span>
        }
      />
      <section className="w-full py-30 space-y-30">
        {/* Upcoming Events Section */}
        <EventsSection
          title="Upcoming Events"
          events={upcomingEvents}
          eventCategories={eventCategories ?? []}
          sectionId="upcoming-events"
        />

        {/* Past Events Section */}
        <EventsSection
          title="Past Events"
          events={pastEvents}
          eventCategories={eventCategories ?? []}
          sectionId="past-events"
        />
      </section>

      <section>
        <CTAImages
          title="What's Next?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          content={[
            { icon: <FaLocationDot />, text: "Location" },
            { icon: <FaCircleCheck />, text: "Lorem ipsum" },
            { icon: <FaCircleCheck />, text: "Lorem ipsum" },
            { icon: <FaCircleCheck />, text: "Lorem ipsum" },
          ]}
          img1Src="/images/work-desk.jpg"
          img2Src="/images/logo-undp.png"
          img3Src="/images/phone.jpg"
          // TODO: Set text, content img1Src, img2Src, img3Src
        />
      </section>
    </>
  );
}
