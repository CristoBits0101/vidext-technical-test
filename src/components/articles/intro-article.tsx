import RedirectButton from '@/components/buttons/redirect-button'
import { IntroSection } from '@/components/sections/intro-section'

interface HomeIntroProps {
  title: string
  subtitle: string
  padding?: string
}

export default function IntroArticle({
  title = '',
  subtitle = '',
  padding = 'pb-0',
}: HomeIntroProps) {
  // Evita renderizar si no hay valores válidos
  if (!title && !subtitle) return null
  return (
    <article className={`flex flex-col gap-2 text-center ${padding}`}>
      <IntroSection content={title} type='title' />
      <IntroSection content={subtitle} type='subtitle' />
      <RedirectButton buttonText='Explore videos' redirectPath='/watch' />
    </article>
  )
}
