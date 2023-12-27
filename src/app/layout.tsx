import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '../components/Header'
import getCurrentUser from '@/actions/getCurrentUser'
import ToasterProvider from '@/components/ToasterProvider'
import AuthProvider from '@/providers/AuthProvider'
import FeaturesModel from '@/models/FeaturesModel'
import UnauthorizedPage from '../components/UnauthorizedPage'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Attendance Calculator',
  description: 'Helps you calculate your attendance',
}

export const viewport: Viewport = {
  themeColor: '#961018',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();


  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className='max-h-[30px]'>
            <ToasterProvider />
          </div>
          {currentUser && <Header currentUser={currentUser} />}
          {/* <div className='fixed h-full w-full'> */}
          <FeaturesModel />
          {/* </div> */}
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
