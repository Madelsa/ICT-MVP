import '@/app/globals.css'
import { PostsProvider } from '@/app/context/posts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PostsProvider>
          {children}
        </PostsProvider>
      </body>
    </html>
  )
}