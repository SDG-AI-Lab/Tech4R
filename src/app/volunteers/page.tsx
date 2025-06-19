import { Hero } from '@/components/Hero'
import {Button } from '@/components/Button'
import Image from "next/image";
import styles from "@/app/volunteers/volunteer.module.css"
import debugimg from "@/app/volunteers/debugimg.png"
import {Carousel, CI} from "@/app/volunteers/Carousel"

//filling arrays with dummy data to test appearance
//todo: pull from actual database.
const volunteers = Array(10).fill({name:"Name",loc:"Location",src:debugimg,link:""});
const skills = Array(6).fill({name:"Skill Name",desc:"Lorem Ipsum etc. 2 lines each",ico:""});
const steps = Array(3).fill({name:"Step X",desc:"Lorem Ipsum etc. 2 lines each",ico:""});
const testimony = Array(8).fill({title:"Testimony",test:"Lorem Ipsum etc etc etc.",vname:"Person Person",vtitle:"Title",vsrc:debugimg});
const assignments = Array(8).fill({title:"Assignment",desc:"Lorem Ipsum etc etc etc.",meta:"METADATA",href:""});

export default function VolunteersPage() {
  return (
    <>
      <Hero title={<span className="block max-w-xl">Get Involved As A Volunteer</span>} subtitle="Join a global network supporting communities in crisis."/>
      <section className="flex-1">

        <div className="container mx-auto p-4 m-6">
          <Carousel pages={1+Math.floor(0.125 * (volunteers.length-1))} size={8} className="grid gap-4 grid-cols-2 md:grid-cols-4 place-items-center place-content-center">
            {volunteers.map((e,i) => (
              <CI key={e.name} className={`rounded-lg w-full ${styles.volunteer}`} index={i}>
                <Image alt={e.name} src={e.src}/>
                <div className={styles.overlay}>
                  <div className='p-4'>
                    <h5>{e.name}{i}</h5><p className='text-neutral-02'>{e.loc}</p>
                    {/*todo: LinkedIn*/}
                  </div>
                </div>
              </CI>
            ))}
          </Carousel>
        </div>

        <div id={styles.skills} className="container mx-auto p-4 m-6">
          <h2 className={styles.title}>Required Skills</h2>
          <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 place-items-center place-content-center">
            {skills.map(i => (
              <li key={i.name} className={`rounded-lg p-4 w-full ${styles.skill}`}>
                {/*<Image src="" alt="vName"/>*/}
                <h5>{i.name}</h5>
                <p className='text-neutral-02'>{i.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto p-4 m-6">
          <h2 className={styles.title}>How to Get Involved as a Volunteer</h2>
          <ul className={`grid gap-4 grid-cols-2 md:grid-cols-${steps.length} place-items-center place-content-center`}>
            {steps.map((e,i) => (
              <li key={`step${i}`} className={`rounded-lg p-4 w-full ${styles.step}`}>
                {/*<Image src="" alt="vName"/>*/}
                <h5>{e.name}</h5>
                <p className='text-neutral-03'>{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto p-4 m-6">
          <h2 className={styles.title}>Volunteer Testimonials</h2>
          <Carousel pages={1+Math.floor((testimony.length-1)/6)} size={6} className="grid gap-4 grid-cols-2 md:grid-cols-3 place-items-center place-content-center">
            {testimony.map((e,i) => (
              <CI key={e.title} className={`rounded-lg w-full p-4 ${styles.testimony}`} index={i}>
                {/*todo: Quote*/}
                <h5>{e.title}{i}</h5>
                <p className='text-neutral-03'>{e.test}</p>
                <div className="flex mt-4 origin">
                  <Image alt={e.vname} src={e.vsrc} height={48} className='mr-4'/>
                  <div>
                    <h6>{e.vname}</h6>
                    <p className='text-neutral-03'>{e.vtitle}</p>
                  </div>
                </div>
              </CI>
            ))}
          </Carousel>
        </div>

        <div className="container grid items-center mx-auto p-4 m-6">
          <h2 className={styles.title}>Browse Volunteer Assignments in Ongoing Projects</h2>
          <Button className="m-auto flex-none" href=""><span className="hidden md:inline">Become a&nbsp;</span>Volunteer</Button>
          <Carousel pages={1+Math.floor((assignments.length-1)/6)} size={6} className="grid gap-4 grid-cols-2 md:grid-cols-3 place-items-center place-content-center">
            {assignments.map((e,i) => (
              <CI key={e.title} className={`rounded-lg bg-color-02 text-neutral-02 w-full p-4 ${styles.assignment}`} index={i}>
                <h5>{e.title}{i}</h5>
                <p>{e.desc}</p>
                <p>{e.meta}</p>
                <Button className="mt-4 flex-none" variant='white' href={e.href}>Apply<span className="hidden md:inline">&nbsp;Now</span></Button>
              </CI>
            ))}
          </Carousel>
        </div>
        
      </section>
      <div className="container mx-auto p-4 m-6">[[Link to Contact section]]</div>
    </>
  );
}
