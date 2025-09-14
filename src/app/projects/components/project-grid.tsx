'use client'
import { useState } from 'react';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { getProjectDetailRoute } from '@/lib/routes';
import { FaArrowRight } from 'react-icons/fa6';

interface Category {
  id: string;
  name: string;
  created_at: string;
  description?: string;
}

interface Project {
  id: string;
  name: string;
  problem: string;
  solution: string;
  outcome: string;
  tools_used: string[];
  category_id: string;
  slug: string;
  image_url?: string;
  completion_date?: string;
  link?: string;
}

interface ProjectGridProps {
  initialCategories: Category[];
  initialProjects: Project[];
  dummyImage: string;
}

export function ProjectGrid({ initialCategories, initialProjects, dummyImage }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryMap = Object.fromEntries(initialCategories.map((c: Category) => [c.id, c.name]));
  const filteredProjects = selectedCategory === 'all'
    ? initialProjects
    : initialProjects.filter((p: Project) => p.category_id === selectedCategory);

  // Fetch selected category info
  const selectedCategoryInfo = selectedCategory === 'all'
    ? { name: 'All Categories', description: 'All projects across different categories.' }
    : initialCategories.find(c => c.id === selectedCategory);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-12">
      {/* Category selection UI */}
      <div className="flex flex-wrap gap-4 mb-10">
        <Button
          variant={selectedCategory === 'all' ? 'primary' : 'ghost'}
          onClick={() => setSelectedCategory('all')}
          className="rounded-full px-6 py-2 text-base font-medium"
        >
          All Categories
        </Button>
        {initialCategories.map((cat: Category) => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? 'primary' : 'ghost'}
            onClick={() => setSelectedCategory(cat.id)}
            className="rounded-full px-6 py-2 text-base font-medium"
          >
            {cat.name}
          </Button>
        ))}
      </div>

      {/* Category title and description */}
      <div className="mb-12">
        <h2 className="text-3xl font-medium text-neutral-04 mb-4">
          {selectedCategoryInfo?.name}
        </h2>
        <p className="text-neutral-03 text-lg">
          {selectedCategoryInfo?.description}
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
        {filteredProjects.map((project: Project) => (
          <div
            key={project.id}
            className="relative rounded-3xl overflow-hidden border border-neutral-01 flex flex-col justify-end min-h-[380px] bg-neutral-01"
            style={{ backgroundImage: `url(${project.image_url || dummyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Content overlay - positioned at bottom with margin, but not absolutely positioned */}
            <div className="m-4 mt-40 rounded-2xl bg-white/95 px-6 pt-5 pb-4 flex flex-col" style={{backdropFilter: 'blur(2px)'}}>
              <div>
                <h2 className="text-2xl font-medium text-neutral-04 mb-2 tracking-[-1px] leading-snug">{project.name}</h2>
                <p className="font-light text-neutral-02 mb-2 leading-relaxed">Problem: {project.problem}</p>
                <p className="font-light text-neutral-02 mb-2 leading-relaxed">Tools Used: {Array.isArray(project.tools_used) ? project.tools_used.join(', ') : project.tools_used}</p>
                <p className="font-light text-neutral-02 mb-2 leading-relaxed">Outcome: {project.outcome}</p>
              </div>
              <div className="flex items-end justify-between w-full mt-4 gap-4">
                {/* Learn More*/}
                <Link href={getProjectDetailRoute(project.slug)} className="text-neutral-04 hover:text-neutral-05 transition-all duration-200 inline-flex items-center group">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
                </Link>
                {/* Category tag*/}
                <span className="inline-block border border-neutral-03 text-neutral-04 text-xs px-3 py-1 rounded-full font-medium truncate min-w-0">
                  {categoryMap[project.category_id]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 