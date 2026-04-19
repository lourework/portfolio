export interface Project {
  slug: string
  title: string
  category: string[]
  type: 'case' | 'frontend' | 'ui' | 'study'
  featured: boolean
  coverImage: string
  shortDescription: string
}

export interface ProjectCase extends Project {
  type: 'case'
  role: string
  product: string
  platform: string
  duration: string
  focus: string
  overview: string
  problem: string
  goals: string[]
  myRole: string[]
  process: string[]
  solutions: {
    title: string
    description: string
    images: string[]
    figmaUrl?: string
  }[]
  impact: string[]
  learnings: string
}

export interface ProjectFrontend extends Project {
  type: 'frontend'
  overview: string
  insight?: string
  stack: string[]
  images: string[]
}

export interface ProjectUI extends Project {
  type: 'ui'
  contextNote: string
  groups: {
    title: string
    description?: string
    images: string[]
    figmaUrl?: string
  }[]
}

export interface ProjectStudy extends Project {
  type: 'study'
  overview: string
  goal?: string
  personas?: { title: string; image: string }[]
  userContext?: { title: string; description: string; image?: string }[]
  research?: { title: string; content: string; image?: string }[]
  solutionAlternatives?: { content: string; images: string[] }
  solution?: { concept: string; branding?: string; images: string[] }
  wireframes?: { description: string; images: string[]; figmaUrl?: string }
  usabilityTests?: string[]
  prototype?: { description: string; images: string[]; videoUrl?: string; figmaUrl?: string }
  nextSteps?: string
}

import { cases } from './cases'
import { frontendProjects } from './frontend'
import { uiProjects } from './ui'
import { studyProjects } from './study'

export const allProjects: (ProjectCase | ProjectFrontend | ProjectUI | ProjectStudy)[] = [
  ...cases,
  ...frontendProjects,
  ...uiProjects,
  ...studyProjects,
]
