import { create } from 'zustand';
import type { Post } from '@/types/post';
import { getPostList } from '@/apis/post';

interface PostState {
  posts: Post[];
  page: number;
  isLoading: boolean;
  hasMore: boolean;
  error: string | null;

  loadPosts: () => Promise<void>;
}

export const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  page: 1,
  isLoading: false,
  hasMore: true,
  error: null,

  loadPosts: async () => {
    const { isLoading, hasMore, page, posts, error } = get();

    // 이미 로딩 중이거나, 더 불러올 데이터가 없거나, 이전 요청에서 에러가 발생한 경우 추가 호출을 막음
    if (isLoading || !hasMore || error) return;

    set({ isLoading: true, error: null });

    try {
      const newPosts = await getPostList({ page, limit: 10 });

      set({
        posts: [...posts, ...newPosts],
        page: page + 1,
        // 가져온 데이터가 없으면 마지막 페이지로 판단
        hasMore: newPosts.length > 0,
        isLoading: false,
      });
    } catch (e) {
      // 네트워크 에러 등 예외 발생 시 UX를 해치지 않기 위해 무한 스크롤 재호출을 중단
      set({
        error: '게시글을 불러오는 중 오류가 발생했습니다.',
        isLoading: false,
        hasMore: false,
      });

      console.error('Post fetch error:', e);
    }
  },
}));
