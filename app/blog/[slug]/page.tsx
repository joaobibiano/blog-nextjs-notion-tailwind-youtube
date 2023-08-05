import { getPost } from "@/app/_services/notion";
import ReactMarkdown from "react-markdown";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <div className="w-full bg-slate-800 min-h-screen">
      <div className="m-auto max-w-2xl bg-slate-700 p-6 min-h-screen">
        <h1 className="text-4xl py-6">{post.title}</h1>

        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl text-blue-700" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
