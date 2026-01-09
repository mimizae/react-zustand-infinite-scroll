import type { Post } from '@/types/post';
import { request } from './request';

interface FetchPostsParams {
  page: number;
  limit: number;
}

export function fetchPosts({ page, limit }: FetchPostsParams) {
  return request<Post[]>({
    method: 'GET',
    url: '/posts',
    params: {
      _page: page,
      _limit: limit,
    },
  });
}
