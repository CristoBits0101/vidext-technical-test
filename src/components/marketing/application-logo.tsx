import Image from 'next/image'
import Logo from '@/assets/icons/vidext.svg'

export default function ApplicationLogo() {
  return (
    <div>
      <Image
        src={Logo}
        alt='Vidext Company Logo'
        width={100}
        height={100}
        layout='fixed'
      />
    </div>
  )
}
