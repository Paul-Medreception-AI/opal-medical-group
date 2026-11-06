/**
 * The exact sentences a patient agrees to when they opt in to text messages, one per checkbox.
 *
 * 🔴 These strings are the evidence. A carrier reviewer, or a TCPA complaint, asks what the
 * patient actually agreed to, so each is defined in ONE place, rendered next to its checkbox, and
 * snapshotted verbatim into the opt-in record at the moment of consent. If you edit one, you are
 * changing what every future opt-in record says; records already taken keep the wording they
 * were given, because the server stores the text it received rather than re-reading this file.
 *
 * ⚠️ They are also quoted word for word in the A2P campaign's message flow. Written by the
 * MedReception website builder (src/lib/studioPathway.js) from the carrier-approved template
 * (gables-pain, campaign CIJGQ83, approved 2026-09-24); only the business name differs.
 *
 * Both boxes are optional and never pre-checked: carriers refuse a form that forces consent.
 */
export const SMS_CONSENT_NON_MARKETING_TEXT =
  "By checking this box, I consent to receive non-marketing text messages from Opal Medical Group related to my appointments, services, or account. These messages may include appointment reminders, confirmations, care instructions, and account notifications. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out at any time."

export const SMS_CONSENT_MARKETING_TEXT =
  "By checking this box, I consent to receive marketing and promotional messages including special offers, discounts, new product updates among others from Opal Medical Group at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out."
