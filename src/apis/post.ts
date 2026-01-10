import type { Post } from '@/types/post';
import { request } from './request';

interface GetPostListParams {
  page: number;
  limit: number;
}

export function getPostList({ page, limit }: GetPostListParams) {
  return request<Post[]>({
    method: 'GET',
    url: '/posts',
    params: {
      _page: page,
      _limit: limit,
    },
  });
}
