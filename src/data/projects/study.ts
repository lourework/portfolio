import type { ProjectStudy } from './index'

export const studyProjects: ProjectStudy[] = [
  {
    slug: 'cozy-psychological-care',
    title: 'COZY — Remote Psychological Care',
    category: ['Study', 'UX', 'Health'],
    type: 'study',
    featured: false,
    coverImage: '/assets/projects/cozy-psychological-care/cover.jpg',
    shortDescription: 'End-to-end UX design for COZY, a remote psychological care platform connecting patients with therapists in Brazil.',
    overview: 'COZY is a UX study project addressing the gap in accessible mental health care in Brazil. With remote therapy demand accelerating post-2020, the goal was to design a platform that removes friction from finding, booking, and attending therapy sessions.',
    goal: 'Design a mobile-first platform that makes accessing psychological care as easy and stigma-free as booking any other appointment — from therapist discovery to ongoing session management.',
    personas: [],
    userContext: [
      {
        title: 'The Journey to Therapy',
        description: 'Research revealed that the biggest barrier to therapy in Brazil is not cost — it\'s the effort of finding the right therapist. Users described the process as "exhausting" and "overwhelming" before they even attend a first session.',
      },
    ],
    research: [
      {
        title: 'Quantitative Research',
        content: '73% of surveyed Brazilians who considered therapy never started due to difficulty finding a suitable therapist. 68% expressed interest in a digital platform that simplified the process.',
      },
      {
        title: 'Qualitative Research',
        content: 'User interviews revealed key pain points: opaque therapist profiles, uncertainty about fit, and anxiety about the first session. Trust signals and a low-friction matching experience became the design priorities.',
      },
    ],
    solution: {
      concept: 'COZY positions itself as a warm, trustworthy guide through the therapy-finding process. The brand and product experience are deliberately calm, clear, and non-clinical — communicating safety at every step.',
      images: [],
    },
    wireframes: {
      description: 'Low and mid-fidelity wireframes explored the therapist matching flow, session booking, and the in-app video session experience.',
      images: [],
    },
    usabilityTests: [
      'Users initially missed the "specialization" filter — moved to top of search',
      'Therapist availability calendar needed a clearer timezone indicator',
      'First-session confirmation screen needed more reassurance copy',
    ],
    prototype: {
      description: 'A high-fidelity, interactive prototype covering the full user journey from first open to booking a first session.',
      images: [],
    },
    nextSteps: 'Future iterations would explore the therapist-side dashboard, session note-taking, and a matching algorithm that accounts for communication style preferences alongside specialization.',
  },
  {
    slug: 'eva-ux-bootcamp',
    title: 'EVA — UX Design Bootcamp',
    category: ['Study', 'UX', 'Assistive Tech'],
    type: 'study',
    featured: false,
    coverImage: '/assets/projects/eva-ux-bootcamp/cover.jpg',
    shortDescription: 'UX bootcamp capstone project — EVA, a voice-first AI assistant designed for elderly users navigating digital services.',
    overview: 'EVA was the capstone project of a UX Design bootcamp. The brief was open-ended: design a meaningful digital product. I chose to explore voice-first AI assistance for elderly users — a population underserved by mainstream tech products.',
    goal: 'Design a voice-first assistant that helps elderly users (65+) perform common digital tasks — video calling family, checking weather, setting reminders — without relying on a small touchscreen or complex app navigation.',
    personas: [],
    research: [
      {
        title: 'Primary Research',
        content: 'Interviews with 5 participants aged 65–80 and their caregivers. Key insight: elderly users are not afraid of technology — they are afraid of breaking something or doing something wrong. Error prevention and recovery are more important than discoverability.',
      },
    ],
    solution: {
      concept: 'EVA uses a persistent voice interface with a simple, large-text visual feedback screen. Commands are confirmed verbally before executing. A "Teach Me" mode lets family members set up shortcuts for the user.',
      images: [],
    },
    wireframes: {
      description: 'Wireframes focused on the core task flows: making a call, setting a reminder, and asking a question.',
      images: [],
    },
    prototype: {
      description: 'A conversational prototype demonstrating the key flows with a warm, non-robotic voice persona.',
      images: [],
    },
    nextSteps: 'Future work would focus on the family onboarding flow, privacy controls, and integration with smart home devices.',
  },
  {
    slug: 'banco-itau-mobile-redesign',
    title: 'Banco Itaú — Mobile App Home Redesign',
    category: ['Study', 'UX', 'Fintech'],
    type: 'study',
    featured: false,
    coverImage: '/assets/projects/banco-itau-mobile-redesign/cover.jpg',
    shortDescription: 'A redesign study of the Banco Itaú mobile app home screen, improving information hierarchy and task access for everyday banking.',
    overview: 'A self-initiated redesign study of one of Brazil\'s most-used banking apps. The Itaú mobile app had strong feature coverage but a cluttered home screen that buried key tasks under layers of promotional content. This study proposes a content-first redesign.',
    goal: 'Redesign the home screen to surface the user\'s most important financial information and frequent tasks — without requiring scrolling or navigation — while reducing promotional noise.',
    research: [
      {
        title: 'Heuristic Evaluation',
        content: 'Applied Nielsen\'s 10 heuristics to the current home screen. Main issues: aesthetic/minimalist design violations (excessive promotional banners), poor match between system and real world (jargon-heavy labels), and low efficiency for expert users.',
      },
      {
        title: 'Comparative Analysis',
        content: 'Benchmarked Nubank, Inter, and Revolut. Key learnings: balance visibility separates financial information from promotional content, personalization of quick actions reduces navigation depth, and trust is reinforced through clarity, not decoration.',
      },
    ],
    solution: {
      concept: 'A modular home screen with a clear financial overview at the top (balance, credit card, investments), a persistent quick-actions row tuned to user behavior, and promotional content clearly separated at the bottom.',
      images: [],
    },
    wireframes: {
      description: 'Mid-fidelity wireframes exploring the new home screen architecture and a simplified navigation.',
      images: [],
    },
    prototype: {
      description: 'A high-fidelity prototype using Itaú\'s existing design language, demonstrating the new home, balance reveal interaction, and quick-action customization.',
      images: [],
    },
    nextSteps: 'Extend the redesign to the transactions and investments sections, and conduct user testing with actual Itaú customers.',
  },
  {
    slug: 'frais-healthy-recipes',
    title: 'FRAIS — Healthy Recipes App',
    category: ['Study', 'UX/UI', 'Food'],
    type: 'study',
    featured: false,
    coverImage: '/assets/projects/frais-healthy-recipes/cover.jpg',
    shortDescription: 'Full UX/UI process for FRAIS, a healthy recipes app designed to make nutritious cooking accessible and enjoyable for busy people.',
    overview: 'FRAIS is a full end-to-end UX study project. The challenge was to design a recipe app that genuinely helps busy, health-conscious people cook nutritious meals — not just browse recipes they never make.',
    goal: 'Design a recipe experience focused on action, not inspiration — prioritizing meals that can be made with ingredients already at home, within the user\'s available time and skill level.',
    personas: [],
    userContext: [
      {
        title: 'The "Sunday Meal Prep" Persona',
        description: '"I want to eat well during the week but I only have time to cook on weekends. I need recipes that are quick to prep in bulk and stay fresh for 4–5 days."',
      },
      {
        title: 'The "Weeknight Cook" Persona',
        description: '"After work I have 30 minutes max. I need to know immediately if I can make something with what\'s in my fridge — not discover I need 8 ingredients I don\'t have."',
      },
    ],
    research: [
      {
        title: 'User Interviews',
        content: '8 interviews with health-conscious home cooks. Biggest pain point with existing apps: discovering a great recipe but not having the ingredients, with no easy substitution guidance.',
      },
    ],
    solutionAlternatives: {
      content: 'Explored three approaches: a pantry-first model (start with what you have), a time-first model (start with how long you have), and an AI-suggested hybrid. Validated the pantry-first model as the highest-value differentiator.',
      images: [],
    },
    solution: {
      concept: 'FRAIS leads with a "What\'s in your fridge?" pantry flow. Users input available ingredients and get ranked recipe matches. A green/yellow/red system shows how close each recipe is to what they have, with smart substitution suggestions.',
      branding: 'Clean, editorial aesthetic — white space, food photography, and a fresh green palette that communicates health without feeling clinical.',
      images: [],
    },
    wireframes: {
      description: 'Wireframes covering the pantry input flow, recipe search/filter, recipe detail page, and grocery list generation.',
      images: [],
    },
    usabilityTests: [
      'Pantry input too tedious for first use — added barcode scan shortcut',
      'Recipe match percentages caused anxiety — replaced with "You\'re missing X" message',
      'Users wanted to save partial pantry state between sessions',
    ],
    prototype: {
      description: 'A complete high-fidelity prototype of the FRAIS app, from onboarding through the full recipe discovery and cooking flow.',
      images: [],
    },
    nextSteps: 'Grocery list integration with delivery platforms, community recipe sharing, and a nutritional tracking layer.',
  },
  {
    slug: 'meditation-app-ui',
    title: 'Meditation App UI — Prototyping Study',
    category: ['Study', 'UI', 'Wellness'],
    type: 'study',
    featured: false,
    coverImage: '/assets/projects/meditation-app-ui/cover.jpg',
    shortDescription: 'A UI prototyping study exploring calm, immersive visual design for a meditation and mindfulness application.',
    overview: 'A focused UI and prototyping study — not a full UX process — exploring the visual and interaction design of a meditation app. The goal was to practice creating deeply calm, immersive digital spaces through typography, color, motion, and sound design integration.',
    goal: 'Explore and prototype a meditation app UI that creates genuine calm — not just "calm aesthetics" — through considered use of space, typography, color, and micro-interactions.',
    solution: {
      concept: 'A dark, ambient UI with soft gradients inspired by dusk and dawn lighting. Large, unhurried typography. Breathing-guide animations as the central UI metaphor. Minimal chrome — the content is the UI.',
      images: [],
    },
    wireframes: {
      description: 'Quick mid-fi wireframes to establish layout hierarchy before moving to high-fidelity.',
      images: [],
    },
    prototype: {
      description: 'A high-fidelity interactive prototype with animated breathing guide, session timer, and ambient sound selection.',
      images: [],
    },
    nextSteps: 'This study was primarily a visual and prototyping exercise. A full product would require user research into meditation practice patterns and a content strategy for the session library.',
  },
]
