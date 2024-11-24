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
    <div className="w-80 space-y-6">
      <Card className="overflow-hidden border border-border">
        <CardHeader className="bg-secondary">
          <CardTitle className="text-secondary-foreground">Trending Topics</CardTitle>
        </CardHeader>
        <CardContent className="bg-card p-4">
          <ul className="space-y-2">
            {trendingTopics.map((topic, index) => (
              <li key={index} className="text-primary hover:text-primary/80 cursor-pointer transition-colors duration-200">
                {topic}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="overflow-hidden border border-border">
        <CardHeader className="bg-secondary">
          <CardTitle className="text-secondary-foreground">Suggested Connections</CardTitle>
        </CardHeader>
        <CardContent className="bg-card p-4">
          <ul className="space-y-4">
            {suggestedConnections.map((connection, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={connection.avatar} alt={connection.name} />
                    <AvatarFallback>{connection.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-foreground">{connection.name}</span>
                </div>
                <Button variant="outline" size="sm" className="ml-2">
                  Connect
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="overflow-hidden border border-border">
        <CardHeader className="bg-secondary">
          <CardTitle className="text-secondary-foreground">Suggested Communities</CardTitle>
        </CardHeader>
        <CardContent className="bg-card p-4">
          <ul className="space-y-4">
            {suggestedCommunities.map((community, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-foreground">{community.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {community.members.toLocaleString()} members
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Join
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

