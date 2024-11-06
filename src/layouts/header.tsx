import ApplicationLogo from '@/components/marketing/application-logo'

export default function Header() {
  return (
    <header className='w-3/5 h-8 sticky top-0 bg-red-200 flex items-center py-8 m-auto'>
      <ApplicationLogo />
    </header>
  )
}
