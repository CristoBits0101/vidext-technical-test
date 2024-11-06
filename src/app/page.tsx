import IntroArticle from '@/components/articles/intro-article'

export default function HomePage() {
  return (
    <IntroArticle
      title='Crear un reproductor de videos'
      subtitle='Prueba técnica realizada por Cristo Pérez Suárez'
      padding='pb-9'
      buttonText='Explorar vídeos'
      redirectPath='/watch'
    />
  )
}
