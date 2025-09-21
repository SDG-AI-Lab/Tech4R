import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';
import { routes } from '@/lib/routes';
import { ProjectAnalytics } from '@/components/ProjectAnalytics';
import { Hero } from '@/components/Hero';

const DUMMY_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(error);
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-red-600 py-14">
        Failed to load project
        <br />
        {error?.message || "Error fetching project"}
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-color-01 py-14">
        Project Not Found
      </div>
    );
  }

  const { data: category } = await supabase
    .from('categories')
    .select('*')
    .eq('id', project.category_id)
    .single();

  return (
    <>
      <ProjectAnalytics 
        projectName={project.name} 
        categoryName={category?.name || 'N/A'} 
        projectSlug={slug} 
      />
      <Hero
        title={project.name}
        buttonText="Back to all Projects"
        buttonUrl={routes.projects}
      />
      <section className="w-full py-30 space-y-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* main image */}
          <div className="mb-10 relative" style={{ aspectRatio: '16/7' }}>
            <Image
              src={project.image_url || DUMMY_IMAGE}
              alt={project.name}
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>
          <div className="flex flex-col gap-20 md:flex-row">
            <div className="flex flex-col gap-8 flex-2/4">
              <h3 className="text-neutral-04 text-2xl sm:text-[32px] font-medium leading-[140%] tracking-[-1px]">
                {project.name}
              </h3>
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">The Problem</h4>
                  <p className="text-neutral-03 font-light text-sm sm:text-base leading-[170%] tracking-[0px]">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Tech4R&apos;s Solution</h4>
                  <p className="text-neutral-03 font-light text-sm sm:text-base leading-[170%] tracking-[0px]">{project.solution}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Outcome</h4>
                  <p className="text-neutral-03 font-light text-sm sm:text-base leading-[170%] tracking-[0px]">{project.outcome}</p>
                </div>
              </div>
          </div>
            <div className="bg-color-02 rounded-2xl text-white p-8 flex flex-col gap-6 flex-[1.5] h-fit">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl sm:text-[32px] font-medium leading-[140%] tracking-[-1px]">
                  Category
                </h3>
                <div>
                  <span className="inline-block border border-white text-white text-xs px-3 py-1 rounded-full font-medium uppercase">
                    {category?.name || 'N/A'}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl sm:text-[32px] font-medium leading-[140%] tracking-[-1px]">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(project.tools_used) ? project.tools_used : [project.tools_used]).map((tool: string, idx: number) => (
                    <span key={idx} className="inline-block border border-white text-white text-xs px-3 py-1 rounded-full font-medium uppercase">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {project.completion_date && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl sm:text-[32px] font-medium leading-[140%] tracking-[-1px]">
                    Date Completed
                  </h3>
                  <p className="text-neutral-01 font-normal text-sm sm:text-base">
                    {new Date(project.completion_date).toLocaleDateString(navigator.language, { 
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              )}
              {project.link && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl sm:text-[32px] font-medium leading-[140%] tracking-[-1px]">
                    Link to Project
                  </h3>
                  <p className="text-neutral-01 font-normal text-sm sm:text-base">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline text-neutral-01 hover:text-white">
                      {project.link}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 