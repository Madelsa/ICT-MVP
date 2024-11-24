'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { usePosts } from '@/app/context/posts'

interface CommentSectionProps {
  postId: string
  comments: Comment[]
}

export default function CommentSection({ postId, comments }: CommentSectionProps) {
  const [comment, setComment] = useState('')
  const { addComment } = usePosts()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    const newComment = {
      username: 'Current User',
      avatar: '/placeholder.svg?height=40&width=40',
      content: comment,
      timestamp: 'Just now'
    }

    addComment(postId, newComment)
    setComment('')
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="min-h-[80px]"
          autoFocus
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={!comment.trim()}
          >
            Post Comment
          </Button>
        </div>
      </form>

      {comments.map((comment, index) => (
        <div key={index} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
          <Avatar className="h-8 w-8">
            <AvatarImage src={comment.avatar} alt={comment.username} />
            <AvatarFallback>{comment.username[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-blue-800">{comment.username}</span>
              <span className="text-xs text-gray-500">{comment.timestamp}</span>
            </div>
            <p className="text-sm text-gray-700">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}