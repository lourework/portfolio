import type { ProjectStudy } from './index'

export const studyProjects: ProjectStudy[] = [
  {
    slug: 'cozy-psychological-care',
    title: 'COZY — Remote Psychological Care',
    category: ['Study', 'UX', 'Health'],
    type: 'study',
    featured: false,
    coverImage: '/assets/projects/cozy-psychological-care/cover.jpg',
    shortDescription: 'End-to-end UX study for COZY, a remote psychological care platform connecting patients with therapists in Brazil.',
    overview: 'In my first UX Design study, I accepted the challenge of understanding how to take advantage of telemedicine opportunities to improve the health of Brazilians who need psychological or psychiatric help, creating a solution focused on care and monitoring without geographic barriers.',
    goal: 'Create an online psychological care platform that connects psychologists with patients, facilitating care and follow-up, so that Brazilians can be assisted remotely.',
    personas: [
      {
        title: 'Julia Maria, 24 — Patient',
        image: '/assets/projects/cozy-psychological-care/personas.png',
      },
    ],
    userContext: [
      {
        title: 'The Current Scenario',
        description: 'The approval of online psychological care took place in November 2019 by the CRP (Regional Psychology Council). By April 2020, a month after the Covid-19 pandemic began, Google searches for online therapy had increased by more than 88%. With social isolation, the safest alternative for patients who chose not to interrupt treatment is through online care — which can also be more convenient, economical, and less time consuming.',
        image: '/assets/projects/cozy-psychological-care/mapamedica.png',
      },
      {
        title: 'Journey Map — Patient & Psychologist',
        description: 'I created two proto-personas and their journeys — Julia Maria (patient) and Letícia (psychologist) — which through qualitative and quantitative research were validated and updated.',
        image: '/assets/projects/cozy-psychological-care/mapapaciente.png',
      },
    ],
    research: [
      {
        title: 'Validating Suppositions',
        content: 'After defining the proto-personas and their user journeys, through the knowledge x impact prioritization method, I established a CSD Matrix with my main assumptions and doubts regarding potential users.',
        image: '/assets/projects/cozy-psychological-care/suposicoes.jpeg',
      },
      {
        title: 'Quantitative Research',
        content: 'Of the 40 people who responded to the survey aimed at the general public, 62% do or have already undergone therapy and 37.5% said they never did. For people who have never had therapy, 46% answered that they think psychological care is too expensive. Regarding the service, 86.7% think they would be more comfortable with face-to-face service than online. From the 6 psychologists interviewed, all currently attend online — but only 50% did so before social isolation.',
        image: '/assets/projects/cozy-psychological-care/impacto.jpeg',
      },
      {
        title: 'Qualitative Research',
        content: 'With the answers from the quantitative survey I conducted a qualitative survey with 7 people. Key findings: some patients felt more comfortable having their first consultation remotely; psychologists\' biggest frustrations are with connection stability; patient compliance and punctuality remotely is surprisingly good; the secrecy of the remote consultation is a concern for psychologists; the most used means of dissemination is through referral.',
        image: '/assets/projects/cozy-psychological-care/matriz_impactoxesforco.jpeg',
      },
    ],
    solutionAlternatives: {
      content: 'Using the "How could we" technique, I listed the opportunities found: How could we guide the professional and facilitate the process of their online care? How could we convey confidence to patients so they feel comfortable with online therapy? How could we facilitate payment for appointments? How could we solve the problem of confidentiality of consultations between patients and psychologists? I chose to prioritize confidentiality — and the solution I offer is Cozy.',
      images: [],
    },
    solution: {
      concept: 'Cozy is an application where it will be possible to find an expert based on the answers to a questionnaire right when the user creates their account. During the consultation, made through video call, it will also be possible to send text messages — thinking of moments when the patient is not in a suitable place to carry out the consultation and is insecure to report a problem aloud.',
      branding: 'The name Cozy comes from English and means welcoming — that is the purpose of the application, to bring welcome to those who need psychological care. The construction of the logo is done with lowercase letters and the symbol with a conversation balloon with a smile. The orange color was chosen because it transmits joy, energy, and warmth. The chosen font was Nunito, a sans serif font-family with rounded edges that speaks to the chosen identity.',
      images: [
        '/assets/projects/cozy-psychological-care/logo.png',
        '/assets/projects/cozy-psychological-care/stylegride.png',
        '/assets/projects/cozy-psychological-care/Group_15.png',
      ],
    },
    wireframes: {
      description: 'I created Cozy sketches using the Crazy 8\'s technique, then moved to a low-fidelity prototype. I applied the improvement solutions discovered with the scribble frame tests in the medium fidelity prototype (wireframe), defining and improving the flow.',
      images: [
        '/assets/projects/cozy-psychological-care/rabiscofraes.png',
        '/assets/projects/cozy-psychological-care/wireframes.png',
      ],
    },
    usabilityTests: [
      'The form where the person selects their needs lacks a confirmation button',
      'In the expert list, the times placed in the slide form are confusing for the user',
      'On the expert page, users expected to see the date calendar before the expert description section',
    ],
    prototype: {
      description: 'Applying the improvement solutions identified in the wireframe usability tests and styles, I arrived at the high-fidelity prototype. Cozy was the result of my first UX Design process — I learned to put the user at the center of my decisions and to think how the user would think when using a product.',
      images: [],
      videoUrl: 'https://www.youtube.com/watch?v=ymiBkkMr-pA',
    },
    nextSteps: 'The next step will be to implement payment methods and history for monitoring, both for the patient and the psychologist. I also see the need to expand Cozy to the desktop.',
  },
  {
    slug: 'eva-ux-bootcamp',
    title: 'EVA — UX Design Bootcamp',
    category: ['Study', 'UX', 'Social Impact'],
    type: 'study',
    featured: false,
    coverImage: '/assets/projects/eva-ux-bootcamp/cover.jpg',
    shortDescription: 'UX bootcamp project — EVA, a digital platform to empower women in technology and support their protagonism in the labour market.',
    overview: 'Project developed during a UX Design Bootcamp, in partnership with Ella Campos, Ibraim Bernardo, and Luiza Ribeiro. The prominence of minorities in the labour market was the central theme and basis for the entire journey. The Double Diamond method was used for development.',
    goal: 'Design a digital solution to empower women in technology, working on their insecurities to support them towards protagonism in the labour market.',
    personas: [
      {
        title: 'Betta, 26 — Working, seeking to reposition in the job market',
        image: '/assets/projects/eva-ux-bootcamp/Frame_39.png',
      },
    ],
    userContext: [
      {
        title: 'Understanding the Problem Space',
        description: 'We distributed the survey to our personal networks and obtained 98 respondents in 3 days. Among these 98, 61 were women who scored their pain and problems in a way that made us choose them as our audience.',
      },
    ],
    research: [
      {
        title: 'Quantitative Research',
        content: 'Key paths in the survey: Looking for a job — people described problems of prejudice from companies, and insecurities about their qualifications, behaviour, and appearance. Already working — we focused on knowing about the company\'s culture and especially if the person felt comfortable expressing their identity and visions in the place where they work.',
        image: '/assets/projects/eva-ux-bootcamp/c3cfec4a-0fc6-4371-b14a-ffe1956659cc_rw_1920.png',
      },
      {
        title: 'Qualitative Research',
        content: 'We talked to two women — one currently looking for a job and another who held a leadership position and now works with women\'s support organizations.',
        image: '/assets/projects/eva-ux-bootcamp/c54a257a-6505-4d2e-bb56-d1bcc26a23d8_rw_1920.png',
      },
      {
        title: 'Card Sorting & Top Insights',
        content: 'We categorized all our certainties and insights taken from the interviews and completed the first stage of the diamond by identifying a central problem: insecurity; and our audience: Women in Technology.',
        image: '/assets/projects/eva-ux-bootcamp/1f6cd7d5-9a15-4785-a373-12278b97ce13_rw_1920.png',
      },
      {
        title: 'Benchmarking',
        content: 'Analysis of all female empowerment services within and outside the technology area. One interesting insight: few of them offer an app and/or an open community.',
        image: '/assets/projects/eva-ux-bootcamp/b27545d7-8b26-4690-97da-385be1970b07_rw_1920.png',
      },
    ],
    solution: {
      concept: 'After Crazy 8\'s and Free Brainstorming, the team arrived at EVA: a digital solution with the aim of empowering women and supporting them towards protagonism in the labor market. We used the MoSCoW method to define the MVP from our large solution scope.',
      images: [
        '/assets/projects/eva-ux-bootcamp/798494dd-588d-46a4-8b4b-df929fe0d63c_rw_1920.jpeg',
        '/assets/projects/eva-ux-bootcamp/35ac29e9-5b8a-416e-9908-0272bcbd7bdb_rw_1920.jpeg',
        '/assets/projects/eva-ux-bootcamp/5fc6c7f6-67d5-4cf3-b484-6b2d8c2262db_rw_1200.jpeg',
        '/assets/projects/eva-ux-bootcamp/65345cf4-46cd-4f97-8b16-6f3c963b493f_rw_1200.jpeg',
      ],
    },
    wireframes: {
      description: 'We defined the journeys of the user from the moment they find information on the platform on Social Networks, until the moment they start to receive feedback in their publication in the community. Created user flow and low-fidelity prototype.',
      images: [
        '/assets/projects/eva-ux-bootcamp/33f0a153-cc43-4341-ba58-e340daa908ae_rw_1200.png',
        '/assets/projects/eva-ux-bootcamp/7d4eb6dc-fb35-4ffa-9911-f40b7cfacbfe_rw_1200.png',
        '/assets/projects/eva-ux-bootcamp/bc554062-c08c-47ed-a00b-49b88d11ebb9_rw_1200.png',
        '/assets/projects/eva-ux-bootcamp/c130ed22-95aa-4ae6-a6ff-233a2c998249_rw_1200.png',
      ],
    },
    prototype: {
      description: 'High-fidelity prototype covering the key user flows on the EVA platform.',
      images: [
        '/assets/projects/eva-ux-bootcamp/449f0607-d646-450b-a1a8-af95d6d80d67_rw_600.png',
        '/assets/projects/eva-ux-bootcamp/5243ddb5-5c3f-4b6e-8c06-999dafaf1b58_rw_600.png',
        '/assets/projects/eva-ux-bootcamp/31c330d0-b04f-42a2-9ee7-53ac9a537a48_rw_600.png',
        '/assets/projects/eva-ux-bootcamp/dfd00fb9-7b53-4a44-a0e8-ba953655b537_rw_600.png',
      ],
      figmaUrl: 'https://www.figma.com/file/OAnKO82lQ9LtwHLfVpK9kT/EVA?node-id=1%3A29',
    },
    nextSteps: 'Future work would focus on expanding the community features, refining the mentorship matching flow, and conducting usability testing with women in different stages of their careers in tech.',
  },
  {
    slug: 'banco-itau-mobile-redesign',
    title: 'Banco Itaú — Mobile App Home Redesign',
    category: ['Study', 'UX', 'Fintech'],
    type: 'study',
    featured: false,
    coverImage: '/assets/projects/banco-itau-mobile-redesign/cover.jpg',
    shortDescription: 'A redesign study of the Banco Itaú mobile app home screen, improving information hierarchy and task access for everyday banking.',
    overview: 'This product design case was developed during a Product Design bootcamp, based on the analysis of real customer feedback collected from complaint platforms and app store reviews. The goal was to identify usability issues within Banco Itaú\'s digital experience and propose a high-impact, feasible improvement.',
    goal: 'Redesign the home screen to surface the user\'s most important financial information and frequent tasks, reducing promotional noise and cognitive load for everyday banking.',
    research: [
      {
        title: 'Problem Discovery',
        content: 'Multiple user complaints revealed friction across the banking experience, including service delays, high fees, and fragmented apps. Within the mobile app, a recurring issue stood out: the home screen organization. The existing home prioritized loans and investments, while frequently used services and shortcuts were hidden or required additional navigation.',
      },
      {
        title: 'Prioritization Matrix',
        content: 'Customer complaints were analyzed and grouped using an affinity diagram. Issues were evaluated through a prioritization matrix, balancing user impact and implementation effort. The home screen organization emerged as a low-effort, high-impact opportunity.',
      },
    ],
    solution: {
      concept: 'A redesigned home screen was proposed with customizable highlighted shortcuts based on user preferences, core services distributed more evenly across the screen, and a reduced need for scrolling and hidden navigation. The solution aimed to improve clarity, accessibility, and speed in everyday interactions.',
      images: [],
    },
    wireframes: {
      description: 'Mid-fidelity wireframes exploring the new home screen architecture and a simplified navigation structure.',
      images: [],
    },
    prototype: {
      description: 'A high-fidelity prototype using Itaú\'s existing design language, demonstrating the new home, balance reveal interaction, and quick-action customization.',
      images: [],
    },
    nextSteps: 'Extend the redesign to the transactions and investments sections, and conduct user testing with actual Itaú customers. Small structural changes can have a significant impact on perceived usability — prioritization frameworks help focus design efforts on realistic, high-value improvements.',
  },
  {
    slug: 'frais-healthy-recipes',
    title: 'FRAIS — Healthy Recipes App',
    category: ['Study', 'UX/UI', 'Food'],
    type: 'study',
    featured: false,
    coverImage: '/assets/projects/frais-healthy-recipes/cover.jpg',
    shortDescription: 'UI concept for FRAIS, a healthy recipes app designed to encourage healthier daily habits.',
    overview: 'This UI concept was developed as part of a French course project, with the objective of proposing a digital solution to encourage healthier daily habits.',
    goal: 'Design a recipe app that allows users to search for healthy meals based on the ingredients they already have at home, focusing on simplicity and accessibility.',
    solution: {
      concept: 'FRAIS is a recipe app that allows users to search for healthy meals based on the ingredients they already have at home. The concept focuses on simplicity and accessibility, reducing friction in meal planning and promoting more conscious food choices through an intuitive search experience. The project explored interface clarity, content organization, and user-friendly navigation, translating a functional idea into a clean and approachable UI concept.',
      images: [],
    },
    wireframes: {
      description: 'Wireframes covering the ingredient-based search flow, recipe matching, and recipe detail pages.',
      images: [],
    },
    prototype: {
      description: 'A clean UI prototype exploring how ingredient-based search can make healthy cooking more accessible.',
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
    overview: 'This UI design study was developed during a prototyping bootcamp, with a focus on exploring interaction, motion, and visual clarity in wellness-oriented interfaces.',
    goal: 'Explore and prototype a meditation app UI that creates genuine calm through considered use of space, typography, color, and micro-interactions.',
    solution: {
      concept: 'Using Figma and its Smart Animate functionality, I designed and prototyped a meditation app that simulates guided breathing techniques. The goal was to create a calm, intuitive experience where motion supports rhythm, timing, and user focus — reinforcing breathing patterns through smooth transitions and visual feedback. The study explored how micro-interactions and animation can enhance usability, emotional engagement, and comprehension in mindfulness products without overwhelming the user or distracting from the core experience.',
      images: [],
    },
    wireframes: {
      description: 'Quick mid-fidelity wireframes to establish layout hierarchy before moving to high-fidelity.',
      images: [],
    },
    prototype: {
      description: 'A high-fidelity interactive prototype with animated breathing guide, session timer, and ambient sound selection — created using Figma Smart Animate.',
      images: [],
    },
    nextSteps: 'This study was primarily a visual and prototyping exercise. A full product would require user research into meditation practice patterns and a content strategy for the session library.',
  },
]
