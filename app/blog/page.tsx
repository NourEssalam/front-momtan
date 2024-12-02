import Categories from "@/components/blog/Categories";
import PostCard from "@/components/blog/PostCard";
import Container from "@/components/shared-components/Container";
import { blogPosts } from "@/lib/data-placeholders";

export default function Blog() {
  return (
    <>
      <Container className="mt-0 grid grid-cols-1 xl:grid-cols-[40%_60%] gap-10">
        <div className="flex flex-col ">
          <h1 className="text-4xl font-medium text-shade-strong leading-6 mb-8">
            Blog
          </h1>
          <p
            className="text-lg xl:text-xl font-light text-secondary
          sm:text-lg
          lg:text-base"
          >
            Stay Informed on the Latest Initiatives, Success Stories, and
            Thought Leadership in Sustainability and Active Citizenship
          </p>
        </div>

        <Categories />
      </Container>
      {/* Blog posts */}
      <Container className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:gap-10">
        {blogPosts.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </Container>
    </>
  );
}
