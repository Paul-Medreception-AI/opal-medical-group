/** @type {import("next").NextConfig} */
// Written by the MedReception website builder (code, not a model). Redirects run
// BEFORE the filesystem, so no rule here may name a path the site serves; the builder
// checks every source against the final route set and every destination exists.
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: '/privacy', destination: '/privacy-sms', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-sms', permanent: true },
      { source: '/terms', destination: '/terms-sms', permanent: true },
      { source: '/terms-of-service', destination: '/terms-sms', permanent: true },
      { source: '/sms-terms', destination: '/terms-sms', permanent: true },
      // The old site's URLs that have no page of the same path here.
      { source: '/doctors', destination: '/team', permanent: true },
      { source: '/age-related-screening', destination: '/services/age-related-screening', permanent: true },
      { source: '/womens-health', destination: '/', permanent: true },
      { source: '/general-illness-injuries', destination: '/services/general-illness-injuries', permanent: true },
      { source: '/chronic-disease-management', destination: '/services/chronic-disease-management', permanent: true },
      { source: '/preventive-health', destination: '/services/preventive-health', permanent: true },
      { source: '/primary-care', destination: '/', permanent: true },
      { source: '/news', destination: '/blog', permanent: true },
      { source: '/departments/internalmedicine', destination: '/', permanent: true },
      { source: '/departments/family-medicine', destination: '/', permanent: true },
      { source: '/departments/nurse-practitioner-care', destination: '/', permanent: true },
      { source: '/departments/primary-chronic-care', destination: '/', permanent: true },
      { source: '/departments/preventive-annual-health-exams', destination: '/', permanent: true },
      { source: '/departments/telehealth-medication-management', destination: '/telehealth', permanent: true },
      { source: '/doctors/yi-vance-crnp', destination: '/team', permanent: true },
      { source: '/doctors/dr-farid-murshed-md', destination: '/team', permanent: true },
      { source: '/doctors/dr-m-khalid-waseem-md-cmd', destination: '/team', permanent: true },
      { source: '/post/how-nutrition-plays-a-role-in-faster-recovery', destination: '/blog', permanent: true },
      { source: '/category/optimal-nutrition', destination: '/blog', permanent: true },
      { source: '/category/robotic-surgery', destination: '/blog', permanent: true },
      { source: '/category/heart-healthy', destination: '/blog', permanent: true },
      { source: '/faqs', destination: '/faq', permanent: true },
      { source: '/patient-resources', destination: '/', permanent: true },
    ];
  },
};
module.exports = nextConfig;
