import Image from 'next/image'
import Logo from '@/assets/icons/vidext.svg'

export default function ApplicationLogo() {
  return (
    <div className='w-full h-full flex items-center'>
      <Image
        src={Logo}
        alt='Vidext Company Logo'
        width={100}
        height={30}
        layout='fixed'
        objectFit='cover'
        loading='lazy'
        className='aspect-video'
      />
    </div>
  )
}
