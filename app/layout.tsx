import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BEAM Retail NGO - Community-Made Products & Local Projects',
  description: 'Support local communities through community-made products. Shop, donate, and help fund local projects.',
  keywords: 'NGO, community, local products, donations, retail, sustainable',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
