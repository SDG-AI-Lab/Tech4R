import { supabase } from '@/lib/supabaseClient'
import { Hero } from '@/components/Hero'

export default async function ProjectsPage() {
    const { data: projects, error } = await supabase
        .from('projects')
        .select('*')

    if (error) {
        console.error(error)
        return <p>Failed to load projects.</p>
    }

    return (
      <>
        <Hero title="Projects & Solutions" subtitle="Discover how our tools and technologies have helped solve real-world challenges in disaster scenarios." />
        <div>
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
      </>
    )
}
