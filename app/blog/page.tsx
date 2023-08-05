import { getPosts } from "../_services/notion";
import Link from "next/link";

export default async function BlogHome() {
  const posts = await getPosts();

  return (
    <div className="w-full bg-slate-800 min-h-screen">
      <div className="m-auto max-w-2xl bg-slate-700 p-6 min-h-screen">
        <h1 className="text-4xl py-6">Blog</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-3">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <div className="space-x-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-sm text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>

              <p>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(post.createdAt)
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
