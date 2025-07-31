import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabaseClient'
import { siteConfig } from '@/lib/seo'
import { routes } from '@/lib/routes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}${routes.about}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}${routes.projects}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}${routes.events}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}${routes.volunteers}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}${routes.contact}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}${routes.partnerWithUs}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}${routes.pillars}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic project pages
  let projectPages: MetadataRoute.Sitemap = []
  try {
    const { data: projects } = await supabase
      .from('projects')
      .select('slug, updated_at')
      .not('slug', 'is', null)

    if (projects) {
      projectPages = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.updated_at || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    }
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error)
  }

  // Dynamic event pages
  let eventPages: MetadataRoute.Sitemap = []
  try {
    const { data: events } = await supabase
      .from('events')
      .select('slug, date')
      .not('slug', 'is', null)

    if (events) {
      eventPages = events.map((event) => ({
        url: `${baseUrl}/event/${event.slug}`,
        lastModified: new Date(event.date),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }))
    }
  } catch (error) {
    console.error('Error fetching events for sitemap:', error)
  }

  return [...staticPages, ...projectPages, ...eventPages]
} 