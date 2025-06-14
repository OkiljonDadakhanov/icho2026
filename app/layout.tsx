import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
