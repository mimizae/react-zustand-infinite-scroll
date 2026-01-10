import { Header } from '@/components/layout/header';
import { PostList } from '@/features/posts/post-list';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
