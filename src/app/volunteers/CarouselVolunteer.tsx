import { supabase } from '@/lib/supabaseClient'
import { Carousel, CI } from "@/components/Carousel"
import Image from "next/image";
import styles from "@/app/volunteers/volunteer.module.css"
import { FaLinkedin } from "react-icons/fa6";

//dummy data for testing purposes:
//const volunteers = Array(10).fill({ name: "Name", location: "Location", image: "/images/debugimg.png", linkedin_link: "?" });
async function VolunteerCarousel() {
  const { data: volunteers, error } = await supabase.from('volunteers').select('name, location, linkedin_link, image');
  if (error) {
    console.error(error)
    return (<p>Failed to load</p>);
  }
  return (
    <Carousel pages={1 + Math.floor(0.125 * (volunteers.length - 1))} size={8} className="grid gap-4 grid-cols-2 md:grid-cols-4 place-items-center place-content-center">
      {volunteers.map((e, i) => (
        <CI key={e.name} className="group rounded-2xl w-full contain-content z-1 m-3" index={i}>
          <Image alt={e.name} src={e.image} width={302} height={335} className='object-cover w-full z-2' />
          <div className={`${styles.overlay} fixed bottom-0 w-full h-6/12 z-3 opacity-0 group-hover:opacity-100 text-white duration-200 bg-gradient-to-t from-black bg-opacity-75`}>
            <div className='fixed bottom-0 w-full p-4 z-4'>
              <h5 className='text-2xl font-bold'>{e.name}</h5><p className='text-neutral-01 font-light text-xs leading-relaxed'>{e.location}</p>
              {(e.linkedin_link == "") ? (<></>) : (<a href={e.linkedin_link}><FaLinkedin className="fixed bottom-3 right-3 text-4xl" /></a>)}
            </div>
          </div>
        </CI>
      ))}
    </Carousel>
  );
}

export default VolunteerCarousel