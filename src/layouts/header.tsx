import ApplicationLogo from '@/components/marketing/application-logo'

export default function Header() {
  return (
    <header className='w-full h-8 sticky top-0 bg-red-200 flex items-center p-8'>
      <ApplicationLogo />
    </header>
  )
}
