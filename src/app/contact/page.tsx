import { Hero } from "@/components/Hero";


export default function ContactPage() {
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
      <div className="flex-1 flex items-center justify-center">
        <p>Contact</p>
      </div>
    </>
  );
}
