import { supabase } from '@/lib/supabaseClient';
import { Hero } from '@/components/Hero';
import { ProjectGrid } from './components/project-grid';
import { SectionContainer } from '@/components/SectionContainer';
import { generateProjectsMetadata } from '@/lib/seo';

export const metadata = generateProjectsMetadata();

const DUMMY_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';

export default async function ProjectsPage() {
  
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id, name, created_at, description');

  const { data: projects, error: projError } = await supabase
    .from('projects')
    .select('*');

  if (catError || projError) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-red-600 py-14">
        Failed to load projects or categories.<br />
        {catError?.message || projError?.message || 'Unknown error'}
      </div>
    );
  }

  return (
    <>
      <Hero title="Projects & Solutions" subtitle="Discover how our tools and technologies have helped solve real-world challenges in disaster scenarios." />
      <SectionContainer>
        <div className="container mx-auto">
          <ProjectGrid 
            initialCategories={categories || []} 
            initialProjects={projects || []} 
            dummyImage={DUMMY_IMAGE}
          />
        </div>
      </SectionContainer>
    </>
  );
}
