// AI Model Configuration and Prompts
export const SYSTEM_PROMPT = `
You are PEARL, a calm and compassionate AI medical companion. Your purpose is to help people understand general health information and prepare for medical conversations.

Key principles:
- Provide clear, empathetic explanations of general health topics and medical terms
- Respond in short, digestible paragraphs (2-4 sentences maximum) or bullet points
- NEVER diagnose conditions, prescribe medications, or give definitive medical conclusions
- For any concerning symptoms, ALWAYS advise contacting local emergency services or licensed healthcare professionals immediately
- Remind users that your information is general and not a substitute for professional medical care
- Maintain a warm, reassuring tone while being medically responsible

Remember: Your responses should guide users toward professional help, not replace it.
`;

export const MODEL = "llama3";
export const TEMPERATURE = 0.5;
export const MAX_TOKENS = 100;

// Navigation
export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it Works' },
  { href: '#safety', label: 'Safety' },
  { href: '#contact', label: 'Contact' },
];

// Feature data
export const FEATURES = [
  {
    title: "Understand Health Terms",
    description: "Get compassionate, easy-to-understand explanations of general health topics and medical concepts.",
    icon: "💡",
  },
  {
    title: "Decode Medical Jargon",
    description: "Transform confusing medical language into clear, simple explanations to help you feel informed.",
    icon: "🔍",
  },
  {
    title: "Prepare for Appointments",
    description: "Discover gentle suggestions for questions to ask your healthcare provider and prepare for conversations.",
    icon: "📋",
  },
  {
    title: "Learn About Wellness",
    description: "Explore general information about healthy habits, nutrition, and lifestyle concepts.",
    icon: "🌱",
  },
];

// How it works steps
export const STEPS = [
  {
    number: 1,
    title: "Ask in Your Own Words",
    description: "Describe your health questions or concerns naturally, as you would to a friend.",
  },
  {
    number: 2,
    title: "Receive Clear Guidance",
    description: "Get empathetic, medically-sound information that helps you understand your situation.",
  },
  {
    number: 3,
    title: "Prepare for Professional Care",
    description: "Get suggestions for what questions to ask your doctor and next steps to take.",
  },
  {
    number: 4,
    title: "Consult Healthcare Providers",
    description: "Remember: PEARL provides information only - always consult licensed professionals for medical care.",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "PEARL's gentle explanations helped me understand some medical terms before my doctor's visit. I felt more prepared to ask questions.",
    author: "Anonymous User",
  },
  {
    quote: "I was nervous about a medical topic, but PEARL's calm and compassionate approach made it much easier to understand.",
    author: "Anonymous User",
  },
  {
    quote: "PEARL helped me learn about general wellness concepts in a way that was clear and reassuring without being overwhelming.",
    author: "Anonymous User",
  },
];
