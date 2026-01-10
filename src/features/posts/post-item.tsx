import type { Post } from '@/types/post';

interface PostItemProps {
  post: Post;
}

// 공통 태그(배지) 스타일
const badgeBase = 'text-sm font-medium text-primary-300 bg-primary-50 px-3 py-1 rounded-full';

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <article className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <img
            src="/default-profile.png"
            alt={`User ${post.userId}`}
            className="w-14 h-14 p-1 pb-0 rounded-full object-cover border-2 border-primary-100"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <span className={badgeBase}>User #{post.userId}</span>
            <span className={badgeBase}>Post #{post.id}</span>
          </div>

          <h2 className="text-xl font-bold text-black mb-3 group-hover:text-primary-300 transition-colors line-clamp-2 capitalize">
            {post.title}
          </h2>

          <p className="text-base text-gray-300 leading-relaxed line-clamp-3">{post.body}</p>
        </div>
      </div>
    </article>
  );
};
