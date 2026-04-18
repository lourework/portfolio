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
                : 'text-[#2C363F] hover:text-[#1a1a1a]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {filtered.map((p, i) => (
          <div
            key={active + p.slug}
            className="card-wrapper is-visible"
            style={{ '--i': i } as React.CSSProperties}
          >
            <a href={`${import.meta.env.BASE_URL}/work/${p.slug}`.replace(/\/+/g, '/')} className="card block">
              <div className="card-image overflow-hidden bg-[#eeecea] aspect-[4/3] mb-4">
                {p.coverImage ? (
                  <div className="card-img-wrap w-full h-full">
                    <img
                      src={`${import.meta.env.BASE_URL}/${p.coverImage.replace(/^\//, '')}`.replace(/\/+/g, '/')}
                      alt={p.title}
                      className="card-img w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#E16F7C] font-serif text-2xl italic">
                    {p.title.charAt(0)}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <div className="card-tags flex gap-2 flex-wrap">
                  {p.category.map(cat => (
                    <span
                      key={cat}
                      className="text-xs px-2.5 py-1 border border-[#e0ddd8] text-[#2C363F] cursor-default transition-all duration-200 hover:border-[#E16F7C] hover:italic"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="card-title font-serif text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="card-desc text-sm text-[#2C363F] leading-relaxed line-clamp-2">{p.shortDescription}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
