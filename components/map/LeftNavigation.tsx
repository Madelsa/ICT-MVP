import { Button } from '@/components/ui/button'
import { Home, Bell, MessageCircle, User, Settings, LogOut, FileText, PlusCircle, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

export default function LeftNavigation() {
  return (
    <nav className="w-64 bg-white shadow-md p-4 flex flex-col h-full sticky top-6">
      <div>
        <h1 className="text-2xl font-bold text-blue-600 mb-6">ProductConnect</h1>
        <ul className="space-y-2">
          <li>
            <Button variant="ghost" className="w-full justify-start text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/my-deals">
                <FileText className="mr-2 h-5 w-5" />
                My Deals
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-blue-600 hover:bg-blue-50">
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-blue-600 hover:bg-blue-50">
              <MessageCircle className="mr-2 h-5 w-5" />
              Messages
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-blue-600 hover:bg-blue-50">
              <User className="mr-2 h-5 w-5" />
              Profile
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-blue-600 hover:bg-blue-50">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </li>
          <li className="px-4 py-2 text-blue-600">
            <div className="flex items-center gap-2">
              <span>My Rewards:</span>
              <span className="font-semibold">0</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-auto pt-4 border-t border-blue-100">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-10 w-10 border-2 border-blue-200">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-blue-800">John Doe</p>
            <p className="text-sm text-blue-500">@johndoe</p>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start text-blue-600 hover:bg-blue-50">
          <LogOut className="mr-2 h-5 w-5" />
          Log Out
        </Button>
      </div>
    </nav>
  )
}

