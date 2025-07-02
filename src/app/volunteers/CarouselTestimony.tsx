import { supabase } from '@/lib/supabaseClient'
import { Carousel, CI } from "@/components/Carousel"
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

//dummy data for testing purposes:
const testimony = Array(8).fill({ title: "Testimony", quote: "Lorem Ipsum etc etc etc.", name: "Person Person", vtitle: "Title", vsrc: "/images/debugimg.png" });
async function TestimonyCarousel() {
  /*const { data: testimony, error } = await supabase.from('testimonials').select('name, quote');
  if (error) {
      console.error(error)
      return (<p>Failed to load</p>);
  }*/
  return (
    <Carousel pages={1 + Math.floor((testimony.length - 1) / 6)} size={6} className="grid gap-4 grid-cols-1 md:grid-cols-3 place-items-center place-content-center">
      {testimony.map((e, i) => (
        <CI key={e.name} className="rounded-2xl w-full p-4 m-3 contain-content bg-neutral-01" index={i}>
          <FaQuoteLeft className="text-color-01 text-5xl" />
          {/*Unused code from Figma design <h5 className='text-2xl font-bold'>{e.title}{i}</h5>*/}
          <p className='text-neutral-03'>{e.quote}</p>
          <div className="flex mt-4">
            {/*Unused code from Figma design <Image alt={e.vname} src={e.vsrc} width={302} height={335} className='mr-4 h-12 w-12 rounded-full' />*/}
            <div>
              <h6 className='text-lg font-semibold leading-relaxed text-neutral-04'>{e.name}</h6>
              {/*Unused code from Figma design <p className='text-neutral-02 text-xs'>{e.vtitle}</p>*/}
            </div>
          </div>
        </CI>
      ))}
    </Carousel>
  );
}

export default TestimonyCarousel