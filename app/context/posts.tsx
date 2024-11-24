"use client"
import { createContext, useContext, useState, ReactNode } from 'react'

interface Comment {
  username: string
  avatar: string
  content: string
  timestamp: string
}

interface Post {
  id: string
  username: string
  avatar: string
  content: string
  timestamp: string
  initialVotes: number
  images?: string[]
  comments: Comment[]
}

interface PostsContextType {
  posts: Post[]
  rewardPoints: number
  addPost: (post: Post) => void
  addComment: (postId: string, comment: Comment) => void
  updateVotes: (postId: string, newVotes: number) => void
}

const PostsContext = createContext<PostsContextType | undefined>(undefined)

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      username: 'John Doe',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Found a great deal on the new iPhone 15 Pro at Emirates Mall! 500 AED off with code NEWPHONE2024',
      timestamp: '2 hours ago',
      initialVotes: 25,
      comments: [],
    },
    {
      id: '2',
      username: 'Sarah Ahmed',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Carrefour has a massive sale on Samsung TVs this weekend. 65" QLED for just 2999 AED!',
      timestamp: '5 hours ago',
      initialVotes: 42,
      comments: [],
    },
    {
      id: '3',
      username: 'Mike Wilson',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Amazon.ae has 25% off on all Apple accessories today. Just picked up an Apple Watch charger for 75 AED.',
      timestamp: '1 day ago',
      initialVotes: 15,
      comments: [],
    }
  ])
  const [rewardPoints, setRewardPoints] = useState(0)

  const addPost = (post: Post) => {
    setPosts(prev => [post, ...prev])
    setRewardPoints(prev => prev + 1)
  }

  const addComment = (postId: string, comment: Comment) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, comment] }
        : post
    ))
  }

  const updateVotes = (postId: string, newVotes: number) => {
    setPosts(prev => prev.map(post =>
      post.id === postId
        ? { ...post, initialVotes: newVotes }
        : post
    ))
  }

  return (
    <PostsContext.Provider value={{ posts, rewardPoints, addPost, addComment, updateVotes }}>
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