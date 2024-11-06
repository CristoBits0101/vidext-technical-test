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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Inicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Vídeos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
