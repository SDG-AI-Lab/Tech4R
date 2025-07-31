import { Metadata } from 'next'

// Site configuration
export const siteConfig = {
  name: 'Tech4R',
  description: 'Tech4R is a collaborative initiative harnessing digital innovation to strengthen disaster resilience around the world.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tech4r.org',
  ogImage: '/images/og-image.jpg',
  creator: '@tech4r',
  keywords: [
    'disaster resilience',
    'digital innovation',
    'humanitarian technology',
    'disaster response',
    'UNDP',
    'SDG AI Lab',
    'emergency management',
    'tech for good',
    'crisis management',
    'disaster recovery',
    'AI for humanitarian',
    'sustainable development'
  ],
  authors: [
    {
      name: 'Tech4R Team',
      url: 'https://tech4r.org',
    },
  ],
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  keywords?: string[]
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
  noindex?: boolean
  canonical?: string
}

export function generateMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  keywords = siteConfig.keywords,
  url = siteConfig.url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  noindex = false,
  canonical,
}: SEOProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`
  const pageUrl = url.startsWith('http') ? url : `${siteConfig.url}${url}`

  return {
    title: pageTitle,
    description,
    keywords: keywords.join(', '),
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      type,
      title: pageTitle,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(section && { section }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      creator: siteConfig.creator,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonical || pageUrl,
    },
    other: {
      'application-name': siteConfig.name,
      'apple-mobile-web-app-title': siteConfig.name,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes'
    },
  }
}

// Specific metadata generators for different page types
export function generateHomeMetadata(): Metadata {
  return generateMetadata({
    title: 'Digital Innovation for Disaster Resilience',
    description: 'Tech4R harnesses digital innovation to strengthen disaster resilience worldwide. Join our collaborative initiative to build proactive, tech-enabled solutions for crisis management.',
    keywords: [
      ...siteConfig.keywords,
      'homepage',
      'tech4r initiative',
      'disaster resilience technology',
      'humanitarian innovation hub'
    ],
  })
}

export function generateAboutMetadata(): Metadata {
  return generateMetadata({
    title: 'About Tech4R - Our Mission & Partners',
    description: 'Learn about Tech4R\'s mission to empower communities before, during, and after disasters. Hosted by UNDP ICPSD with partners like SDG AI Lab.',
    url: '/about',
    keywords: [
      ...siteConfig.keywords,
      'about tech4r',
      'mission',
      'UNDP ICPSD',
      'partnerships',
      'humanitarian mission'
    ],
  })
}

export function generateProjectsMetadata(): Metadata {
  return generateMetadata({
    title: 'Projects & Solutions - Digital Tools for Disaster Response',
    description: 'Discover how our digital tools and technologies solve real-world challenges in disaster scenarios. Explore innovative solutions for emergency management.',
    url: '/projects',
    keywords: [
      ...siteConfig.keywords,
      'projects',
      'solutions',
      'digital tools',
      'disaster response technology',
      'emergency solutions'
    ],
  })
}

export function generateEventsMetadata(): Metadata {
  return generateMetadata({
    title: 'Events - Workshops, Conferences & Training',
    description: 'Join Tech4R events including workshops, conferences, and training sessions on disaster resilience technology and humanitarian innovation.',
    url: '/events',
    keywords: [
      ...siteConfig.keywords,
      'events',
      'workshops',
      'conferences',
      'training',
      'humanitarian events'
    ],
  })
}

export function generateVolunteersMetadata(): Metadata {
  return generateMetadata({
    title: 'Volunteer with Tech4R - Make a Difference',
    description: 'Join our global community of volunteers working on digital solutions for disaster resilience. Find opportunities to contribute your skills.',
    url: '/volunteers',
    keywords: [
      ...siteConfig.keywords,
      'volunteers',
      'volunteer opportunities',
      'tech volunteering',
      'humanitarian volunteering',
      'digital volunteers'
    ],
  })
}

export function generateContactMetadata(): Metadata {
  return generateMetadata({
    title: 'Contact Tech4R - Get in Touch',
    description: 'Contact Tech4R to learn more about our initiatives, partnerships, or volunteer opportunities in disaster resilience technology.',
    url: '/contact',
    keywords: [
      ...siteConfig.keywords,
      'contact',
      'get in touch',
      'partnerships',
      'collaboration'
    ],
  })
}

export function generatePartnerMetadata(): Metadata {
  return generateMetadata({
    title: 'Partner with Tech4R - Collaborate for Impact',
    description: 'Partner with Tech4R to advance digital innovation in disaster resilience. Explore collaboration opportunities and joint initiatives.',
    url: '/partner-with-us',
    keywords: [
      ...siteConfig.keywords,
      'partnerships',
      'collaboration',
      'partner with us',
      'strategic partnerships',
      'humanitarian partnerships'
    ],
  })
}

export function generatePillarsMetadata(): Metadata {
  return generateMetadata({
    title: 'Pillars of Action - Our Strategic Framework',
    description: 'Explore Tech4R\'s four strategic pillars: Rescue, Recovery, Response, and Resilience. Learn how we deliver impactful digital solutions.',
    url: '/pillars-of-action',
    keywords: [
      ...siteConfig.keywords,
      'pillars of action',
      'strategic framework',
      'rescue',
      'recovery',
      'response',
      'resilience'
    ],
  })
} 