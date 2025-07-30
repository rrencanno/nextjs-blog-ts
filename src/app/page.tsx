import Link from 'next/link';
import { getBlogs } from '../../lib/client';

export default async function Home() {
  const { contents: blogs } = await getBlogs();

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">ブログ</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <article key={blog.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Link href={`/posts/${blog.id}`} className="block p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{blog.title}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {new Date(blog.publishedAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
