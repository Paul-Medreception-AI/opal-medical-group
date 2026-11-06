// Written by the MedReception website builder from the site's final route set (code,
// not a model). Data-driven pages are mapped from lib/data, so pages appended there
// are listed automatically.
import type { MetadataRoute } from 'next'
import { SERVICES as DATA_0 } from '../lib/data/services'
import { CONDITIONS as DATA_1 } from '../lib/data/conditions'

type Freq = 'daily' | 'weekly' | 'monthly' | 'yearly'
const BASE = "https://opalmedicalgroup.com"
const STATIC: [string, number, Freq][] = [
  ["/", 1.00, 'weekly'],
  ["/about", 0.70, 'monthly'],
  ["/blog", 0.70, 'weekly'],
  ["/blog/anemia-and-fatigue-what-is-the-connection", 0.60, 'monthly'],
  ["/blog/back-pain-when-to-seek-care", 0.60, 'monthly'],
  ["/blog/bone-health-and-osteoporosis-prevention", 0.60, 'monthly'],
  ["/blog/building-a-long-term-relationship-with-your-provider", 0.60, 'monthly'],
  ["/blog/cholesterol-basics-numbers-that-matter", 0.60, 'monthly'],
  ["/blog/cold-flu-or-allergies-how-to-tell", 0.60, 'monthly'],
  ["/blog/healthy-aging-staying-active-and-independent", 0.60, 'monthly'],
  ["/blog/healthy-eating-for-chronic-condition-management", 0.60, 'monthly'],
  ["/blog/healthy-habits-for-the-whole-family", 0.60, 'monthly'],
  ["/blog/heartburn-and-acid-reflux-explained", 0.60, 'monthly'],
  ["/blog/how-to-prepare-for-a-primary-care-visit", 0.60, 'monthly'],
  ["/blog/managing-arthritis-pain", 0.60, 'monthly'],
  ["/blog/managing-asthma-through-the-seasons", 0.60, 'monthly'],
  ["/blog/managing-type-2-diabetes-day-to-day", 0.60, 'monthly'],
  ["/blog/medication-management-tips", 0.60, 'monthly'],
  ["/blog/men-s-health-checkups-what-to-know", 0.60, 'monthly'],
  ["/blog/menopause-symptoms-and-support", 0.60, 'monthly'],
  ["/blog/mental-wellness-and-primary-care", 0.60, 'monthly'],
  ["/blog/minor-injuries-home-care-or-office-visit", 0.60, 'monthly'],
  ["/blog/prediabetes-warning-sign-and-opportunity", 0.60, 'monthly'],
  ["/blog/preparing-for-cold-and-flu-season", 0.60, 'monthly'],
  ["/blog/questions-to-ask-your-primary-care-provider", 0.60, 'monthly'],
  ["/blog/seasonal-allergies-relief-strategies", 0.60, 'monthly'],
  ["/blog/skin-concerns-your-primary-care-provider-can-help-with", 0.60, 'monthly'],
  ["/blog/sleep-and-your-overall-health", 0.60, 'monthly'],
  ["/blog/staying-active-with-chronic-conditions", 0.60, 'monthly'],
  ["/blog/staying-healthy-as-a-caregiver", 0.60, 'monthly'],
  ["/blog/stress-and-physical-health", 0.60, 'monthly'],
  ["/blog/understanding-high-blood-pressure", 0.60, 'monthly'],
  ["/blog/understanding-thyroid-problems", 0.60, 'monthly'],
  ["/blog/understanding-your-lab-results", 0.60, 'monthly'],
  ["/blog/urinary-tract-infections-signs-and-treatment", 0.60, 'monthly'],
  ["/blog/vaccines-for-adults-what-to-know", 0.60, 'monthly'],
  ["/blog/vitamin-d-and-your-health", 0.60, 'monthly'],
  ["/blog/weight-management-without-fad-diets", 0.60, 'monthly'],
  ["/blog/what-to-expect-at-your-annual-physical", 0.60, 'monthly'],
  ["/blog/when-to-visit-primary-care-instead-of-urgent-care", 0.60, 'monthly'],
  ["/blog/which-screenings-do-you-need-at-every-age", 0.60, 'monthly'],
  ["/blog/why-preventive-care-saves-time-and-worry", 0.60, 'monthly'],
  ["/blog/women-s-health-checkups-through-every-life-stage", 0.60, 'monthly'],
  ["/compare/annual-physical-vs-problem-focused-visit", 0.70, 'monthly'],
  ["/compare/lifestyle-changes-vs-medication-prediabetes", 0.70, 'monthly'],
  ["/compare/physician-vs-nurse-practitioner", 0.70, 'monthly'],
  ["/compare/preventive-screening-vs-diagnostic-testing", 0.70, 'monthly'],
  ["/compare/primary-care-vs-urgent-care", 0.70, 'monthly'],
  ["/conditions", 0.90, 'weekly'],
  ["/contact", 0.70, 'monthly'],
  ["/faq", 0.70, 'monthly'],
  ["/insurance", 0.70, 'monthly'],
  ["/locations/hagerstown-md", 0.80, 'monthly'],
  ["/new-patients", 0.70, 'monthly'],
  ["/patient-form-sms", 0.30, 'yearly'],
  ["/privacy-sms", 0.30, 'yearly'],
  ["/reviews", 0.70, 'monthly'],
  ["/services", 0.90, 'weekly'],
  ["/team", 0.70, 'monthly'],
  ["/telehealth", 0.70, 'monthly'],
  ["/terms-sms", 0.30, 'yearly'],
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const seen = new Set<string>()
  const out: MetadataRoute.Sitemap = []
  const add = (path: string, priority: number, changeFrequency: Freq) => {
    if (seen.has(path)) return
    seen.add(path)
    // With no origin (no usable target_domain) the URLs stay root-relative: '/' for home, never ''.
    out.push({ url: BASE ? BASE + (path === '/' ? '' : path) : path, lastModified: now, changeFrequency, priority })
  }
  for (const [path, priority, freq] of STATIC) add(path, priority, freq)
  for (const x of DATA_0) add("/services/" + x.slug, 0.85, 'monthly')
  for (const x of DATA_1) add("/conditions/" + x.slug, 0.85, 'monthly')
  return out
}
