import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LAJ Designs | Architecture & Interior Design Studio',
  description: 'LAJ Designs is a premier architecture and interior design studio specializing in residential, commercial, hospitality, religious, and educational spaces. We craft environments that inspire.',
  keywords: 'LAJ Designs, architecture, interior design, residential design, commercial design, hospitality design, religious architecture, educational design, interior studio',
  authors: [{ name: 'LAJ Designs' }],
  openGraph: {
    title: 'LAJ Designs | Architecture & Interior Design Studio',
    description: 'Crafting purposeful spaces across residential, commercial, hospitality, religious, and educational sectors.',
    url: 'https://www.lajdesigns.com',
    siteName: 'LAJ Designs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAJ Designs | Architecture & Interior Design Studio',
    description: 'Crafting purposeful spaces across residential, commercial, hospitality, religious, and educational sectors.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
