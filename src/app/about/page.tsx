import { Hero } from "@/components/Hero";
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Hero 
        title="About Tech4R" 
        subtitle="Tech4R is a collaborative initiative harnessing digital innovation to strengthen disaster resilience around the world."
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1677529497048-2bf5899e68de?w=1440"
          alt="Team collaboration in disaster response"
          width={1440}
          height={960}
          className="w-full rounded-3xl object-cover"
          priority
        />
      </Hero>
      <div className="flex-1 flex items-center justify-center">
        <p>About</p>
      </div>
    </>
  );
}
