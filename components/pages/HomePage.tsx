// components/pages/HomePage.tsx
import LeftNavigation from '@/components/map/LeftNavigation'
import MainFeed from '@/components/map/MainFeed'
import Sidebar from '@/components/map/Sidebar'
import Header from '@/components/map/Header'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6 flex gap-6">
        <div className="w-64 shrink-0">
          <LeftNavigation />
        </div>
        <div className="flex-1">
          <MainFeed />
        </div>
        <div className="w-80 shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}