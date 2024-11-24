"use client"
import { createContext, useContext, useState, ReactNode } from 'react'

interface Post {
  username: string
  avatar: string
  content: string
  timestamp: string
  initialVotes?: number
  images?: string[]
}

interface PostsContextType {
  posts: Post[]
  addPost: (post: Post) => void
}

const PostsContext = createContext<PostsContextType | undefined>(undefined)

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([
    {
      username: 'Ahmed Hassan',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Amazing deal alert! 🔥 Found the latest iPhone 15 Pro Max (256GB) for AED 4,299 at Sharaf DG Mall of Emirates. Regular price is AED 4,799. Limited time offer!',
      timestamp: '2 hours ago'
    },
    {
      username: 'Sara Al Mahmoud',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Just spotted a great deal on Samsung 65" QLED TV at Carrefour City Centre. AED 2,999 instead of AED 3,499. They also offer free delivery and installation! Hurry up, only 5 units left.',
      timestamp: '4 hours ago'
    },
    {
      username: 'Mohammed Ali',
      avatar: '/placeholder.svg?height=40&width=40',
      content: "PSA: Amazon.ae has the MacBook Air M2 (8GB/256GB) for AED 3,799 with an additional 10% off when using ADCB card. Lowest price I have seen this year! Link in comments.",
      timestamp: '6 hours ago'
    }
  ])

  const addPost = (post: Post) => {
    setPosts(prevPosts => [post, ...prevPosts])
  }

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  )
}

export function usePosts() {
  const context = useContext(PostsContext)
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostsProvider')
  }
  return context
}