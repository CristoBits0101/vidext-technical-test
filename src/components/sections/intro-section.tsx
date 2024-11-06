interface IntroSectionProps {
  content: string
  type: 'title' | 'subtitle'
}

export function IntroSection({ content, type }: IntroSectionProps) {
  if (!content) return null
  return type === 'title' ? (
    <section className='text-6xl font-semibold'>
      <h1 className='text-balance'>{content}</h1>
    </section>
  ) : (
    <section className='text-neutral-500 lg:px-0'>
      <p className='text-pretty text-lg'>{content}</p>
    </section>
  )
}
