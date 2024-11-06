interface HomeIntroProps {
  title: string
  subtitle: string
}

export default function HomeIntro({ title, subtitle }: HomeIntroProps) {
  return (
    <article className='flex flex-col gap-4 text-center pb-9'>
      <section className='text-4xl font-semibold'>
        <h1 className='text-balance'>{title}</h1>
      </section>
      <section className='text-neutral-500 lg:px-0'>
        <p className='text-pretty text-lg'>{subtitle}</p>
      </section>
    </article>
  )
}
