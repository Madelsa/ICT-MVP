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
      <body className="h-full">
        <PostsProvider>
          <div className="h-screen flex flex-col bg-blue-50">
            <div className="flex-1 container mx-auto flex gap-6">
              <LeftNavigation />
              <main className="flex-1 py-8">
                {children}
              </main>
              <Sidebar />
            </div>
          </div>
        </PostsProvider>
      </body>
    </html>
  )
}