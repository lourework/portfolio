export interface Skill {
  label: string
  group: 'ux' | 'tools'
}

export const skills: Skill[] = [
  { label: 'User Flows', group: 'ux' },
  { label: 'Style Guides', group: 'ux' },
  { label: 'Design Thinking', group: 'ux' },
  { label: 'Wireframing', group: 'ux' },
  { label: 'Qualitative & Quantitative Research', group: 'ux' },
  { label: 'High-Fidelity Prototypes', group: 'ux' },
  { label: 'Usability Testing', group: 'ux' },
  { label: 'Personas', group: 'ux' },
  { label: 'Accessibility (WCAG)', group: 'ux' },
  { label: 'Design Systems', group: 'ux' },
  { label: 'Heuristic Evaluation', group: 'ux' },
  { label: 'Comparative Analysis', group: 'ux' },

  { label: 'Figma', group: 'tools' },
  { label: 'FigJam', group: 'tools' },
  { label: 'Miro', group: 'tools' },
  { label: 'Maze', group: 'tools' },
  { label: 'Adobe Creative Suite', group: 'tools' },
  { label: 'Webflow', group: 'tools' },
  { label: 'WordPress', group: 'tools' },
  { label: 'Jira', group: 'tools' },
  { label: 'Notion', group: 'tools' },
  { label: 'HTML / CSS / JavaScript', group: 'tools' },
]
