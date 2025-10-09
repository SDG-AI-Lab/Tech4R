import { Hero } from "@/components/Hero";
import TilePanel from '@/components/TilePanel';
import { Button } from '@/components/Button'
import Title from '@/components/Title'
import Image from "next/image";
import { supabase } from '@/lib/supabaseClient';
import debugimg from "@/../public/images/debugimg.png"
import { FaCircleCheck } from "react-icons/fa6";
import { generatePartnerMetadata } from '@/lib/seo';
import { FaGlobe } from 'react-icons/fa';

export const metadata = generatePartnerMetadata();

console.log(debugimg)

type Partner = {
  name: string;
  description?: string;
  logo_url: string;
  website?: string;
};

//Dummy data; todo: pull from actual database or hardcode it in

// const partners = Array(6).fill({ name: "Partner X", desc: "Lorem Ipsum", logo: debugimg });
const reasons = [
  "Open Innovation",
  "Lasting Impact",
  "Rapid Mobilization",
  "Stronger Resilience",
];

export default async function PartnerWithUsPage() {
  const { data, error } = await supabase
    .from('partners')
    .select('*');

  if (error) {
    return <p className="text-center text-red-500 py-4">Error: {error.message}</p>;
  }

  const partners: Partner[] = data ?? [];

  const partnerTiles = partners.map((partner: Partner) => ({
    name: partner.name,
    desc: partner.description || '',
    icon: partner.logo_url
      ? (
        <div className="flex items-center justify-center w-16 h-16">
          <Image
            src={partner.logo_url}
            alt={partner.name}
            width={64}
            height={64}
            className="max-w-16 max-h-16 object-contain"
            unoptimized
            style={{
              objectFit: 'contain',
              objectPosition: 'left'
            }}
          />
        </div>
      )
      : <FaGlobe className="bg-color-03 rounded w-16 h-16 text-color-01 mt-1 p-4" />,
    url: partner.website
  }));

  return (
    <>
      <Hero title="Partner With Us" subtitle="Tech4R offers a platform to innovate at the intersection of technology and humanitarian aid. Join us to scale impact." />
      <section className="flex-1 mt-22">
        <div className="container flex mx-auto flex-col lg:flex-row px-4 md:px-8 lg:px-16 xl:px-20">
          <div className="flex-1">
            <Image
              src="/images/partnership.jpg"
              alt="Tech4R Partnership"
              width={981}
              height={550}
              className="flex-1 rounded-2xl mx-auto"
            />
          </div>
          <div className="container mx-auto flex-1 px-12">
            <Title className="text-left">Why Partner with Tech4R?</Title>
            <p className="text-neutral-03 p-4 mb-4">Tech4R is built on collaboration. Together with our partners, we bring diverse expertise and resources to support technology-driven disaster response and resilience. <b>UN Volunteers (UNV)</b> is our main partner, helping us connect skilled volunteers worldwide with meaningful opportunities to contribute to open-source digital solutions. Alongside UNV, we work with <b>Bridge to Türkiye Fund</b>, <b>ATÖLYE</b>, <b>EKA Creative Studio</b>, <b>LJUS</b>, and <b>HP LIFE</b>—each adding unique value, from mobilizing communities and advancing education to fostering innovation and entrepreneurship. As Tech4R grows, we are continuously expanding our partnerships to strengthen our global network and maximize impact.</p>
            <ul className="grid gap-4 grid-cols-2 place-items-center place-content-center text-neutral-03 p-4 mb-4">
              {reasons.map(e => (<li key={e} className="inline w-full"><FaCircleCheck className="text-color-01 inline align-sub mr-4" />{e}</li>))}
            </ul>
            <Button className="m-auto flex-none" href="/contact">Email us<span className="hidden md:inline">&nbsp;for Partnership Inquiries</span></Button>
          </div>

        </div>
        <div className="container mx-auto p-4 m-6 bg-neutral-01 rounded-3xl">
          <TilePanel title="Host Organizations & Partners" tiles={partnerTiles} />
        </div>
      </section>
    </>
  );
}

