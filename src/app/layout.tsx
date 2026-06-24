import type { Metadata } from 'next'
import { Courier_Prime, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import NavMobile from '@/components/layout/NavMobile'
import { Analytics } from '@vercel/analytics/next'

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

// TODO: replace /images/hero-bg.png with a dedicated /images/og-image.png (1200×630)
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/L37-favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/L37-favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/L37-favicon/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/L37-favicon/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/L37-favicon/apple-touch-icon.png', sizes: '180x180' },
  },
  title: 'L37: Physical AI, Agentic AI & Clinical AI — One Integrated Platform',
  description: 'L37 builds healthcare-native digital twins for hospital robot training, simulation and regulatory validation.',
  metadataBase: new URL('https://l37.co'),
  openGraph: {
    title: 'L37: Physical AI, Agentic AI & Clinical AI — One Integrated Platform',
    description: 'L37 builds healthcare-native digital twins for hospital robot training, simulation and regulatory validation.',
    url: 'https://l37.co',
    siteName: 'L37',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'L37 — Physical AI for Healthcare',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L37: Physical AI, Agentic AI & Clinical AI — One Integrated Platform',
    description: 'L37 builds healthcare-native digital twins for hospital robot training, simulation and regulatory validation.',
    images: ['/images/hero-bg.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${courierPrime.variable} ${inter.variable}`}>
      <body>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="md:hidden">
          <NavMobile />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
