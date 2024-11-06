import RedirectButton from '@/components/buttons/redirect-button'
import { IntroSection } from '@/components/sections/intro-section'

interface IntroArticleProps {
  title: string
  subtitle: string
  padding?: string
  buttonText?: string
  redirectPath?: string
}

export default function IntroArticle({
  title = '',
  subtitle = '',
  padding = 'pb-0',
  buttonText = '',
  redirectPath = '/',
}: IntroArticleProps) {
  // Avoid rendering if there are no valid values
  if (!title && !subtitle) return null

  return (
    <article className={`flex flex-col gap-2 text-center ${padding}`}>
      <IntroSection content={title} type='title' />
      <IntroSection content={subtitle} type='subtitle' />
      <RedirectButton buttonText={buttonText} redirectPath={redirectPath} />
    </article>
  )
}
