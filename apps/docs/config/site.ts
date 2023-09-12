export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NextUI - Beautiful, fast and modern React UI Library",
  description: "Make beautiful websites regardless of your design experience.",
  ogImage: "https://nextui.org/twitter-cards/nextui.jpeg",
  author: "Junior Garcia",
  email: "jrgarciadev@gmail.com",
  siteUrl: "https://mondayui.org",
  creator: "@getnextui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mondayui.org",
    siteName: "NextUI",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://nextui.org/twitter-cards/nextui.jpeg",
        width: 1200,
        height: 630,
        alt: "NextUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextUI - Beautiful, fast and modern React UI Library",
    description: "Make beautiful websites regardless of your design experience.",
    image: "https://nextui.org/twitter-cards/nextui.jpeg",
    creator: "@getnextui",
  },
  links: {
    github: "https://github.com/mondayui-org/mondayui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://mondayui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://donate.stripe.com/8wM8zN9iV1kj4BWbII",
    portfolio: "https://mondayui.org",
  },
};
