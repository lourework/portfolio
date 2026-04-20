import { useState, useRef, useCallback } from 'react'

interface Props {
  images: string[]
  alt?: string
}

// Physical card deck spreading to the bottom-right like a hand of cards
const STACK = [
  { tx: 0,  ty: 0,  rot: 0, opacity: 1,    z: 3, shadow: '0 16px 48px rgba(0,0,0,0.22)' },
  { tx: 16, ty: 10, rot: 1, opacity: 0.97, z: 2, shadow: '0 10px 32px rgba(0,0,0,0.16)' },
  { tx: 30, ty: 18, rot: 2, opacity: 0.92, z: 1, shadow: '0 6px 18px rgba(0,0,0,0.12)'  },
]

// Bottom padding reserves layout space so deck spread doesn't overlap content below
const STACK_BOTTOM = 36

const EASE = 'cubic-bezier(0.22,1,0.36,1)'
const DURATION = 420

export default function ImageGallery({ images, alt = '' }: Props) {
  if (!images || images.length === 0) return null
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        style={{ width: '90%', height: 'auto', display: 'block', margin: '40px auto 32px' }}
      />
    )
  }
  return <Gallery images={images} alt={alt} />
}

function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const n = images.length
  const [activeIndex, setActiveIndex] = useState(0)
  const [exitingIndex, setExitingIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [animating, setAnimating] = useState(false)
  const [dragDelta, setDragDelta] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const wasDrag = useRef(false)

  const advance = useCallback((dir: 'next' | 'prev') => {
    if (animating) return
    const next = dir === 'next' ? (activeIndex + 1) % n : (activeIndex - 1 + n) % n
    setDirection(dir)
    setAnimating(true)
    setExitingIndex(activeIndex)
    setActiveIndex(next)
    setTimeout(() => { setExitingIndex(null); setAnimating(false) }, DURATION)
  }, [activeIndex, animating, n])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX
    wasDrag.current = false
    setIsDragging(true)
    ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const d = e.clientX - dragStartX.current
    if (Math.abs(d) > 5) wasDrag.current = true
    setDragDelta(d)
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setIsDragging(false)
    const d = e.clientX - dragStartX.current
    setDragDelta(0)
    if (Math.abs(d) >= 60) advance(d < 0 ? 'next' : 'prev')
    else if (!wasDrag.current) advance('next')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') advance('next')
    if (e.key === 'ArrowLeft') advance('prev')
  }

  const cardStyle = (i: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }

    if (i === exitingIndex) {
      const exitX = direction === 'next' ? '-110%' : '110%'
      const exitRot = direction === 'next' ? -4 : 4
      return {
        ...base,
        transform: `translateX(${exitX}) rotate(${exitRot}deg)`,
        opacity: 0,
        zIndex: 10,
        pointerEvents: 'none',
        transition: `transform ${DURATION}ms ${EASE}, opacity ${DURATION}ms ${EASE}`,
      }
    }

    const sp = (i - activeIndex + n) % n

    if (sp >= 3) {
      // Pre-position at the deepest slot so entering cards are already in place — only opacity transitions in
      const deep = STACK[2]
      return {
        ...base,
        transform: `translateX(${deep.tx}px) translateY(${deep.ty}px) rotate(${deep.rot}deg)`,
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none',
        transition: `opacity ${DURATION}ms ${EASE}`,
      }
    }

    const s = STACK[sp]
    const isFront = sp === 0
    const lx = isFront && isDragging ? dragDelta * 0.55 : 0
    const rot = isFront && isDragging ? dragDelta * 0.025 : s.rot

    return {
      ...base,
      transform: `translateX(calc(${s.tx}px + ${lx}px)) translateY(${s.ty}px) rotate(${rot}deg)`,
      opacity: s.opacity,
      zIndex: s.z,
      boxShadow: s.shadow,
      transition: isDragging ? 'none' : `transform ${DURATION}ms ${EASE}, opacity ${DURATION}ms ${EASE}`,
      pointerEvents: isFront ? 'auto' : 'none',
    }
  }

  return (
    <div
      className="image-gallery"
      role="region"
      aria-label="Image gallery"
      aria-live="polite"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        position: 'relative',
        width: '90%',
        margin: '40px auto 32px',
        paddingBottom: `${STACK_BOTTOM}px`,
        userSelect: 'none',
        outline: 'none',
      }}
    >
      {/* Spacer — drives wrapper height from the active image's natural dimensions */}
      <img
        src={images[activeIndex]}
        alt=""
        aria-hidden={true}
        draggable={false}
        style={{ width: '100%', height: 'auto', display: 'block', visibility: 'hidden' }}
      />

      {images.map((src, i) => (
        <div key={`${i}-${src}`} style={cardStyle(i)}>
          <img
            src={src}
            alt={`${alt} — image ${i + 1}`}
            draggable={false}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      ))}
    </div>
  )
}
