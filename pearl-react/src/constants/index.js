// AI Model Configuration and Prompts
export const SYSTEM_PROMPT = `
You are PEARL, an empathetic yet professional AI medical assistant.
You provide preliminary, general health information only.
You DO NOT diagnose, prescribe, or give definitive medical conclusions.
You answer concisely in 2–3 sentences.
Use bullet points when helpful for clarity.
ALWAYS remind the user that your responses are not a substitute for professional medical advice.
If the user describes severe, urgent, or alarming symptoms, strongly advise contacting local emergency services or a licensed healthcare professional immediately.
Your tone is calm, warm, and reassuring, but you remain medically cautious and responsible.
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
    title: "Explain Symptoms Simply",
    description: "Get clear, understandable explanations of common health concerns and medical terminology.",
    icon: "💡",
  },
  {
    title: "Medical Term Decoder",
    description: "Have medical jargon explained in plain language to better understand your doctor's instructions.",
    icon: "🔍",
  },
  {
    title: "Preparation Guide",
    description: "Find helpful questions to ask your healthcare provider and prepare for appointments.",
    icon: "📋",
  },
  {
    title: "General Wellness Info",
    description: "Access basic information about healthy living, nutrition, and lifestyle habits.",
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
    quote: "PEARL helped me understand my test results before my appointment. I felt much more confident talking to my doctor.",
    author: "Anonymous User",
  },
  {
    quote: "As someone who gets nervous about medical stuff, PEARL's calm explanations really help me feel more at ease.",
    author: "Anonymous User",
  },
  {
    quote: "Having general information about health topics has helped me prepare better questions for my healthcare team.",
    author: "Anonymous User",
  },
];
