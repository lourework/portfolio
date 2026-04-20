interface Props {
  slug: string
  title: string
  category: string[]
  shortDescription: string
  coverImage: string
}

export default function ProjectCard({ slug, title, category, shortDescription, coverImage }: Props) {
  return (
    <a href={`${import.meta.env.BASE_URL}/work/${slug}`.replace(/\/+/g, '/')} className="card block">
      <div className="card-image overflow-hidden bg-[#eeecea] aspect-[4/3] mb-4">
        {coverImage ? (
          <div className="card-img-wrap w-full h-full">
          <img
            src={`${import.meta.env.BASE_URL}/${coverImage.replace(/^\//, '')}`.replace(/\/+/g, '/')}
            alt={title}
            className="card-img w-full h-full object-cover"
          /></div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--color-accent)] font-serif text-2xl italic">
            {title.charAt(0)}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="card-tags flex gap-2 flex-wrap">
          {category.map(cat => (
            <span key={cat} className="text-xs px-2.5 py-1 border border-[var(--color-border)] text-[var(--color-muted)] cursor-default transition-all duration-200 hover:border-[var(--color-accent)] hover:italic">
              {cat}
            </span>
          ))}
        </div>
        <h3 className="card-title font-serif text-lg font-semibold leading-snug">
          {title}
        </h3>
        <p className="card-desc text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">
          {shortDescription}
        </p>
      </div>
    </a>
  )
}
