import { client } from "./lib/sanity";

export default async function sitemap() {
  async function getPosts() {
    const query = `*[_type == "blog"] | order(_createdAt desc)  {
      title,
      smallDescription,
      "currentSlug": slug.current,
      mainImage,
      _updatedAt, 
    }`;
    const data = await client.fetch(query);
    return data;
  }

  const posts = await getPosts();
  const postsUrl = posts.map((post) => ({
    url: `https://moroz-financial-group.vercel.app/blog/${post.currentSlug}`,
    lastModified: new Date(post._updatedAt),
  }));

  return [
    {
      url: "https://moroz-financial-group.vercel.app",
      lastModified: new Date(),
    },
    {
      url: `https://moroz-financial-group.vercel.app/team`,
      lastModified: new Date(),
    },
    {
      url: `https://moroz-financial-group.vercel.app/pricing`,
      lastModified: new Date(),
    },
    {
      url: `https://moroz-financial-group.vercel.app/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://moroz-financial-group.vercel.app/faqs`,
      lastModified: new Date(),
    },
    {
      url: `https://moroz-financial-group.vercel.app/blog`,
      lastModified: new Date(),
    },
    ...postsUrl,
    {
      url: `https://moroz-financial-group.vercel.app/calendar`,
      lastModified: new Date(),
    },
    {
      url: `https://moroz-financial-group.vercel.app/newsletter`,
      lastModified: new Date(),
    },
    {
      url: `https://moroz-financial-group.vercel.app/privacy-policy`,
      lastModified: new Date(),
    },
  ];
}
