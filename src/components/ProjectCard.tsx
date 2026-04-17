import { useState } from 'react'

interface Props {
  slug: string
  title: string
  category: string[]
  shortDescription: string
  coverImage: string
}

export default function ProjectCard({ slug, title, category, shortDescription, coverImage }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={`/work/${slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden bg-[#eeecea] aspect-[4/3] mb-4">
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#c8a882] font-serif text-2xl italic">
            {title.charAt(0)}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex gap-2 flex-wrap">
          {category.map(cat => (
            <span key={cat} className="text-xs text-[#6b6b6b] uppercase tracking-widest">
              {cat}
            </span>
          ))}
        </div>
        <h3 className={`font-serif text-lg font-semibold leading-snug transition-colors duration-200 ${hovered ? 'text-[#c8a882]' : 'text-[#1a1a1a]'}`}>
          {title}
        </h3>
        <p className="text-sm text-[#6b6b6b] leading-relaxed line-clamp-2">{shortDescription}</p>
      </div>
    </a>
  )
}
