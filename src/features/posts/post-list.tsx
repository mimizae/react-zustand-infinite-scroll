import { useRef, useEffect } from 'react';
import { PostItem } from './post-item';
import type { Post } from '@/types/post';
import { LoadingSpinner, LoadingText } from '@/components/ui/loading-spinner';

interface PostListProps {
  posts: Post[];
  isLoading: boolean;
  hasMore: boolean;
  error: string | null;
  onLoadMore: () => void;
}

export const PostList = ({ posts, isLoading, hasMore, error, onLoadMore }: PostListProps) => {
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          onLoadMore();
        }
      },
      { threshold: 0.1 },
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading, onLoadMore]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="space-y-4">
        {posts.length === 0 && !isLoading && !error && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">No posts found</p>
          </div>
        )}

        {posts.map((post, index) => (
          <div
            key={`${post.id}-${index}`}
            className="animate-fadeIn"
            style={{ animationDelay: `${(index % 10) * 50}ms` }}
          >
            <PostItem post={post} />
          </div>
        ))}
      </div>

      {isLoading && posts.length === 0 && <LoadingSpinner />}
      {isLoading && posts.length > 0 && <LoadingText />}

      {!hasMore && posts.length > 0 && !error && (
        <div className="text-center py-8">
          <div className="inline-block bg-gray-50 rounded-full px-6 py-3">
            <p className="text-gray-300 text-sm font-medium">🎉 You've reached the end!</p>
            <p className="text-gray-300 text-xs mt-1">Total posts: {posts.length}</p>
          </div>
        </div>
      )}

      {/* Intersection Observer 타겟 */}
      <div ref={observerTarget} className="h-4" />
    </div>
  );
};
