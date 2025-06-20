import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/lib/routes';

const DUMMY_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !project) {
    return <div className="p-8 text-red-600">Project not found.</div>;
  }

  const { data: category } = await supabase
    .from('categories')
    .select('*')
    .eq('id', project.category_id)
    .single();

  return (
    <div className="bg-neutral-01 min-h-screen">
      {/* hero section */}
      <div className="bg-color-02 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{project.name}</h1>
        <Link href={routes.projects}>
          <span className="inline-block border border-white text-white rounded-full px-6 py-2 text-base font-medium hover:bg-white hover:text-color-02 transition">Back to all Projects</span>
        </Link>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
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
        <div className="flex flex-col lg:flex-row gap-10">
          {/* description */}
          <div className="flex-1 min-w-0">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">The Problem</h2>
              <p className="text-neutral-03 leading-relaxed">{project.problem}</p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Tech4R&apos;s Solution</h2>
              <p className="text-neutral-03 leading-relaxed">{project.solution}</p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Outcome</h2>
              <p className="text-neutral-03 leading-relaxed">{project.outcome}</p>
            </section>
          </div>
          {/* sub information */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-color-02 rounded-2xl p-6 text-white flex flex-col gap-6">
              <div>
                <div className="text-base font-semibold mb-2">Category</div>
                <span className="inline-block border border-white text-white text-xs px-3 py-1 rounded-full font-medium">
                  {category?.name || 'N/A'}
                </span>
              </div>
              <div>
                <div className="text-base font-semibold mb-2">Tools</div>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(project.tools_used) ? project.tools_used : [project.tools_used]).map((tool: string, idx: number) => (
                    <span key={idx} className="inline-block border border-white text-white text-xs px-3 py-1 rounded-full font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-base font-semibold mb-2">Date Completed</div>
                <div className="text-white/80 text-sm">{project.completion_date ? new Date(project.completion_date).toLocaleDateString('en-GB', { 
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                }).replace(/(\d+)/, (day) => {
                  const num = parseInt(day);
                  if (num % 10 === 1 && num !== 11) return `${num}st`;
                  if (num % 10 === 2 && num !== 12) return `${num}nd`;
                  if (num % 10 === 3 && num !== 13) return `${num}rd`;
                  return `${num}th`;
                }).replace(' ', ' ').replace(/ ([A-Za-z]+) /, ' $1, ') : 'N/A'}</div>
              </div>
              <div>
                <div className="text-base font-semibold mb-2">Link to Project</div>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline text-white/90 hover:text-white">{project.link}</a>
                ) : (
                  <span className="text-white/60">N/A</span>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
} 