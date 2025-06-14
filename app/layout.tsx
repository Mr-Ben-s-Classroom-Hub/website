import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mr. Bens Classroom Hub',
  description: 'Your comprehensive educational resource platform. Discover interactive learning materials, engaging blog content, and powerful educator tools all in one place.',
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
