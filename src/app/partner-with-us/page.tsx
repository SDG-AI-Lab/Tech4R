import { Hero } from "@/components/Hero";
import { Button } from '@/components/Button'
import Title from '@/components/Title'
import Image from "next/image";
import partnership from "@/../public/images/Partnership image.png"
import { FaCircleCheck } from "react-icons/fa6";
import { generatePartnerMetadata } from '@/lib/seo';
import { SectionContainer } from "@/components/SectionContainer";
import PartnerSection from '@/components/PartnerSection';

export const metadata = generatePartnerMetadata();

//Dummy data; todo: pull from actual database or hardcode it in
const reasons = [
  "Open Innovation",
  "Lasting Impact",
  "Rapid Mobilization",
  "Stronger Resilience",
];

export default function PartnerWithUsPage() {
  return (
    <>
      <Hero title="Partner With Us" subtitle="Tech4R offers a platform to innovate at the intersection of technology and humanitarian aid. Join us to scale impact." />
      <section className="flex-1 my-28">
        <div className="container flex mx-auto flex-col lg:flex-row px-4 md:px-8 lg:px-16 xl:px-20">
          <Image src={partnership} alt="ALT TEXT" height={550} className="flex-1 rounded-2xl mx-auto object-cover" />
          <div className="container mx-auto flex-1 p-12 m-6">
            <Title className="text-left">Why Partner with Tech4R?</Title>
            <p className="text-neutral-03 p-4 mb-4">Tech4R is built on collaboration. Together with our partners, we bring diverse expertise and resources to support technology-driven disaster response and resilience. <b>UN Volunteers (UNV)</b> is our main partner, helping us connect skilled volunteers worldwide with meaningful opportunities to contribute to open-source digital solutions. Alongside UNV, we work with <b>Bridge to Türkiye Fund</b>, <b>ATÖLYE</b>, <b>EKA Creative Studio</b>, <b>LJUS</b>, and <b>HP LIFE</b>—each adding unique value, from mobilizing communities and advancing education to fostering innovation and entrepreneurship. As Tech4R grows, we are continuously expanding our partnerships to strengthen our global network and maximize impact.</p>
            <ul className="grid gap-4 grid-cols-2 place-items-center place-content-center text-neutral-03 p-4 mb-4">
              {reasons.map(e => (<li key={e} className="inline w-full"><FaCircleCheck className="text-color-01 inline align-sub mr-4" />{e}</li>))}
            </ul>
            <Button className="m-auto flex-none" href="/contact">Email us<span className="hidden md:inline">&nbsp;for Partnership Inquiries</span></Button>
          </div>
        </div>
      </section>
      <section className="px-6 my-6 overflow-hidden">
        <PartnerSection />
      </section>
    </>
  );
}

