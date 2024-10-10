"use client";
import { BlogPostType } from "@/lib/types/global-types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function PostCard({ title, slug, image }: BlogPostType) {
  const [onHover, setOnHover] = useState(false);
  return (
    <Link
      href={`/blog/${slug}/`}
      className="flex flex-col gap-4 p-4 max-w-sm"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="lg:w-80 lg:h-80 w-56 h-56 relative inset-0 rounded-3xl overflow-hidden">
        <Image
          src={image.imgSrc}
          alt={image.alt}
          width={400}
          height={400}
          className={`w-full h-full object-cover absolute inset-0 -z-10 ${
            onHover
              ? "scale-105 transition-all duration-300"
              : "transition-all duration-300"
          }`}
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <span className="text-sm text-secondary">Apr 8, 2022</span>
        <h3
          className={`text-xl font-bold text-shade  ${
            onHover && "text-tint-tint-strong underline"
          }`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}
