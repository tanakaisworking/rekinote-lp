import { MetadataRoute } from 'next'

const BASE = 'https://rekinote.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/ja/lp/business/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ja: `${BASE}/ja/lp/business/`,
          en: `${BASE}/en/lp/business/`,
        },
      },
    },
    {
      url: `${BASE}/en/lp/business/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ja: `${BASE}/ja/lp/business/`,
          en: `${BASE}/en/lp/business/`,
        },
      },
    },
    {
      url: `${BASE}/ja/lp/student/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ja: `${BASE}/ja/lp/student/`,
          en: `${BASE}/en/lp/student/`,
        },
      },
    },
    {
      url: `${BASE}/en/lp/student/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ja: `${BASE}/ja/lp/student/`,
          en: `${BASE}/en/lp/student/`,
        },
      },
    },
  ]
}
