import React from "react";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;
async function getPosts() {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    mainImage,
  }`;
  const posts = await client.fetch(query);
  return posts;
}

const BlogPage = async () => {
  const data = await getPosts();

  if (!data || data.length === 0) {
    return <p className='text-center text-xl mt-10'>No posts found.</p>;
  }

  return (
    <main className='max-w-[1400px] w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-40 pb-20'>
      {data.map((post) => (
        <div
          key={post.currentSlug}
          className='bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full'
        >
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              width={500}
              height={300}
              className='w-full h-64 object-cover'
            />
          )}
          <div className='p-4 flex-1 flex flex-col justify-between'>
            <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
            <p className='text-gray-600 mb-4'>{post.smallDescription}</p>
            <Link href={`/blog/${post.currentSlug}`}>
              <button className='bg-blue  text-white py-2 px-4 rounded mt-auto'>
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
};

export default BlogPage;
