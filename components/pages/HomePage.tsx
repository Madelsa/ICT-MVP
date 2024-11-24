// components/pages/HomePage.tsx
import LeftNavigation from '@/components/map/LeftNavigation'
import MainFeed from '@/components/map/MainFeed'
import Sidebar from '@/components/map/Sidebar'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto h-screen px-4 py-6 flex gap-6">
        <div className="w-64 shrink-0">
          <LeftNavigation />
        </div>
        <div className="flex-1 overflow-auto">
          <MainFeed />
        </div>
        <div className="w-80 shrink-0 overflow-auto">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}