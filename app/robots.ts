// Written by the MedReception website builder (code, not a model).
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    sitemap: "https://opalmedicalgroup.com/sitemap.xml",
  }
}
