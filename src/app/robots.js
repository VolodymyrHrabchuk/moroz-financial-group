export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/moroz-blog",
      },
    ],
    sitemap: "https://moroz-financial-group.vercel.app/sitemap.xml",
  };
}
