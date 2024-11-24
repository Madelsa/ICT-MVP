import { Button } from '@/components/ui/button'
import { Home, Bell, MessageCircle, User, Settings, LogOut, FileText } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export default function LeftNavigation() {
  return (
    <nav className="w-64 bg-card shadow-md p-4 flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-2xl font-bold text-primary mb-6">ProductConnect</h1>
        <ul className="space-y-2">
          <li>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-primary" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-primary">
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-primary">
              <MessageCircle className="mr-2 h-5 w-5" />
              Messages
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-primary">
              <User className="mr-2 h-5 w-5" />
              Profile
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-primary" asChild>
              <Link href="/my-posts">
                <FileText className="mr-2 h-5 w-5" />
                My Posts
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-primary">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </li>
          <li className="px-4 py-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>My Rewards:</span>
              <span className="font-semibold">0</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-auto pt-4 border-t border-border">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-10 w-10 border-2 border-muted">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">John Doe</p>
            <p className="text-sm text-muted-foreground">@johndoe</p>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-primary">
          <LogOut className="mr-2 h-5 w-5" />
          Log Out
        </Button>
      </div>
    </nav>
  )
}

