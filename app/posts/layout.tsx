import LeftNavigation from '@/components/map/LeftNavigation';
import Sidebar from '@/components/map/Sidebar';

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <LeftNavigation />
        <div className="flex-1">{children}</div>
        <Sidebar />
      </div>
    </div>
  );
}