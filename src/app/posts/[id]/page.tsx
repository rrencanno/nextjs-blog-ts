import { getBlogDetail, getBlogs } from "../../../../lib/client";
import Comments from "@/app/components/Comments";
import type { Metadata } from "next";

export async function generateStaticParams() {
    const { contents: blogs } = await getBlogs();
    return blogs.map((blog) => ({
      id: blog.id,
    }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const blog = await getBlogDetail(params.id);
  return {
    title: blog.title,
  };
}

export default async function Post({ params }: { params: { id: string } }) {
    const blog = await getBlogDetail(params.id);

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
      <h1>{blog.title}</h1>
      <div>{new Date(blog.publishedAt).toLocaleDateString("ja-JP")}</div>
      <article>
        <div dangerouslySetInnerHTML={{ __html: `${blog.content}` }} />
      </article>
      <hr />
      <Comments />
    </div>
  );
}
