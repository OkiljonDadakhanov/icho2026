import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'IChO 2026',
  description: 'IChO 2026 - Uzbekistan',
  generator: 'IChO 2026 - Uzbekistan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden m-0 p-0">
      <body className="overflow-x-hidden w-full max-w-full m-0 p-0 leading-none">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
