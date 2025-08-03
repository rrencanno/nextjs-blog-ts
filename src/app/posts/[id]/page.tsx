import { getBlogDetail } from "../../../../lib/client";
import Comments from "@/app/components/Comments";
import { Metadata } from 'next';

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blog = await getBlogDetail(params.id);
    return {
      title: blog.title,
    };
  }

export default async function Post({ params }: Props) {
    const blog = await getBlogDetail(params.id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
        {blog.title}
      </h1>
      <div className="text-gray-500 dark:text-gray-400 mb-8">
        {new Date(blog.publishedAt).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
      </article>

      <hr className="my-8" />
      <Comments />
    </div>
  );
}
