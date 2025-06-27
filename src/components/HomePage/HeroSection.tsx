import Image from "next/image";
import { Button } from "../Button";
import { VolunteerCarousel } from "@/app/volunteers/volunteerComponents";
import { routes } from "@/lib/routes";
import PillarTiles from "../PillarTiles";
import Title from "../Title";

const HeroSection = () => {
  return (
    <>

      <div className="relative min-h-screen scroll-mt-28 -mt-28 w-full mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/laptop.png"
            alt="Laptop keyboard background"
            fill
            className="w-full h-full object-cover rounded-[20px]"
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-black/10 z-5 rounded-[20px]" /> */}
        </div>

        {/* Main Content */}
        <div className="relative w-full h-full z-10 container px-6 mx-auto flex lg:pl-[118px] rounded-[20px]">
          <div className="flex flex-col gap-20 sm:gap-32 pt-54 sm:pt-72">
            <div className="w-full h-full flex flex-col gap-8 text-center sm:text-left">
              {/* Main Heading */}
              <h1 className="text-white text-5xl lg:text-7xl font-bold leading-[115%] tracking-[-2.5px] max-w-[550px]">
                Tech4R: Digital Solutions for Disaster Resilience
              </h1>

              {/* Subheading */}
              <p className="text-lg text-neutral-01">
                Data Driven and Digital Solutions for Disasters
              </p>
              {/* CTA Buttons */}
              <div className="flex  flex-col sm:flex-row gap-4">
                <Button href={routes.volunteers} className="cursor-pointer !py-3">
                  Join as a Volunteer
                </Button>
                <Button
                  href={routes.projects}
                  className="bg-white !text-neutral-04 cursor-pointer !py-3"
                >
                  <span>Explore Our Work</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:justify-start gap-4 mb-20">
              <div className="h-[60px] w-[60px] flex items-center justify-center relative">
                <Image
                  src="/images/partnerships.png"
                  alt="SDG Icon"
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>
              <p className="text-white text-[16px] tracking-normal leading-[170%] font-medium max-w-[170px]">
                <span>SDG 17 - Partnerships for the Goals</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Pillars */}
      <div className="relative w-full h-full z-10 container p-6 mx-auto flex lg:pl-[118px] rounded-[20px]">
        <PillarTiles />
      </div>
      {/* About */}
      <div className="relative w-full h-full z-10 container p-6 mx-auto flex lg:pl-[118px] rounded-[20px]">
        <Image src="/images/debugimg.png" alt="ALT TEXT" width={552} height={550} className="flex-1 rounded-2xl"/>
        <div className="container mx-auto flex-1 p-12 m-6">
          <Title>About Tech4R</Title>
          <p className="text-neutral-03 font-light leading-relaxed mtb-5">
            We believe resilience is built through proactive, tech-enabled solutions. We bridge the gap between crisis and recovery by applying data, AI, and emerging technologies. 
            <br /><br />
            Our mission is to empower communities before, during, and after disasters strike.</p>
          <div className="mt-11 inline-flex">
            <Button className="m-auto flex-none" href={routes.about}>Learn More About Us</Button>
          </div>
        </div>
      </div>
      {/* Track Record */}
      {/* What We Do (link to Pillars) */}
      {/* Volunteers */}
      <div className="relative w-full h-full z-10 container p-6 mx-auto grid lg:pl-[118px] rounded-[20px]">
        <Title>Introducting Our <span className="hidden md:inline">Skilled Team of&nbsp;</span>Volunteers</Title>
        <Button className="m-auto flex-none" href={routes.volunteers}><span className="hidden md:inline">Become a&nbsp;</span>Volunteer</Button>
        <VolunteerCarousel />
      </div>
      {/* Projection */}
      {/* Events */}
      {/* Partner With Us */}
      <div className="relative w-full h-full z-10 container p-6 mx-auto flex lg:pl-[118px] rounded-[20px]">
        <Image src="/images/debugimg.png" alt="ALT TEXT" width={552} height={550} className="flex-1 rounded-2xl"/>
        <div className="container mx-auto flex-1 p-12 m-6">
          <Title>Partner With Us</Title>
          <p className="text-neutral-03 font-light leading-relaxed mtb-5">Tech4R offers a platform to innovate at the intersection of technology and humanitarian aid. Join us to scale impact.</p>
          <div className="mt-11 inline-flex">
            <div className="mr-4 flex">
              <Image alt="" src="/images/debugimg.png" width={60} height={60} className='border-background border-2 h-12 w-12 rounded-full' />
              <Image alt="" src="/images/debugimg.png" width={60} height={60} className='border-background border-2 h-12 w-12 rounded-full ml-[-15px]' />
              <Image alt="" src="/images/debugimg.png" width={60} height={60} className='border-background border-2 h-12 w-12 rounded-full ml-[-15px]' />
              <Image alt="" src="/images/debugimg.png" width={60} height={60} className='border-background border-2 h-12 w-12 rounded-full ml-[-15px]' />
            </div>
            <Button className="m-auto flex-none" href={routes.partnerWithUs}>Learn More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
