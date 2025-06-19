'use client'
import { useState } from 'react';
import { Button } from '@/components/Button';
import Link from 'next/link';

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
    <div className="max-w-6xl mx-auto px-4 py-12">
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
        <h2 className="text-2xl font-bold text-neutral-04 mb-2">
          {selectedCategoryInfo?.name}
        </h2>
        <p className="text-neutral-03 text-lg">
          {selectedCategoryInfo?.description}
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project: Project) => (
          <div
            key={project.id}
            className="relative rounded-3xl shadow-xl overflow-hidden border border-neutral-01 flex flex-col justify-end aspect-[4/5] min-h-[380px] bg-neutral-01"
            style={{ backgroundImage: `url(${project.image_url || dummyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* bottom white box */}
            <div className="absolute left-4 right-4 bottom-4 h-[65%] rounded-2xl bg-white/95 shadow-lg px-6 pt-5 pb-4 flex flex-col justify-between" style={{backdropFilter: 'blur(2px)'}}>
              <div>
                <h2 className="text-lg font-bold text-neutral-04 mb-1 leading-tight">{project.name}</h2>
                <p className="text-neutral-03 text-sm mb-1 leading-snug">Problem: {project.problem}</p>
                <p className="text-neutral-03 text-sm mb-1 leading-snug">Tools Used: {Array.isArray(project.tools_used) ? project.tools_used.join(', ') : project.tools_used}</p>
                <p className="text-neutral-03 text-sm mb-2 leading-snug">Outcome: {project.outcome}</p>
              </div>
              <div className="flex items-end justify-between w-full mt-auto">
                {/* Learn More*/}
                <Link href={`/projects/${project.slug}`} className="text-neutral-04 text-sm font-medium inline-flex items-center gap-1 hover:underline">
                  Learn More <span aria-hidden>→</span>
                </Link>
                {/* Category tag*/}
                <span className="inline-block border border-neutral-03 text-neutral-04 text-xs px-3 py-1 rounded-full font-medium ml-auto">
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