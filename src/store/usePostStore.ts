import { create } from 'zustand';
import type { Post } from '@/types/post';
import { fetchPosts } from '@/apis/post';

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
    const { isLoading, hasMore, page, posts } = get();
    if (isLoading || !hasMore) return;

    set({ isLoading: true, error: null });

    try {
      const newPosts = await fetchPosts({
        page,
        limit: 10,
      });

      set({
        posts: [...posts, ...newPosts],
        page: page + 1,
        hasMore: newPosts.length > 0,
        isLoading: false,
      });
    } catch (e) {
      set({
        error: 'Failed to load posts. Please try again.',
        isLoading: false,
      });
      console.log(e);
    }
  },
}));
