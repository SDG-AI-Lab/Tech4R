import { Hero } from '@/components/Hero'
import Image from "next/image";
import styles from "@/app/volunteers/volunteer.module.css"
import debugimg from "@/app/volunteers/debugimg.png"
import Carousel from "@/app/volunteers/Carousel"

//filling arrays with dummy data to test appearance
//todo: pull from actual database.
let volunteers = Array(10).fill({name:"Name",loc:"Location",src:debugimg,link:""});
let skills = Array(6).fill({name:"Skill Name",desc:"Lorem Ipsum etc. 2 lines each",ico:""});
let steps = Array(3).fill({name:"Step X",desc:"Lorem Ipsum etc. 2 lines each",ico:""});

export default function VolunteersPage() {
  return (
    <>
      <Hero title={<span className="block max-w-xl">Get Involved As A Volunteer</span>} subtitle="Join a global network supporting communities in crisis."/>
      <section className="flex-1 items-center justify-center">

        <div className="container mx-auto p-4 m-6">
          <Carousel pages={1+Math.floor(0.125 * (volunteers.length-1))} size={8} className="grid gap-4 grid-cols-2 md:grid-cols-4 place-items-center place-content-center">
            {volunteers.map((e,i) => (
              <li key={e.name} className={`rounded-lg w-full ${styles.volunteer}`}>
                <Image alt={e.name} src={e.src}/>
                <div className={styles.overlay}>
                  <div className='p-4'>
                    <h5>{e.name}{i}</h5><p>{e.loc}</p>
                    {/*LinkedIn?*/}
                  </div>
                </div>
              </li>
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
                <p>{i.desc}</p>
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
                <p>{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto p-4 m-6">
          <h2 className={styles.title}>Volunteer Testimonials (3x2 Carousel)</h2>
        </div>

        <div className="container mx-auto p-4 m-6">
          <h2 className={styles.title}>Browse Volunteer Assignments in Ongoing Projects (3x2 Carousel)</h2>
          <p>[[Button: "Become a Volunteer"]]</p>
        </div>
        
      </section>
      <div className="container mx-auto p-4 m-6">[[Link to Contact section]]</div>
    </>
  );
}
