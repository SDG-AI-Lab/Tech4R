import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

interface EventData {
  name: string
  description?: string
  date: string
  location: string
  slug: string
  event_categories?: { name: string }
}

interface ProjectData {
  name: string
  description?: string
  slug: string
  created_at: string
  category?: { name: string; description?: string }
}

interface ArticleData {
  title: string
  description: string
  url: string
  publishedTime: string
  modifiedTime?: string
  image?: string
}

interface StructuredDataProps {
  type: 'organization' | 'event' | 'project' | 'article'
  data?: EventData | ProjectData | ArticleData
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = siteConfig.url

    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteConfig.name,
          description: siteConfig.description,
          url: baseUrl,
          image: `${baseUrl}${siteConfig.ogImage}`,
          areaServed: 'Global',
          keywords: siteConfig.keywords.join(', '),
          parentOrganization: {
            '@type': 'Organization',
            name: 'UNDP',
            url: 'https://www.undp.org/',
          },
          partner: [
            {
              '@type': 'Organization',
              name: 'SDG AI Lab',
            },
          ],
        }

      case 'event':
        if (!data || !('date' in data)) return null
        const eventData = data as EventData
        return {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: eventData.name,
          description: eventData.description,
          startDate: eventData.date,
          location: {
            '@type': 'Place',
            name: eventData.location,
          },
          organizer: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: baseUrl,
          },
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          url: `${baseUrl}/event/${eventData.slug}`,
          ...(eventData.event_categories && {
            category: eventData.event_categories.name,
          }),
        }

      case 'project':
        if (!data || !('created_at' in data)) return null
        const projectData = data as ProjectData
        return {
          '@context': 'https://schema.org',
          '@type': 'Project',
          name: projectData.name,
          description: projectData.description,
          url: `${baseUrl}/projects/${projectData.slug}`,
          creator: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: baseUrl,
          },
          dateCreated: projectData.created_at,
          ...(projectData.category && {
            about: {
              '@type': 'Thing',
              name: projectData.category.name,
              description: projectData.category.description,
            },
          }),
        }

      case 'article':
        if (!data || !('title' in data)) return null
        const articleData = data as ArticleData
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: articleData.title,
          description: articleData.description,
          author: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: baseUrl,
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/images/logo-icpsd.jpg`,
            },
          },
          datePublished: articleData.publishedTime,
          dateModified: articleData.modifiedTime || articleData.publishedTime,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}${articleData.url}`,
          },
          image: articleData.image ? `${baseUrl}${articleData.image}` : `${baseUrl}${siteConfig.ogImage}`,
        }

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

// Organization structured data for the main layout
export function OrganizationStructuredData() {
  return <StructuredData type="organization" />
}

// Breadcrumb structured data
interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  }

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
} 