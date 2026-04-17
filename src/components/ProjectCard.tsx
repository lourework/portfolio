interface Props {
  slug: string
  title: string
  category: string[]
  shortDescription: string
  coverImage: string
}

export default function ProjectCard({ slug, title, category, shortDescription, coverImage }: Props) {
  return (
    <a href={`/work/${slug}`} className="card block">
      <div className="card-image overflow-hidden bg-[#eeecea] aspect-[4/3] mb-4">
        {coverImage ? (
          <div className="card-img-wrap w-full h-full">
          <img
            src={coverImage}
            alt={title}
            className="card-img w-full h-full object-cover"
          /></div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#E16F7C] font-serif text-2xl italic">
            {title.charAt(0)}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="card-tags flex gap-2 flex-wrap">
          {category.map(cat => (
            <span key={cat} className="text-xs text-[#2C363F] uppercase tracking-widest">
              {cat}
            </span>
          ))}
        </div>
        <h3 className="card-title font-serif text-lg font-semibold leading-snug">
          {title}
        </h3>
        <p className="card-desc text-sm text-[#2C363F] leading-relaxed line-clamp-2">
          {shortDescription}
        </p>
      </div>
    </a>
  )
}
