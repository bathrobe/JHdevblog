import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import getContentMetadata from "../../lib/getContentMetadata";

export async function generateStaticParams() {
  const types = ["projects", "studies"];
  const projects = getContentMetadata(types[0]);
  const courses = getContentMetadata(types[1]);
  const posts = [...projects, ...courses];
  return posts.map((post) => ({
    slug: post.slug,
    type: post.type,
  }));
}
async function getMarkdownFileContent(type, filename) {
  const filePath = path.join(process.cwd(), "content", type, filename);
  try {
    const fileContent = await fs.readFileSync(filePath, "utf8");
    const data = matter(fileContent);
    const content = data.content;
    return content;
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
  }
}

export default async function PostPage(props) {
  const proj = getContentMetadata("projects");
  const courses = getContentMetadata("studies");
  const posts = [...proj, ...courses];
  const res = posts.find((post) => post.slug === props.params.slug);
  const { slug, title, date, type } = res;
  const postData = await getMarkdownFileContent(type, `${slug}.md`);
  return (
    <div className="my-12 mx-auto max-w-screen-lg">
      <h1 className="text-4xl font-bold mt-8">{title}</h1>
      <hr className="my-4 border border-gray-600" />
      <p className="text-gray-400 text-sm">{date}</p>
      <article className="prose-invert prose mt-8 hover:prose-a:text-green-300 prose-a:underline">
        <ReactMarkdown>{postData}</ReactMarkdown>
      </article>{" "}
    </div>
  );
}
