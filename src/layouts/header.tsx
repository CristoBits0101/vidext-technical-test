import ApplicationLogo from '@/components/marketing/application-logo'
import NavbarMenu from '@/components/navigation/navbar-menu'

export default function Header() {
  return (
    <header className='w-3/5 md:w-full md:px-4 h-8 sticky top-0 py-12 m-auto grid grid-cols-[6.25rem_1fr_6.25rem] place-items-center place-content-center gap-2'>
      <ApplicationLogo />
      <NavbarMenu />
    </header>
  )
}
