import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export default function NavbarMenu() {
  return (
    <NavigationMenu className='text-[#262626] font-light w-full'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-normal`}>
              Inicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/watch' legacyBehavior passHref>
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-normal`}>
              Vídeos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
