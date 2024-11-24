import PostCard from './PostCard'

export default function MainFeed() {
  const posts = [
    {
      username: 'Alice Johnson',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Just finished a great book! Any recommendations for my next read?',
      timestamp: '2 hours ago'
    },
    {
      username: 'Bob Smith',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Excited about the upcoming tech conference! Who else is going?',
      timestamp: '4 hours ago'
    },
    {
      username: 'Charlie Brown',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Beautiful sunset at the beach today. Nature never fails to amaze me.',
      timestamp: '6 hours ago'
    }
  ]

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-100 pb-2">Latest Posts</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  )
}

