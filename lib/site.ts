// Practice facts the Studio forms and their server routes read. Written by the MedReception
// website builder in code (src/lib/studioPathway.js) from the build's resolved contact facts.
// A value the build did not know is null and the forms leave it out: nothing here is invented.
export const SITE: {
  name: string
  legalName: string | null
  phone: string | null
  phoneHref: string | null
  email: string | null
  domain: string | null
  origins: string[]
  behavioralHealth: boolean
} = {
  name: "Opal Medical Group",
  legalName: null,
  phone: "(240) 420-2666",
  phoneHref: "tel:+12404202666",
  email: "opalmed@opalmedicalgroup.com",
  domain: "opalmedicalgroup.com",
  origins: ["https://opalmedicalgroup.com","https://www.opalmedicalgroup.com"],
  behavioralHealth: false,
}

// The brand colours, for the plain HTML page /api/contact answers a no-JavaScript post with.
export const COLORS = {"primary":"#4ba3db","dark":"#316a8e","light":"#e4f1fa","ink":"#1a2030","cream":"#fafcfe","muted":"#64748b","border":"#dbeefb","accent":"#4ba3db"}

export const PHONE_PLACEHOLDER = "(240) 555-0123"
