"use client";

import { EventCategory } from "@/app/page";
import EventCard from "./EventCard";
import { useRouter } from "next/navigation";

interface EventsSectionProps {
  events: EventCategory[];
}

const EventsSection = ({ events }: EventsSectionProps) => {
  const router = useRouter();
  const handleSeeAll = (eventId: string) => {
    router.push(`/events?categoryId=${eventId}`);
  };

  if (!events || events.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-14 text-xl">
        <p className="text-neutral-02">No events available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center my-8 sm:mx-6">
      <div className="w-full rounded-[20px] bg-neutral-01 px-6 md:px-16 py-16">
        <h2 className="text-3xl sm:text-5xl font-[600] text-center text-neutral-04 mb-12">
          Events
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.name}
              description={event.description}
              onSeeAll={() => handleSeeAll(event.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
