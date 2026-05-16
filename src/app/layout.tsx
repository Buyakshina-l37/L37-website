import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'L37 — Expert-Verified Data into Ironclad AI for Healthcare',
  description: 'L37 transforms expert-verified data into ironclad AI for healthcare.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
