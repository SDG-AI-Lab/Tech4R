import { supabase } from '@/lib/supabaseClient'
import { Carousel } from "@/components/Carousel"
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

//dummy data for testing purposes:
//const testimony = Array(8).fill({ title: "Testimony", quote: "Lorem Ipsum etc etc etc.", name: "Person Person", vtitle: "Title", vsrc: "/images/debugimg.png" });
async function TestimonyCarousel() {
  const { data: testimonies, error } = await supabase.from('testimonials').select('name, quote, url');
  if (error) {
    console.error(error)
    return (<p>Failed to load</p>);
  }
  if (!testimonies || testimonies.length === 0) {
    return (<p className="text-center">No testimonials found.</p>);
  }

  return (
    <Carousel pages={1 + Math.floor((testimonies.length - 1) / 6)} size={6} className="columns-1 md:columns-2 lg:columns-3" >
      {testimonies.map((e) => (
        <div key={e.name} className="inline-block w-full mb-4 rounded-2xl p-4 contain-content bg-neutral-01 break-inside-avoid">
          <FaQuoteLeft className="text-color-01 text-5xl" />
          {/*Unused code from Figma design <h5 className='text-2xl font-bold'>{e.title}{i}</h5>*/}
          <p className='text-neutral-03 mt-2'>{e.quote}</p>
          <div className="flex mt-4 items-center">
            <Image
              alt={e.name}
              src={`/images/volunteers/${e.url}`}
              width={48}
              height={48}
              className='mr-4 h-12 w-12 rounded-full'
            />
            <div>
              <h6 className='text-lg font-semibold leading-relaxed text-neutral-04'>{e.name}</h6>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default TestimonyCarousel