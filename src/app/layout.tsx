import Header from '@/layouts/header'
import TrpcProvider from '@/components/providers/trpc-provider.tsx'
import type { Metadata } from 'next'
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='antialiased w-full min-h-dvh bg-[#FAFAF9] text-sm grid grid-rows-[auto_1fr]'>
        <TrpcProvider>
          <Header />
          <main className='w-full flex justify-center items-center p-2'>
            {children}
          </main>
        </TrpcProvider>
      </body>
    </html>
  )
}
