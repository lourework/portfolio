import { useState } from 'react'

interface Project {
  slug: string
  title: string
  category: string[]
  shortDescription: string
  coverImage: string
  type: string
}

interface Props {
  projects: Project[]
}

const TABS = ['All', 'UX/UI', 'Front-end', 'UI', 'Study'] as const

export default function ProjectFilter({ projects }: Props) {
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => {
        if (active === 'UX/UI') return p.type === 'case'
        if (active === 'Front-end') return p.type === 'frontend'
        if (active === 'UI') return p.type === 'ui'
        if (active === 'Study') return p.type === 'study'
        return true
      })

  return (
    <div>
      <div className="flex gap-1 mb-12 border-b border-[#e0ddd8] pb-4 flex-wrap">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-1.5 text-sm font-medium transition-colors ${
              active === tab
                ? 'bg-[#1a1a1a] text-white'
                : 'text-[#6b6b6b] hover:text-[#1a1a1a]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {filtered.map(p => (
          <a key={p.slug} href={`/work/${p.slug}`} className="group block">
            <div className="overflow-hidden bg-[#eeecea] aspect-[4/3] mb-4">
              {p.coverImage ? (
                <img
                  src={p.coverImage}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#c8a882] font-serif text-2xl italic">
                  {p.title.charAt(0)}
                </div>
              )}
            </div>
            <div className="space-y-1">
              <div className="flex gap-2 flex-wrap">
                {p.category.map(cat => (
                  <span key={cat} className="text-xs text-[#6b6b6b] uppercase tracking-widest">
                    {cat}
                  </span>
                ))}
              </div>
              <h3 className="font-serif text-lg font-semibold leading-snug group-hover:text-[#c8a882] transition-colors duration-200">
                {p.title}
              </h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed line-clamp-2">{p.shortDescription}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
