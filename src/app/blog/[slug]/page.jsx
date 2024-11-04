import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableText } from "@portabletext/react";

export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return {
    title: `Moroz Financial Group - ${data.title}`,
  };
}

export const revalidate = 30;
const getData = async (slug) => {
  const query = `*[_type == "blog" && slug.current == "${slug}"] {
    title,
    content,
    "currentSlug": slug.current,
    mainImage,
  }[0]`;
  const data = await client.fetch(query);
  return data;
};

const ArticlePage = async ({ params }) => {
  const data = await getData(params.slug);

  if (!data) {
    return <p className='text-center text-xl mt-10'>Article not found.</p>;
  }

  return (
    <main className='max-w-[1400px] w-full mx-auto px-4 pt-48 pb-20'>
      <h1 className='text-5xl font-bold mb-8 text-blue w-full'>{data.title}</h1>

      {data.mainImage && (
        <div className='w-full flex justify-center mb-8'>
          <Image
            src={urlFor(data.mainImage).url()}
            alt={data.title}
            width={1920}
            height={1080}
            layout='responsive'
            className='object-cover w-full h-auto sm:max-w-4xl md:max-w-3xl lg:max-w-6xl xl:max-w-xl'
          />
        </div>
      )}

      <article className='prose lg:prose-xl w-full max-w-none prose-li:marker:text-blue prose-ul:pl-14 prose-ol:pl-14'>
        <PortableText value={data.content} />
      </article>

      <div className='mt-10'>
        <Link href='/blog'>
          <button className='bg-blue text-white py-2 px-4 rounded'>
            Return to Newsletter
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ArticlePage;
