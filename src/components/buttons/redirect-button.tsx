import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface RedirectButtonProps {
  buttonText: string
  redirectPath: string
}

export default function RedirectButton({
  buttonText = '',
  redirectPath = '',
}: RedirectButtonProps) {
  // Avoid rendering if there are no valid values
  if (!redirectPath || !buttonText) return null
  return (
    <Link href={redirectPath}>
      <Button className='inline-flex items-center justify-center gap-2 rounded-full text-sm leading-normal disabled:pointer-events-none disabled:opacity-90 whitespace-nowrap transition duration-300 ease-in-out active:scale-95 bg-[#C2F902] font-semibold text-black border border-[#C2F902] px-4 py-2.5 w-max hover:bg-[#b8ee02] hover:border-[#b8ee02] mt-2'>
        {buttonText}
      </Button>
    </Link>
  )
}
