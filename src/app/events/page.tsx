import { supabase } from '@/lib/supabaseClient'
import { Hero } from "@/components/Hero";
import Link from 'next/link';
import CTAImages from "@/components/CTAImages";
import { FaLocationDot, FaCircleCheck } from "react-icons/fa6";

type Speaker = {
  name: string;
  bio: string;
};

type EventSpeaker = {
  speakers: Speaker | Speaker[];
};

type EventCategory = {
  name: string;
};

type Event = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  date: string;
  location: string;
  event_categories?: EventCategory;
  event_speakers?: EventSpeaker[];
};

export default async function EventsPage() {
  const { data: events, error } = await supabase
    .from('events')
    .select(`
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
    `)
    .order('date', { ascending: false }) as { data: Event[] | null, error: Error | null };

  if (error) {
    console.error(error);
    // return <p>Failed to load events.</p>
  }

  return (
    <>
      <Hero title={<span className="max-w-xl block">Past and Upcoming Events</span>} />
      <div className="flex-1 flex items-center justify-center">
        <p>Events</p>
      </div>
      <ul>
        {events?.map(event => (
          <li key={event.id} className="mb-6 border-b pb-4">
            <h2 className="text-xl font-bold">
              <Link href={`/event/${event.slug}`} className="hover:underline">
                {event.name}
              </Link>
            </h2>
            <p className="text-gray-600">{event.description}</p>
            <p>{event.date} — {event.location}</p>
            <p className="italic text-sm">Type: {event.event_categories?.name}</p>
            <ul className="list-disc list-inside mt-2">
              {event.event_speakers?.map(({ speakers }, idx) =>
                Array.isArray(speakers)
                  ? speakers.map((speaker, sIdx) => (
                    <li key={`${idx}-${sIdx}`}>
                      <strong>{speaker.name}:</strong> {speaker.bio}
                    </li>
                  ))
                  : speakers && typeof speakers === 'object' ? (
                    <li key={idx}>
                      <strong>{(speakers as Speaker).name}:</strong> {(speakers as Speaker).bio}
                    </li>
                  ) : null
              )}
            </ul>
          </li>
        ))}
      </ul>

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

