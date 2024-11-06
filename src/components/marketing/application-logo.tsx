import Image from 'next/image'
import Logo from '@/assets/icons/vidext.svg'

export default function ApplicationLogo() {
  return (
    <div className='w-fit h-fit'>
      <Image
        src={Logo}
        alt='Vidext Company Logo'
        width={75}
        height={75}
        layout='fixed'
        objectFit='cover'
        loading='lazy'
      />
    </div>
  )
}
