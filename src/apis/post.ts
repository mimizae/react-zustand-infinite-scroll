import { request } from './request';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

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
