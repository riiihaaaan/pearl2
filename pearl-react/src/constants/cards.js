// Centralized feature card copy for the PEARL app
export const FEATURE_CARDS = [
  {
    id: "diagnostician",
    title: "Diagnostician",
    short: "Explore possible causes",
    long: "Gathers symptoms and provides possible causes, always recommending professional medical consultation.",
    iconPath: "/src/assets/diagnose.png",
    alt: "magnifier icon"
  },
  {
    id: "prescriber",
    title: "Prescriber",
    short: "Medication suggestions (from RAG)",
    long: "Suggests medications from local resources with dosages and warnings, requiring professional oversight.",
    iconPath: "/src/assets/prescribe.png",
    alt: "rx icon"
  },
  {
    id: "drawbackTester",
    title: "DrawBack Tester",
    short: "Check interactions & contraindications",
    long: "Checks medication interactions, contraindications, and side effects with safety ratings and citations.",
    iconPath: "/src/assets/drawback tester.png",
    alt: "refresh arrows icon"
  },
  {
    id: "nlp",
    title: "Clinician Verifier",
    short: "Final clinical review",
    long: "Reviews outputs, highlights uncertainties, and recommends next steps, always advising professional consultation.",
    iconPath: "/src/assets/NLP.png",
    alt: "A chat icon"
  }
];

export default FEATURE_CARDS;
