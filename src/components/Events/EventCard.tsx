import { Event } from "@/app/events/page";
import Link from "next/link";

const EventCard = ({ event }: { event: Event }) => {
  const { name, description, date } = event;
  return (
    <article className="bg-neutral-01 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link href={`/event/${event.slug}`}>
        <div className="px-6 py-8">
          <p className="text-[16px] text-color-01 font-[400] mb-2">
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <h3 className="text-2xl font-medium text-color-01 mb-2">{name}</h3>

          <p className="text-neutral-02 text-[16px] font-light line-clamp-4">
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default EventCard;
