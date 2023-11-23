import type { Metadata } from 'next'

import { Source_Code_Pro } from 'next/font/google'
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'


const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Nexus dashboard',
  description: 'Futuristic dashboard for your life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <head></head>
      <UserProvider>
        <body className={sourceCodePro.className}>{children}</body>
      </UserProvider>
    </html>
  )
}
