'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUp, ArrowDown, MessageCircle, Share2 } from 'lucide-react'
import Image from 'next/image'
import CommentSection from './CommentSection'
import { usePosts } from '@/app/context/posts'

interface PostCardProps {
  id: string
  username: string
  avatar: string
  content: string
  timestamp: string
  initialVotes?: number
  images?: string[]
  comments: Comment[]
}

export default function PostCard({ id, username, avatar, content, timestamp, initialVotes = 0, images, comments }: PostCardProps) {
  const [showComments, setShowComments] = useState(false)
  const { updateVotes } = usePosts()

  const handleVote = (increment: boolean) => {
    const newVotes = increment ? initialVotes + 1 : initialVotes - 1
    updateVotes(id, newVotes)
  }

  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-200">
      <CardHeader className="flex flex-row items-center gap-4 p-4 bg-white">
        <Avatar className="h-12 w-12 ring-2 ring-[hsl(var(--primary))] ring-offset-2">
          <AvatarImage src={avatar} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium text-[hsl(var(--text-primary))]">{username}</h3>
          <p className="text-sm text-[hsl(var(--text-secondary))]">{timestamp}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <p className="text-gray-700 leading-relaxed">{content}</p>
        {images && images.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-[4/3]">
                <Image
                  src={image}
                  alt={`Post image ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between bg-blue-50 p-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleVote(true)}
            className="text-blue-600 hover:bg-blue-100 hover:text-blue-700"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
          <span className={`font-medium ${
            initialVotes > 0 ? 'text-green-600' : 
            initialVotes < 0 ? 'text-red-600' : 
            'text-gray-600'
          }`}>
            {initialVotes}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleVote(false)}
            className="text-blue-600 hover:bg-blue-100 hover:text-blue-700"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-blue-600 hover:bg-blue-100 hover:text-blue-700"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          {comments.length > 0 ? `Comments (${comments.length})` : 'Comment'}
        </Button>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100 hover:text-blue-700">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
      {showComments && (
        <div className="border-t p-4">
          <CommentSection postId={id} comments={comments} />
        </div>
      )}
    </Card>
  )
}