import { Hero } from "@/components/Hero";
import TilePanel from '@/components/TilePanel';
import ContactForm from './ContactForm';
import { socials } from './socialmedia';

export default function ContactPage() {

  const socialTiles = socials.info.map((item) => {
    const Icon = item.icon;
    return {
      name: item.name,
      desc: item.desc || '',
      icon: <Icon className="w-6 h-6" />,
      url: item.url
    };
  });

  console.log(socialTiles);

  return (
    <>
      <Hero 
        title="Contact Us" 
        subtitle={
          <>
            Have a question or need help?
            <br />
            Reach out using the form below.
          </>
        } 
      />

      <ContactForm />

      <div className="flex-1 flex items-center justify-center">
        <TilePanel title="Get In Touch" tiles={socialTiles} />      
      </div>
    </>
  );
}

