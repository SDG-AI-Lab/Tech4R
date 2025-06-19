import { Hero } from "@/components/Hero";
import { Button } from '@/components/Button'
import Title from '@/components/Title'
import Image from "next/image";
import debugimg from "@/app/volunteers/debugimg.png"

//Dummy data; todo: pull from actual database or hardcode it in
const partners = Array(6).fill({name:"Partner X",desc:"Lorem Ipsum",logo:debugimg});
const reasons = [
  "Reason here",
  "Reason here",
  "Reason here",
  "Reason here",
];

export default function PartnerWithUsPage() {
  return (
    <>
      <Hero title="Partner With Us" subtitle="Tech4R offers a platform to innovate at the intersection of technology and humanitarian aid. Join us to scale impact." />
      <section className="flex-1">
        <div className="container flex mx-auto p-4 m-6">
          <Image src={debugimg} alt="ALT TEXT" height={275} className="flex-1 rounded-3xl"/>
          
          <div className="container mx-auto flex-1 p-12 m-6">
            <Title>Why Partner with Tech4R?</Title>
            <p className="text-neutral-03 p-4 mb-4">Lorem ipsum etc etc etc etc<br />Description goes here</p>
            <ul className="grid gap-4 grid-cols-2 place-items-center place-content-center text-neutral-03 p-4 mb-4">
              {reasons.map(e => (<li key={e} className="w-full">{e}</li>))}
            </ul>
            <Button className="m-auto flex-none" href="/contact">Email us<span className="hidden md:inline">&nbsp;for Partnership Inquiries</span></Button>
          </div>
          
        </div>  
        <div className="container mx-auto p-4 m-6 bg-neutral-01 rounded-3xl">
          <Title>Host Organisations & Partners</Title>
          <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 place-items-center place-content-center">
            {partners.map(e => (
              <li key={e.name} className="rounded-lg p-4 w-full bg-background m-4">
                <Image src={e.logo} alt={e.name} width={48} className="rounded"/>
                <h5 className="font-bold text-2xl">{e.name}</h5>
                <p className="text-neutral-02">{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="container mx-auto p-4 m-6">[[Link to Contact section]]</div>
    </>
  );
}

