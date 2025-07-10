import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/Button'
import { Carousel, CI } from "@/components/Carousel"

//dummy data for testing purposes:
//const assignments = Array(8).fill({ title: "Assignment", description: "Lorem Ipsum etc etc etc.", id: "METADATA", apply_url: "" });
async function AssignmentsCarousel() {
  const { data: assignments, error } = await supabase.from('volunteer_assignments').select('id, title, description, apply_url');
  if (error) {
      console.error(error)
      return (<p>Failed to load</p>);
  }/**/
  return (
    <Carousel pages={1 + Math.floor((assignments.length - 1) / 6)} size={6} className="grid gap-4 grid-cols-1 md:grid-cols-3 place-items-center place-content-center">
      {assignments.map((e, i) => (
        <CI key={e.title} className="rounded-2xl bg-color-02 text-neutral-02 w-full p-4 m-3 contain-content" index={i}>
          <h5 className='text-white text-2xl font-bold'>{e.title}{i}</h5>
          <p>{e.description}</p>
          {/*Unused code from Figma:*/} <p>{e.id}</p> 
          <Button className="mt-4 flex-none" variant='white' href={e.apply_url}>Apply<span className="hidden md:inline">&nbsp;Now</span></Button>
        </CI>
      ))}
    </Carousel>
  );
}

export default AssignmentsCarousel