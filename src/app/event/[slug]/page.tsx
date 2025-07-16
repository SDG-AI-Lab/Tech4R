import { supabase } from "@/lib/supabaseClient";
import { Hero } from "@/components/Hero";
import { Event, EventSpeaker } from "@/app/events/page";
import Image from "next/image";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: event, error } = (await supabase
    .from("events")
    .select(
      `
      id,
      name,
      description,
      slug,
      date,
      location,
      photos,
      event_categories ( name ),
      event_speakers (
        speakers (
          name,
          bio
        )
      )
    `
    )
    .eq("slug", slug)
    .single()) as { data: Event | null; error: Error | null };

  if (error) {
    console.error(error);
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-red-600 py-14">
        Failed to load event
        <br />
        {error?.message || "Error fetching event"}
      </div>
    );
  }

  if (!event) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-color-01 py-14">
        Event Not Found
      </div>
    );
  }

  return (
    <>
      <Hero
        title={event.name}
        buttonText="Back to all Events"
        buttonUrl={"/events"}
      />
      <section className="w-full py-30 space-y-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20 md:flex-row">
            <div className="flex flex-col gap-8 flex-2/4">
              <h3 className="text-neutral-04 text-2xl sm:text-[32px] font-medium leading-[140%] tracking-[-1px]">
                {event.name}
              </h3>
              <p className="text-neutral-03 font-light text-sm sm:text-base leading-[170%] tracking-[0px]">
                {event.description}
              </p>
            </div>
            <div className="bg-color-02 rounded-2xl text-white p-8 flex flex-col gap-8 flex-[1.5]">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl sm:text-[32px] font-medium leading-[140%] tracking-[-1px]">
                  Location
                </h3>
                <p className="text-neutral-01 font-normal text-sm sm:text-base">
                  {event.location}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl sm:text-[32px] font-medium leading-[140%] tracking-[-1px]">
                  Date
                </h3>
                <p className="text-neutral-01 font-normal text-sm sm:text-base">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl sm:text-[32px] font-medium leading-[140%] tracking-[-1px]">
                  Speakers
                </h3>
                {event.event_speakers?.map((speaker: EventSpeaker, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    {Array.isArray(speaker.speakers) ? (
                      speaker.speakers.map((sp, idx) => (
                        <div key={idx}>
                          <p className="text-white font-semibold text-sm sm:text-base">
                            {sp.name}
                          </p>
                          <p className="text-neutral-01 font-normal text-sm sm:text-base">
                            {sp.bio || ""}
                          </p>
                        </div>
                      ))
                    ) : (
                      <>
                        <p className="text-white font-semibold text-sm sm:text-base">
                          {speaker.speakers?.name}
                        </p>
                        <p className="text-neutral-01 font-normal text-sm sm:text-base">
                          {speaker.speakers?.bio || ""}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pb-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col gap-8">
            <h3 className="text-neutral-04 text-3xl sm:text-5xl font-semibold leading-[130%] tracking-[-1.5px]">
              Event photos and highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((value) => (
                <div
                  key={value}
                  className="relative w-full rounded-2xl overflow-hidden"
                >
                  <Image
                    src={`/images/event-photo${value}.${
                      value === 5 ? "png" : "jpg"
                    }`}
                    alt="event photo"
                    width={410}
                    height={504}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
