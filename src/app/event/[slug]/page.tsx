import { supabase } from "@/lib/supabaseClient";
import { Hero } from "@/components/Hero";

type Event = {
    id: number;
    name: string;
    slug: string;
    description?: string;
    date: string;
    location: string;
};

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const { data: event, error } = await supabase
        .from('events')
        .select('*')
        .eq('slug', slug)
        .single() as { data: Event | null, error: Error | null };

    if (error) {
        console.error(error);
        return <p>Failed to load event.</p>;
    }

    if (!event) {
        return <p>Event not found.</p>;
    }

    return (
        <>
            <Hero title={"Past and Upcoming Events"} subtitle={''} />
            <div className="p-4">
                <h2 className="text-xl font-bold">{event.name}</h2>
                <p>{event.description}</p>
                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>Location: {event.location}</p>
            </div>
        </>
    );
}