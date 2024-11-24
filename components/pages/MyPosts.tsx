'use client'

import { usePosts } from '@/app/context/posts'
import PostCard from '@/components/map/PostCard'

export default function MyPostsPage() {
  const { posts } = usePosts()
  const currentUser = 'Current User'
  
  const userPosts = posts.filter(post => post.username === currentUser)

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-100 pb-2">My Deals</h1>
      {userPosts.length === 0 ? (
        <p className="text-gray-500 text-center py-8">You haven't created any deals yet.</p>
      ) : (
        <div className="space-y-6">
          {userPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      )}
    </div>
  )
}

