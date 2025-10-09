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
    <Carousel
      pages={1 + Math.floor((assignments.length - 1) / 6)}
      size={6}
      // make each carousel page a masonry container using CSS columns
      className={`columns-1 md:columns-2 lg:columns-3`}
    >
      {assignments.map((e) => (
        <CI
          key={e.title}
          // ensure each item behaves as a masonry card and doesn't break between columns
          className={`inline-block w-full mb-4 rounded-2xl bg-color-02 text-neutral-02 p-4 m-3 contain-content break-inside-avoid`}
        >
          <h5 className='text-white text-[2rem] font-medium mb-3'>{e.title}</h5>
          <p className="mb-4 text-[#F6F5F5] font-light">{e.description}</p>
          <Button className="my-6 flex-none" variant='white' href={e.apply_url}>Apply<span className="hidden md:inline">&nbsp;Now</span></Button>
        </CI>
      ))}
    </Carousel>
  );
}

export default AssignmentsCarousel