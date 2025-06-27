import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/Button'
import { Carousel, CI } from "@/components/Carousel"
import Image from "next/image";
import styles from "@/app/volunteers/volunteer.module.css"
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa6";

//dummy data for testing purposes:
//const volunteers = Array(10).fill({ name: "Name", location: "Location", image: "/images/debugimg.png", linkedin_link: "?" });
async function VolunteerCarousel() {
  const { data: volunteers, error } = await supabase.from('volunteers').select('name, location, linkedin_link, image');
  if (error) {
      console.error(error)
      return (<p>Failed to load</p>);
  }/**/
  return (
    <Carousel pages={1 + Math.floor(0.125 * (volunteers.length - 1))} size={8} className="grid gap-4 grid-cols-2 md:grid-cols-4 place-items-center place-content-center">
      {volunteers.map((e, i) => (
        <CI key={e.name} className="group rounded-2xl w-full contain-content z-1 m-3" index={i}>
          <Image alt={e.name} src={e.image} width={302} height={335} className='object-cover w-full z-2' />
          <div className={`${styles.overlay} fixed bottom-0 w-full h-6/12 z-3 opacity-0 group-hover:opacity-100 text-white duration-200 bg-gradient-to-t from-black bg-opacity-75`}>
            <div className='fixed bottom-0 w-full p-4 z-4'>
              <h5 className='text-2xl font-bold'>{e.name}{i}</h5><p className='text-neutral-01 font-light text-xs leading-relaxed'>{e.location}</p>
              {(e.linkedin_link == "") ? (<></>) : (<a href={e.linkedin_link}><FaLinkedin className="fixed bottom-3 right-3 text-4xl" /></a>)}
            </div>
          </div>
        </CI>
      ))}
    </Carousel>
  );
}

//dummy data for testing purposes:
//const testimony = Array(8).fill({ title: "Testimony", quote: "Lorem Ipsum etc etc etc.", name: "Person Person", vtitle: "Title", vsrc: "/images/debugimg.png" });
async function TestimonyCarousel() {
  const { data: testimony, error } = await supabase.from('testimonials').select('name, quote');
  if (error) {
      console.error(error)
      return (<p>Failed to load</p>);
  }/**/
  return (
    <Carousel pages={1 + Math.floor((testimony.length - 1) / 6)} size={6} className="grid gap-4 grid-cols-2 md:grid-cols-3 place-items-center place-content-center">
      {testimony.map((e, i) => (
        <CI key={e.title} className="rounded-2xl w-full p-4 m-3 contain-content bg-neutral-01" index={i}>
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

//dummy data for testing purposes:
//const assignments = Array(8).fill({ title: "Assignment", description: "Lorem Ipsum etc etc etc.", meta: "METADATA", apply_url: "" });
async function AssignmentsCarousel() {
  const { data: assignments, error } = await supabase.from('volunteer_assignments').select('title, description, apply_url');
  if (error) {
      console.error(error)
      return (<p>Failed to load</p>);
  }/**/
  return (
    <Carousel pages={1 + Math.floor((assignments.length - 1) / 6)} size={6} className="grid gap-4 grid-cols-2 md:grid-cols-3 place-items-center place-content-center">
      {assignments.map((e, i) => (
        <CI key={e.title} className="rounded-2xl bg-color-02 text-neutral-02 w-full p-4 m-3 contain-content" index={i}>
          <h5 className='text-white text-2xl font-bold'>{e.title}{i}</h5>
          <p>{e.description}</p>
          {/*Unused code from Figma: <p>{e.meta}</p> */}
          <Button className="mt-4 flex-none" variant='white' href={e.apply_url}>Apply<span className="hidden md:inline">&nbsp;Now</span></Button>
        </CI>
      ))}
    </Carousel>
  );
}

export { VolunteerCarousel, TestimonyCarousel, AssignmentsCarousel }