'use client'
import { Button } from '@/components/ui/button'
import { Home, Bell, MessageCircle, User, Settings, LogOut, FileText, Gift } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'
import { usePosts } from '@/app/context/posts'

export default function LeftNavigation() {
  const { rewardPoints } = usePosts()

  const navButtonClasses = "w-full justify-start text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--background))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
  const navButtonDisabledClasses = "w-full justify-start text-[hsl(var(--text-primary))] pointer-events-none"

  return (
    <nav className="w-72 bg-white border-r border-[hsl(var(--border))] p-6 flex flex-col h-screen sticky top-0">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))] mb-8">
          Product<span className="text-[hsl(var(--primary))]">Connect</span>
        </h1>
        <ul className="space-y-2">
          <li>
            <Button variant="ghost" className={navButtonClasses} asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className={navButtonClasses} asChild>
              <Link href="/my-deals">
                <FileText className="mr-2 h-5 w-5" />
                My Deals
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className={navButtonClasses}>
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </Button>
          </li>
          <li>
            <Button variant="ghost" className={navButtonClasses}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Messages
            </Button>
          </li>
          <li>
            <Button variant="ghost" className={navButtonClasses}>
              <User className="mr-2 h-5 w-5" />
              Profile
            </Button>
          </li>
          <li>
            <Button variant="ghost" className={navButtonClasses}>
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </li>
          <li>
            <Button variant="ghost" className={navButtonDisabledClasses}>
              <Gift className="mr-2 h-5 w-5" />
              My Rewards: {rewardPoints}
            </Button>
          </li>
        </ul>
      </div>
      <div className="pt-4 border-t border-[#E2E8F0]">
        <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-[#F8FAFC]">
          <Avatar className="h-10 w-10 ring-2 ring-[#3B82F6] ring-offset-2">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-[#0F172A]">John Doe</p>
            <p className="text-sm text-[#64748B]">@johndoe</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

