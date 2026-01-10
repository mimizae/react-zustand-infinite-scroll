import { useRef, useEffect } from 'react';
import { PostItem } from './post-item';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { LoadingText } from '@/components/ui/loading-text';
import { usePostStore } from '@/store/usePostStore';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';

export const PostList = () => {
  const { posts, isLoading, hasMore, error, loadPosts } = usePostStore();

  const observerTarget = useRef<HTMLDivElement>(null);

  useInfiniteScroll({
    target: observerTarget,
    onIntersect: loadPosts,
    enabled: hasMore && !isLoading && !error,
  });

  // 최초 진입 시 페이지 1 로딩
  useEffect(() => {
    if (posts.length === 0) {
      loadPosts();
    }
  }, [loadPosts, posts.length]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="animate-fadeIn">
            <PostItem post={post} />
          </div>
        ))}
      </div>

      {!error && isLoading && posts.length === 0 && <LoadingSpinner />}
      {!error && isLoading && posts.length > 0 && <LoadingText />}

      {!hasMore && posts.length > 0 && (
        <p className="py-8 text-center text-lg sm:text-xl md:text-2xl text-gray-500">
          🎉 모든 포스트를 구경하셨네요! {posts.length}개의 포스트가 있었어요.
        </p>
      )}

      {error && posts.length === 0 && (
        <div className="mt-6 rounded-lg bg-red-100 px-4 py-3 text-red-500">{error}</div>
      )}

      <div ref={observerTarget} className="h-4" />
    </div>
  );
};
