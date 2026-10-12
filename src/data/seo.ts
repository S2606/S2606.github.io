// Structured data (schema.org) shared across pages.
export const NAME = 'Shagun Khemka';
export const EMAIL = 'shagun.khemka60@gmail.com';
export const PROFILES = [
  'https://github.com/S2606',
  'https://www.linkedin.com/in/shagun-khemka/',
  'https://topmate.io/shagun_khemka',
  'https://cal.com/shagun-khemka',
];

export function personSchema(site: URL) {
  const url = site.toString();
  return {
    '@type': 'Person',
    '@id': `${url}#person`,
    name: NAME,
    alternateName: 'Shagun Ravi Khemka',
    url,
    image: new URL('/shagun.jpg', site).toString(),
    email: `mailto:${EMAIL}`,
    jobTitle: 'Senior Software Engineer',
    description:
      'Senior backend engineer building high-scale subscription platforms and production AI systems: LLM routing, evals and cost-aware inference.',
    worksFor: { '@type': 'Organization', name: 'JioHotstar', url: 'https://www.hotstar.com' },
    address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Vellore Institute of Technology' },
      { '@type': 'CollegeOrUniversity', name: 'International Institute of Information Technology Bangalore' },
    ],
    knowsAbout: [
      'Distributed systems', 'Backend engineering', 'System design', 'Subscriptions and payments',
      'Large language models', 'LLM evaluation', 'Model routing', 'AI engineering',
      'Java', 'Spring Boot', 'Go', 'Python', 'Kafka', 'Redis', 'PostgreSQL', 'Kubernetes', 'AWS',
    ],
    hasCredential: [
      ['Generative AI Nanodegree', 'https://www.udacity.com/certificate/e/33f2e972-e53e-11ee-8ca3-43f01c9f7762'],
      ['Cloud DevOps Engineer Nanodegree', 'https://www.udacity.com/certificate/GT2TFMCJ'],
      ['Blockchain Developer Nanodegree', 'https://www.udacity.com/certificate/WGZL4GKX'],
    ].map(([name, u]) => ({
      '@type': 'EducationalOccupationalCredential',
      name,
      url: u,
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: 'Udacity' },
    })),
    award: ['Astral Team Award, JioHotstar (Q4 FY25–26)', 'Achiever Award 2017–18, VIT'],
    sameAs: PROFILES,
  };
}

export function websiteSchema(site: URL) {
  return {
    '@type': 'WebSite',
    '@id': `${site.toString()}#website`,
    url: site.toString(),
    name: NAME,
    inLanguage: 'en-IN',
    publisher: { '@id': `${site.toString()}#person` },
  };
}

export function breadcrumbSchema(site: URL, trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: new URL(t.path, site).toString(),
    })),
  };
}
