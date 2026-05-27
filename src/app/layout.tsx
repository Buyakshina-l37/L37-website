import type { Metadata } from 'next'
import { Courier_Prime, Inter } from 'next/font/google'
import './globals.css'

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-courier-prime',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
})

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
    <html lang="en" className={`${courierPrime.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
