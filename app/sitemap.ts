import { MetadataRoute } from 'next'

const BASE = 'https://rekinote.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/ja/lp/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ja: `${BASE}/ja/lp/`,
          en: `${BASE}/en/lp/`,
        },
      },
    },
    {
      url: `${BASE}/en/lp/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ja: `${BASE}/ja/lp/`,
          en: `${BASE}/en/lp/`,
        },
      },
    },
  ]
}
