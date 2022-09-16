const meta = {
  title: "tsoop",
  description: "live music generation",
  author: "tsoop.ru",
  tags: "electronic, music, live, generation, jam, tsoop, op-z, op-1, nts-1, zoom r-16, fusion",
  icon: "/img/tsoop-icon.svg",
  cover: "/img/exit.jpg",
  site: "www.tsoop.ru",
};

export default {
  title: meta.title,
  description: meta.description,
  lang: "en",
  head: [

    ["script", { async: true, defer: true, "data-website-id": "8ad3b2eb-cf2e-4fa8-b2e4-28958b889bd4", src: "https://stats.defucc.me/umami.js" }],

    ["meta", { name: "author", content: meta.author }],
    ["meta", { name: "keywords", content: meta.tags }],
    ["link", { rel: "icon", type: "image/svg+xml", href: meta.icon }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "white-translucent",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "HandheldFriendly", content: "True" }],
    ["meta", { name: "MobileOptimized", content: "320" }],
    ["meta", { name: "theme-color", content: "#0ea5e9" }],

    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: meta.site }],
    ["meta", { name: "twitter:title", value: meta.title }],
    ["meta", { name: "twitter:description", value: meta.description }],
    //@ts-ignore
    ["meta", { name: "twitter:image", content: meta.cover }],

    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en-EN" }],
    ["meta", { property: "og:site", content: meta.site }],
    ["meta", { property: "og:site_name", content: meta.title }],
    ["meta", { property: "og:title", content: meta.title }],
    ["meta", { property: "og:image", content: meta.cover }],
    ["meta", { property: "og:description", content: meta.description }],
  ],
};
