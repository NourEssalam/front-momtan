import Container from "@/components/shared-components/Container";

import { blogPosts } from "@/lib/data-placeholders";

import { BlogPostType } from "@/lib/types/global-types";
import { CiShare1 } from "react-icons/ci";

import type { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (post === undefined) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post?.title,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((item: BlogPostType) => ({
    slug: item.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section className="flex flex-col gap-2 xl:gap-10 justify-center items-center">
      <Container className="flex flex-col gap-10 mb-0">
        <h1 className="text-4xl text-secondary  font-medium sm:text-5xl lg:text-7xl   ">
          {post.title}
        </h1>
        {/* meta data */}
        <div className="flex gap-4 items-center">
          <span className="text-sm text-grey-light underline">
            {post.publishDate}
          </span>
          <span className="text-sm text-grey-light">By {post.author}</span>
          <span>
            <CiShare1 className="text-lg text-grey-light" />
          </span>
        </div>
        <div className="relative w-full h-96  overflow-hidden  rounded-3xl">
          <Image
            src={post.image.imgSrc}
            alt={post.image.alt}
            width={1000}
            height={1000}
            className="w-full h-full object-fill absolute inset-0 -z-10"
          />
        </div>
      </Container>

      <Container className="mt-0">
        <p className="text-xl text-grey">{post.content}</p>
      </Container>
    </section>
  );
}
