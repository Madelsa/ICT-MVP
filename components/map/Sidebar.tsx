import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Users } from 'lucide-react'

export default function Sidebar() {
  const trendingTopics = [
    '#iPhone16', 
    '#EmiratesGadgets',
    '#Macbook',
    '#SamsungTV'
  ]

  const suggestedConnections = [
    { name: 'Jane Smith', avatar: '/placeholder.svg?height=32&width=32' },
    { name: 'Mike Johnson', avatar: '/placeholder.svg?height=32&width=32' },
    { name: 'Sarah Lee', avatar: '/placeholder.svg?height=32&width=32' }
  ]

  const suggestedCommunities = [
    { name: 'Community 1', members: 5280 },
    { name: 'Community 2', members: 9750 },
    { name: 'Community 3', members: 12000 },
  ]

  return (
    <aside className="w-80 space-y-6 pt-[4.5rem] pr-6">
      <Card className="overflow-hidden">
        <CardHeader className="bg-blue-500">
          <CardTitle className="text-white">Trending Topics</CardTitle>
        </CardHeader>
        <CardContent className="bg-white p-4">
          <ul className="space-y-2">
            {trendingTopics.map((topic, index) => (
              <li key={index} className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-200">
                {topic}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader className="bg-blue-500">
          <CardTitle className="text-white">Suggested Connections</CardTitle>
        </CardHeader>
        <CardContent className="bg-white p-4">
          <ul className="space-y-4">
            {suggestedConnections.map((connection, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={connection.avatar} alt={connection.name} />
                    <AvatarFallback>{connection.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-blue-800">{connection.name}</span>
                </div>
                <Button className="bg-blue-500 text-white hover:bg-blue-600" size="sm">
                  Connect
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader className="bg-blue-500">
          <CardTitle className="text-white">Suggested Communities</CardTitle>
        </CardHeader>
        <CardContent className="bg-white p-4">
          <ul className="space-y-4">
            {suggestedCommunities.map((community, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-blue-800">{community.name}</span>
                    <span className="text-xs text-blue-500">
                      {community.members.toLocaleString()} members
                    </span>
                  </div>
                </div>
                <Button className="bg-blue-500 text-white hover:bg-blue-600" size="sm">
                  Join
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  )
}

