import fs from "fs";
import matter from "gray-matter";
import { ContentMetadata } from "./ContentMetadata";

const getMetadata = (type: string): ContentMetadata[] => {
  const folder = `content/${type}`;
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`content/${type}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      image: matterResult.data.image,
      externalLink: matterResult.data.externalLink,
      url: matterResult.data.url,
      order: matterResult.data.order,
      slug: fileName.replace(".md", ""),
      type: type,
    };
  });

  return posts;
};

export default getMetadata;
