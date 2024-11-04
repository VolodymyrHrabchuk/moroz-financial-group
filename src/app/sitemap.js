import { client } from "./lib/sanity";

export default async function sitemap() {
  async function getPosts(page, limit) {
    const start = (page - 1) * limit;
    const end = start + limit;
    const query = `*[_type == "blog"] | order(_createdAt desc) [${start}...${end}] {
      title,
      smallDescription,
      "currentSlug": slug.current,
      mainImage,
    }`;
    const data = await client.fetch(query);
    return data;
  }

  const posts = await getPosts();
  const postsUrl = posts.map((post) => ({
    url: `${process.env.NEXT_WEBSITE_ADDRESS}/blog/${post.currentSlug}`,
    lastModified: new Date(post._updatedAt),
  }));

  return [
    {
      url: process.env.NEXT_WEBSITE_ADDRESS,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_WEBSITE_ADDRESS}/team`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_WEBSITE_ADDRESS}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_WEBSITE_ADDRESS}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_WEBSITE_ADDRESS}/faqs`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_WEBSITE_ADDRESS}/blog`,
      lastModified: new Date(),
    },
    ...postsUrl,
    {
      url: `${process.env.NEXT_WEBSITE_ADDRESS}/calendar`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_WEBSITE_ADDRESS}/newsletter`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_WEBSITE_ADDRESS}/privacy-policy`,
      lastModified: new Date(),
    },
  ];
}
