import Header from '@/layouts/header'
import type { Metadata } from 'next'
import { figtree } from '@/lib/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Cristo Pérez Suárez | Technical Test',
  description: 'Technical test performed by Cristo Rubén Pérez Suárez',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${figtree.className} antialiased w-full min-h-dvh bg-[#FAFAF9] text-base grid grid-rows-[auto_1fr]`}
      >
        <Header />
        <main className='w-full grid place-content-center'>{children}</main>
      </body>
    </html>
  )
}
