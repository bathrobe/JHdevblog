import PostCard from "./components/PostCard";
import getContentMetadata from "./lib/getContentMetadata";

const HomePage = () => {
  let posts = getContentMetadata("projects");
  posts = posts.sort((a, b) => a.order - b.order);
  return (
    <div className="min-h-screen text-creamy-white">
      <header className="text-5xl font-bold mx-auto ">
        <h1 className="py-2">Hey, I&apos;m Joe.</h1>
      </header>

      <main className="max-w-4xl text-lg py-8 ">
        <div className="my-6">
          I'm a writer, developer, and educator with a passion for simplifying
          complex subjects. I'm currently writing and editing guides at{" "}
          <a
            href="https://www.sanity.io/exchange/community/joeholmes"
            className="hover:text-green-300 underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanity.io
          </a>{" "}
          and looking for additional work.{" "}
          <p className="py-8">Check out some of my recent projects below.</p>
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
      </main>
    </div>
  );
};

export default HomePage;
