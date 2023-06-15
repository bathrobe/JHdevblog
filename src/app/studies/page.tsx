import React from "react";
import getContentMetadata from "../lib/getContentMetadata";
import PostCard from "../components/PostCard";

export default function Studies() {
  let posts = getContentMetadata("studies");
  posts = posts.sort((a, b) => a.order - b.order);
  return (
    <div>
      <h1 className="text-4xl font-semibold">Course Catalogue</h1>
      <div className="py-12 text-lg">
        One of my favorite things to do is study the many fascinating courses
        available online, for free on YouTube or via{" "}
        <a
          className="underline hover:text-green-200"
          href="https://www.thegreatcourses.com/"
          target="_blank"
        >
          Great Courses
        </a>
        . I often supplement these studies with the spaced repetition flashcard
        program{" "}
        <a
          className="underline hover:text-green-200"
          href="https://apps.ankiweb.net"
          target="_blank"
        >
          Anki
        </a>
        . You could say I'm a little obsessed!{" "}
        <div className="py-6">
          Below are some of the courses I've been studying recently, as well as
          some notes and resources from them.
        </div>
        <div className="mt-4">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              image={post.image}
              title={post.title}
              date={post.date}
              description={post.description}
              slug={post.slug}
              externalLink={post.externalLink}
              url={post.url}
              order={post.order}
              type={post.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
