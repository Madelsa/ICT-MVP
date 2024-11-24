'use client'

import { PostsProvider } from './context/posts'
import LeftNavigation from '@/components/map/LeftNavigation'
import Sidebar from '@/components/map/Sidebar'
import '@/app/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-[#F8FAFC]">
        <PostsProvider>
          <div className="min-h-screen flex">
            <LeftNavigation />
            <main className="flex-1 px-4 py-6 max-w-5xl mx-auto">
              {children}
            </main>
            <Sidebar />
          </div>
        </PostsProvider>
      </body>
    </html>
  )
}