import { Hero } from '@/components/Hero'
import { Button } from '@/components/Button'
import Title from '@/components/Title'
import VolunteerCarousel from './CarouselVolunteer'
import TestimonyCarousel from './CarouselTestimony'
import AssignmentsCarousel from './CarouselAssignments'
import { FaScrewdriverWrench, FaListOl, FaRegHandPointRight, FaClock, FaLanguage, FaHandshake } from "react-icons/fa6";
import { generateVolunteersMetadata } from '@/lib/seo';

export const metadata = generateVolunteersMetadata();

//filling arrays with dummy data to test appearance
const skills = [
  {name:"Time Commitment",desc:`5-7 hours/week.\nFlexible, remote.`,ico:FaClock},
  {name:"Team Player",desc:"Team player in a multicultural environment.",ico:FaHandshake},
  {name:"Good English",desc:"Other UN languages are a plus.",ico:FaLanguage},
  {name:"Professional",desc:"Reliable, professional, and deadline-oriented.",ico:FaHandshake},
  {name:"Passionate",desc:"Passion for technology & disaster resilience.",ico:FaScrewdriverWrench},
  {name:"For Data Collectors",desc:"Experience with Excel/Sheets, research, attention to detail.",ico:FaScrewdriverWrench},
  {name:"For Web Developers",desc:"Experience with HTML, CSS, JavaScript, UX/UI, Figma",ico:FaScrewdriverWrench},
  {name:"For GIS volunteers",desc:"Experience with QGIS/ArcGIS, disaster mapping skills",ico:FaScrewdriverWrench},
  {name:"For Communicators",desc:"Experience at writing, editing, translation, graphic design",ico:FaScrewdriverWrench},
  {name:"For Automation",desc:"Experience with low-code/no-code tools, APIs, workflow automation",ico:FaScrewdriverWrench}
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

        <div className="container mx-auto p-4 m-6 text-center">
          <Title>How to Get Involved as a Volunteer</Title>
          <p>All Tech4R volunteer opportunities are hosted on the <b>UNV Unified Volunteering Platform (UVP)</b>.</p>
          <ul className={`grid gap-4 grid-cols-1 md:grid-cols-4 place-items-center place-content-center`}>
              <li key={1} className="rounded-2xl p-4 w-full h-full m-3 contain-content text-center bg-background border-1 border-neutral-500 border-opacity-20">
                <FaListOl className="text-4xl m-auto text-color-01"/>
                <h5 className='text-2xl font-bold mt-6'>Step 1<br />Sign Up/Log In</h5>
                <p className='text-neutral-03 text-left'><ul className='p-2 list-disc'>
                  <li>Go to <a href='app.unv.org'>app.unv.org</a></li>
                  <li>Create a free account or log in if you already have one</li>
                  <li>Fill in your <b>profile details</b> (skills, education, experience) - this helps us match you with assignments</li>
                </ul></p>
              </li>
              <li key={2} className="rounded-2xl p-4 w-full h-full m-3 contain-content text-center bg-background border-1 border-neutral-500 border-opacity-20">
                <FaListOl className="text-4xl m-auto text-color-01"/>
                <h5 className='text-2xl font-bold mt-6'>Step 2<br />Find Tech4R opportunities</h5>
                <p className='text-neutral-03 text-left'><ul className='p-2 list-disc'>
                  <li>On your dashboard, select “<b>Find Assignments</b>”</li>
                  <li>Use the filter “<b>Type of Assignment → Online</b>”</li>
                  <li>Search for “<b>Tech4R</b>” in the keywords or scroll to see available postings</li>
                </ul></p>
              </li>
              <li key={3} className="rounded-2xl p-4 w-full h-full m-3 contain-content text-center bg-background border-1 border-neutral-500 border-opacity-20">
                <FaListOl className="text-4xl m-auto text-color-01"/>
                <h5 className='text-2xl font-bold mt-6'>Step 3<br />Apply</h5>
                <p className='text-neutral-03 text-left'><ul className='p-2 list-disc'>
                  <li>Click on the assignment you’re interested in</li>
                  <li>Read the description and requirements</li>
                  <li>Hit “<b>Apply</b>” and submit a short motivation statement (why you’d like to join)</li>
                </ul></p>
              </li>
              <li key={4} className="rounded-2xl p-4 w-full h-full m-3 contain-content text-center bg-background border-1 border-neutral-500 border-opacity-20">
                <FaListOl className="text-4xl m-auto text-color-01"/>
                <h5 className='text-2xl font-bold mt-6'>Step 4<br />Selection & Start</h5>
                <p className='text-neutral-03 text-left'><ul className='p-2 list-disc'>
                  <li>If selected, you’ll receive an email from UNV</li>
                  <li>You’ll then collaborate with the Tech4R team entirely online</li>
                  <li>At the end of your assignment, you’ll get an official <b>UNV Certificate of Appreciation</b></li>
                </ul></p>
              </li>
          </ul>
          <p><FaRegHandPointRight className='inline'/> <b>Tip:</b> Assignments are competitive! Fill in your profile carefully and highlight relevant skills to increase your chances.</p>
        </div>

        <div className="container mx-auto p-4 m-6">
          <Title>Volunteer Testimonials</Title>
          <TestimonyCarousel />
        </div>

        <div className="container grid items-center mx-auto p-4 m-6">
          <Title>Browse Volunteer Assignments in Ongoing Projects</Title>
          <Button className="mx-auto mb-6 flex-none" href="https://www.unv.org/"><span className="hidden md:inline">Become a&nbsp;</span>Volunteer</Button>
          <AssignmentsCarousel />
        </div>

      </section>
    </>
  );
}
