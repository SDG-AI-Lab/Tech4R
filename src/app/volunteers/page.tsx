import { Hero } from '@/components/Hero'
import { Button } from '@/components/Button'
import Title from '@/components/Title'
import VolunteerCarousel from './CarouselVolunteer'
import TestimonyCarousel from './CarouselTestimony'
import AssignmentsCarousel from './CarouselAssignments'
import { FaScrewdriverWrench, FaListOl } from "react-icons/fa6";
import { generateVolunteersMetadata } from '@/lib/seo';

export const metadata = generateVolunteersMetadata();

//filling arrays with dummy data to test appearance
const skills = [
  {name:"Skill Name",desc:"Lorem Ipsum etc. 2 lines each",ico:FaScrewdriverWrench},
  {name:"Skill Name",desc:"Lorem Ipsum etc. 2 lines each",ico:FaScrewdriverWrench},
  {name:"Skill Name",desc:"Lorem Ipsum etc. 2 lines each",ico:FaScrewdriverWrench},
  {name:"Skill Name",desc:"Lorem Ipsum etc. 2 lines each",ico:FaScrewdriverWrench},
  {name:"Skill Name",desc:"Lorem Ipsum etc. 2 lines each",ico:FaScrewdriverWrench},
  {name:"Skill Name",desc:"Lorem Ipsum etc. 2 lines each",ico:FaScrewdriverWrench}
];
const steps = [
  {name:"Step X",desc:"Lorem Ipsum etc. 2 lines each",ico:FaListOl},
  {name:"Step X",desc:"Lorem Ipsum etc. 2 lines each",ico:FaListOl},
  {name:"Step X",desc:"Lorem Ipsum etc. 2 lines each",ico:FaListOl}
];

export default function VolunteersPage() {
  return (
    <>
      <Hero title={<span className="block max-w-xl">Get Involved As A Volunteer</span>} subtitle="Join a global network supporting communities in crisis." />
      <section className="flex-1">

        <div className="container mx-auto p-4 m-6">
          <VolunteerCarousel />
        </div>
        
        <div className="mx-6 p-2 sm:p-16 m-6 bg-neutral-01 rounded-[20px]">
          <Title>Required Skills</Title>
          <p className='mx-auto my-4 w-full sm:w-1/3 text-center text-neutral-03 font-light text-lg leading-relaxed'>From data science to digital storytelling, we welcome volunteers with diverse tech and non-tech backgrounds.</p>
          <ul className="grid gap-4 grid-cols-1 md:grid-cols-3 place-items-center place-content-center">
            {skills.map(e => (
              <li key={e.name} className="rounded-2xl p-11 w-full sm:m-3 contain-content bg-background">
                {(typeof e.ico == 'string')?(<></>):(<e.ico className = "text-4xl text-color-01"/>)}
                <h5 className='text-2xl font-medium mt-2.5'>{e.name}</h5>
                <p className='text-neutral-02 font-light leading-relaxed'>{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto p-4 m-6">
          <Title>How to Get Involved as a Volunteer</Title>
          <ul className={`grid gap-4 grid-cols-1 md:grid-cols-${steps.length} place-items-center place-content-center`}>
            {steps.map((e,i) => (
              <li key={`step${i}`} className="rounded-2xl p-4 w-full m-3 contain-content text-center bg-background border-1 border-neutral-500 border-opacity-20">
                {(typeof e.ico == 'string')?(<></>):(<e.ico className="text-4xl m-auto text-color-01"/>)}
                <h5 className='text-2xl font-bold mt-6'>{e.name}</h5>
                <p className='text-neutral-03'>{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto p-4 m-6">
          <Title>Volunteer Testimonials</Title>
          <TestimonyCarousel />
        </div>

        <div className="container grid items-center mx-auto p-4 m-6">
          <Title>Browse Volunteer Assignments in Ongoing Projects</Title>
          <Button className="mx-auto mb-6 flex-none" href=""><span className="hidden md:inline">Become a&nbsp;</span>Volunteer</Button>
          <AssignmentsCarousel />
        </div>

      </section>
    </>
  );
}
