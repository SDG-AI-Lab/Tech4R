import { Hero } from "@/components/Hero";


export default function EventsPage() {
  return (
    <>
      <Hero title={<span className="max-w-xl block">Past and Upcoming Events</span>} />
      <div className="flex-1 flex items-center justify-center">
        <p>Events</p>
      </div>
    </>
  );
}

