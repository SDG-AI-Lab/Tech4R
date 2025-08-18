import Image from "next/image";
import { Button } from "../Button";
import { routes } from "@/lib/routes";


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

      {/* Track Record */}
      {/* What We Do (link to Pillars) */}
      {/* Volunteers */}

      {/* Projection */}
      {/* Events */}

    </>
  );
};

export default HeroSection;
