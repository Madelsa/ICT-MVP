'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUp, ArrowDown, MessageCircle, Share2 } from 'lucide-react'
import Image from 'next/image'

interface PostCardProps {
  username: string
  avatar: string
  content: string
  timestamp: string
  initialVotes?: number
  images?: string[]
}

export default function PostCard({ username, avatar, content, timestamp, initialVotes = 0, images }: PostCardProps) {
  const [votes, setVotes] = useState(initialVotes)

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 bg-blue-50 p-4">
        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
          <AvatarImage src={avatar} alt={username} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-blue-800">{username}</h3>
          <p className="text-sm text-blue-500">{timestamp}</p>
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
            onClick={() => setVotes(prev => prev + 1)}
            className="text-blue-600 hover:bg-blue-100 hover:text-blue-700"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
          <span className={`font-medium ${
            votes > 0 ? 'text-green-600' : 
            votes < 0 ? 'text-red-600' : 
            'text-gray-600'
          }`}>
            {votes}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setVotes(prev => prev - 1)}
            className="text-blue-600 hover:bg-blue-100 hover:text-blue-700"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100 hover:text-blue-700">
          <MessageCircle className="mr-2 h-4 w-4" />
          Comment
        </Button>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100 hover:text-blue-700">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}