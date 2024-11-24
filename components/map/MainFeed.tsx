"use client"
import PostCard from './PostCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, PlusCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { usePosts } from '@/app/context/posts'
import { useState, useEffect } from 'react'

export default function MainFeed() {
  const router = useRouter()
  const { posts } = usePosts()
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const notification = params.get('notification')
    if (notification) {
      setNotificationMessage(notification)
      setShowNotification(true)
      router.replace('/')
      setTimeout(() => setShowNotification(false), 5000)
    }
  }, [router])

  return (
    <div className="w-full max-w-2xl mx-auto">
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg animate-fade-in-down">
          {notificationMessage}
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-100 pb-2">Latest Deals</h2>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="relative flex-1">
          <Input 
            className="w-full pl-10 pr-4 py-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400" 
            placeholder="Search deals..." 
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
        </div>
        <Button 
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => router.push('/new-deal')}
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          New Deal
        </Button>
      </div>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  )
}

