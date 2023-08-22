import Hero from "@/components/sections/hero/Hero";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export async function getStaticProps() {
  const posts = await client.fetch(postsQuery);

  return {
    props: {
      posts,
    },
  };
}
export default function Home({ posts }: { posts: any }) {
  console.log(posts);
  return (
    <main>
      <Hero />
    </main>
  );
}
