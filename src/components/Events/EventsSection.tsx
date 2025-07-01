"use client";

import { Event, EventCategory } from "@/app/events/page";
import { useState } from "react";
import EventFilters from "./EventFilters";
import EventCard from "./EventCard";

interface EventsSectionProps {
  title: string;
  events: Event[];
  eventCategories: EventCategory[];
  sectionId?: string;
}

const EventsSection = ({
  title,
  events,
  eventCategories,
  sectionId,
}: EventsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState({
    name: "All Events",
    description:
      "Explore our complete range of technology-focused events designed to build resilience and create innovative solutions for global challenges.",
  });

  const filteredEvents = events.filter((event) => {
    if (activeFilter.name === "All Events") return true;
    return (
      event.event_categories?.name.toLowerCase() ===
      activeFilter.name.toLowerCase()
    );
  });
  return (
    <section id={sectionId} aria-labelledby={`${sectionId}-heading`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id={`${sectionId}-heading`}
          className="text-4xl sm:text-5xl font-bold text-neutral-04 mb-8"
        >
          {title}
        </h2>

        <EventFilters
          options={eventCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-neutral-04 mb-4">
            {activeFilter?.name}
          </h2>
          <p className="text-neutral-04 text-[16px] font-light">
            {activeFilter?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id || index} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No {activeFilter.name.toLowerCase()} found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
