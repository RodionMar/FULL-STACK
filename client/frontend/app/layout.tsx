import './globals.scss'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { Providers } from './GlobalRedux/provider';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test task',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </Providers>
  )
}