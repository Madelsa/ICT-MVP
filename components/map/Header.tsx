import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, PlusCircle } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="relative">
          <Input 
            className="w-64 pl-10 pr-4 py-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400" 
            placeholder="Search..." 
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
        </div>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          <PlusCircle className="mr-2 h-5 w-5" />
          New Post
        </Button>
      </div>
    </header>
  )
}

