import React from "react";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

// Function to fetch posts for the current page
async function getPosts(page, limit) {
  const start = (page - 1) * limit;
  const end = start + limit;
  const query = `*[_type == "blog"] | order(_createdAt desc) [${start}...${end}] {
    title,
    smallDescription,
    "currentSlug": slug.current,
    mainImage,
  }`;
  const posts = await client.fetch(query);
  return posts;
}

// Function to fetch the total count of blog posts
async function getTotalCount() {
  const countQuery = `count(*[_type == "blog"])`;
  const total = await client.fetch(countQuery);
  return total;
}

const BlogPage = async ({ searchParams }) => {
  // Determine the current page from query params, default to 1
  const page = parseInt(searchParams.page) || 1;
  const limit = 6;

  // Fetch posts and total count concurrently
  const [posts, total] = await Promise.all([
    getPosts(page, limit),
    getTotalCount(),
  ]);

  const totalPages = Math.ceil(total / limit);

  // Handle cases where the requested page is out of bounds
  const currentPage = Math.min(Math.max(page, 1), totalPages);

  if (!posts || posts.length === 0) {
    return <p className='text-center text-xl mt-10'>No posts found.</p>;
  }

  return (
    <main className='max-w-[1400px] w-full mx-auto px-4 pt-40 pb-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map((post) => (
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
                <button className='bg-blue hover:bg-blue-600 text-white py-2 px-4 rounded mt-auto hover:scale-105 transition-all'>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className='flex justify-center mt-8'>
          <nav className='flex space-x-2'>
            {/* Previous Button */}
            {currentPage > 1 && (
              <Link
                href={`/blog?page=${currentPage - 1}`}
                className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'
              >
                Previous
              </Link>
            )}

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <Link
                  key={pageNumber}
                  href={`/blog?page=${pageNumber}`}
                  className={`px-4 py-2 rounded ${
                    pageNumber === currentPage
                      ? "bg-blue text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {pageNumber}
                </Link>
              )
            )}

            {/* Next Button */}
            {currentPage < totalPages && (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'
              >
                Next
              </Link>
            )}
          </nav>
        </div>
      )}
    </main>
  );
};

export default BlogPage;
