import type { Post } from '@/types/post';
import { request } from './request';

interface GetPostListParams {
  page: number;
  limit: number;
}
type GetPostListResponse = Post[];

export function getPostList({ page, limit }: GetPostListParams) {
  return request<GetPostListResponse>({
    method: 'GET',
    url: '/posts',
    params: {
      _page: page,
      _limit: limit,
    },
  });
}
