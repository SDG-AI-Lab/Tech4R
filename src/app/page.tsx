import HeroSection from "@/components/HomePage/HeroSection";
import ProjectsSolutionsSection from "@/components/HomePage/ProjectsSolutionsSection";

export default function Home() {
  return (
    <main>
      <section className="sm:mx-6">
        <HeroSection />
      </section>
      <ProjectsSolutionsSection />
    </main>
  );
}
