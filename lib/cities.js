// Cities we courier desi ghee to. Each carries genuinely city-specific detail —
// an approximate road distance from our Okara dairy, a typical courier transit
// estimate, and a short local intro — so every city page is unique content, not
// a doorway page. Distances are approximate; transit is a typical estimate and is
// always confirmed with the customer on WhatsApp.
export const CITIES = [
  {
    slug: "lahore",
    name: "Lahore",
    km: 130,
    transit: "usually a day or two",
    intro: "Lahore is only a couple of hours up the GT Road from our dairy in Okara, so your ghee reaches you quickly.",
  },
  {
    slug: "faisalabad",
    name: "Faisalabad",
    km: 90,
    transit: "usually a day or two",
    intro: "Faisalabad is one of our closest big cities — a short courier hop from Okara.",
  },
  {
    slug: "multan",
    name: "Multan",
    km: 195,
    transit: "usually a day or two",
    intro: "Multan lies down the road from Okara through Sahiwal, so delivery there is quick.",
  },
  {
    slug: "islamabad",
    name: "Islamabad",
    km: 380,
    transit: "typically two to three days",
    intro: "Islamabad is farther north, so your ghee travels a little longer — and since pure ghee keeps without refrigeration, it arrives in perfect condition.",
  },
  {
    slug: "rawalpindi",
    name: "Rawalpindi",
    km: 370,
    transit: "typically two to three days",
    intro: "Rawalpindi, right next to Islamabad, is an easy courier destination from Okara.",
  },
  {
    slug: "karachi",
    name: "Karachi",
    km: 1080,
    transit: "usually a few days",
    intro: "Karachi is the farthest we ship, right down south — and because pure ghee is shelf-stable, it travels the distance and arrives in great condition.",
  },
];

export const cityBySlug = (slug) => CITIES.find((c) => c.slug === slug);
