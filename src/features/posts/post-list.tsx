import { useRef, useEffect } from 'react';
import { PostItem } from './post-item';

import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { usePostStore } from '@/store/usePostStore';
import { LoadingText } from '@/components/ui/loading-text';

export const PostList = () => {
  const { posts, isLoading, hasMore, error, loadPosts } = usePostStore();

  const observerTarget = useRef<HTMLDivElement>(null);

  useInfiniteScroll({
    target: observerTarget,
    onIntersect: loadPosts,
    enabled: hasMore && !isLoading,
  });

  // 최초 진입 시 1페이지 로딩
  useEffect(() => {
    if (posts.length === 0) {
      loadPosts();
    }
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="animate-fadeIn">
            <PostItem post={post} />
          </div>
        ))}
      </div>

      {isLoading && posts.length === 0 && <LoadingSpinner />}
      {isLoading && posts.length > 0 && <LoadingText />}

      {!hasMore && posts.length > 0 && (
        <p className="py-8 text-center text-lg sm:text-xl md:text-2xl text-gray-500">
          🎉 모든 포스트를 구경하셨네요! {posts.length}개의 포스트가 있었어요.
        </p>
      )}

      {error && <div className="mt-6 rounded-lg bg-red-100 px-4 py-3 text-red-500">{error}</div>}

      <div ref={observerTarget} className="h-4" />
    </div>
  );
};
