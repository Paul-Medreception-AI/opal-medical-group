import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Opal Medical Group',
  description: 'Answers to common questions about primary care at Opal Medical Group in Hagerstown, MD: new patients, appointments, telehealth, medications and referrals.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | Opal Medical Group',
    description: 'Answers to common questions about primary care at Opal Medical Group in Hagerstown, MD: new patients, appointments, telehealth, medications and referrals.',
    url: 'https://opalmedicalgroup.com/faq',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Opal Medical Group',
    description: 'Answers to common questions about primary care at Opal Medical Group in Hagerstown, MD: new patients, appointments, telehealth, medications and referrals.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const faqs = [
  { q: 'Are you accepting new patients?', a: 'Yes, Opal Medical Group is currently accepting new patients. You can request an appointment through our online form or by calling the office at (240) 420-2666. Our team will follow up to confirm your visit and let you know what to bring.' },
  { q: 'Which providers can I see?', a: 'Our team includes Yi Vance, CRNP, a Family Nurse Practitioner, along with Dr. Farid Murshed, MD and Dr. M. Khalid Waseem, MD, CMD, both in Internal Medicine. When you request an appointment you can share your preferred provider. Our staff will do their best to match your request with availability.' },
  { q: 'Do you accept my insurance?', a: 'Insurance questions are best answered by our office team, since coverage varies from plan to plan. Please call (240) 420-2666 with your plan details and we can tell you how to proceed. It also helps to have your insurance card nearby when you call.' },
  { q: 'How much do visits cost?', a: 'We do not publish fees online, so we are not able to quote costs on this page. Please call the office at (240) 420-2666 and our team will explain what to expect for your situation. Asking before your visit is always welcome.' },
  { q: 'What should I expect at my first visit?', a: 'Your provider will listen to your medical history, current concerns and health goals. Together you will discuss any needed exams or screenings. You will leave with a clear plan tailored to your needs and an understanding of how follow-up will work.' },
  { q: 'What should I bring to my first appointment?', a: 'Bring a photo ID, your insurance card if you have one, and a list of current medications, including supplements and over-the-counter products. Records from previous providers, such as recent lab results or imaging, can be very helpful. Writing down your questions beforehand also makes the visit more productive.' },
  { q: 'How do I schedule an appointment?', a: 'You can send a request through the form on our contact page or call the office at (240) 420-2666. Choose your preferred provider if you have one, and our team will follow up to confirm the visit. Calling is a good option if your concern is time sensitive.' },
  { q: 'What are your office hours?', a: 'We are open Monday 8:00 AM to 5:30 PM, Tuesday and Wednesday 8:00 AM to 5:00 PM, Thursday 7:30 AM to 8:30 PM, and Friday 8:00 AM to 4:30 PM. The office is closed Saturday and Sunday. Our Thursday hours extend into the evening for patients who need a later option.' },
  { q: 'Where is the office located?', a: 'We are at 1126 Opal Ct, Hagerstown, MD 21740. If you need directions or have questions about arriving for your visit, call us at (240) 420-2666. Telehealth is also available for appropriate visits.' },
  { q: 'Do you offer telehealth or video visits?', a: 'Yes, we offer telehealth for appropriate visits such as medication management and some follow-ups. Telehealth can save travel time and is convenient for many routine questions. Your provider will tell you if a concern needs to be seen in person so exams can be done properly.' },
  { q: 'Can you manage my chronic conditions?', a: 'Yes. We provide chronic disease management for conditions such as diabetes, hypertension and arthritis. Care plans are built around your goals and include ongoing follow-up so your plan stays on track. Your provider will review your progress and adjust treatment as needed.' },
  { q: 'Do you handle medication refills and management?', a: 'Medication management is part of our care, and it can often be done through telehealth. Your provider reviews what you take, how it is working and any side effects. For refill requests, contact the office in advance rather than waiting until you run out.' },
  { q: 'What preventive care do you offer?', a: 'Preventive care includes annual health exams, vaccinations, screenings and lifestyle guidance. The goal is to catch concerns early and keep small issues from becoming larger ones. Your provider will recommend a schedule based on your age, history and risk factors.' },
  { q: 'Do you provide women\'s health services?', a: 'Yes, we offer personalized women\'s health services including routine checkups, reproductive care and specialized treatments for every stage of life. Care is delivered with comfort and respect. Please call the office if you have a specific question about a service.' },
  { q: 'Can I be seen for a sudden illness or minor injury?', a: 'We evaluate and treat common illnesses and minor injuries, and your provider will explain your options clearly. Call the office at (240) 420-2666 so the team can advise on timing. For severe symptoms, chest pain, trouble breathing or any emergency, call 911 or go to the nearest emergency room.' },
  { q: 'What if I need to see a specialist?', a: 'If your provider feels specialty care would help, they will discuss the reason and your options with you. We stay connected throughout so your care continues smoothly. Ask our team if you have questions about the referral process for your situation.' },
  { q: 'What are age-related screenings?', a: 'These are targeted screenings that support early detection of conditions that become more common with age. Which ones are right for you depends on your age, family history and health. Your provider reviews results with you and plans next steps together.' },
  { q: 'What is your cancellation or late-arrival policy?', a: 'We do not list cancellation or late-arrival details online. Please call the office at (240) 420-2666 and our team will explain how it works. If your plans change, contacting us as early as you can is always appreciated.' },
]

export default function FAQPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › <span>FAQ</span>
          </nav>
          <h1 className="font-[Cormorant_Garamond,serif] text-5xl font-light mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/90">Everything you need to know about our practice and services</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          {faqs.map((f) => (
            <details key={f.q} className="animate-fade-up group border border-[var(--color-border)] rounded-xl mb-3 bg-white">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-[Cormorant_Garamond,serif] text-xl list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <svg className="w-5 h-5 shrink-0 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl font-light mb-4">Still Have Questions?</h2>
          <p className="text-white/80 mb-8">Call (240) 420-2666 or send us a message and our team will be glad to help.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white font-semibold px-8 py-4 rounded-full">
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}