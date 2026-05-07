import { useEffect } from "react";

interface PageHeadProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article" | "blog";
  twitterSite?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const DEFAULT_IMAGE = "https://drjoaopedrocastro.com.br/og-image.jpg";
const DEFAULT_TWITTER = "@joaocastrof";

const PageHead = ({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  type = "website",
  twitterSite = DEFAULT_TWITTER,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: PageHeadProps) => {
  useEffect(() => {
    document.title = title;

    const isArticle = type === "article";

    const baseMeta: Record<string, string> = {
      description,
      "og:title": title,
      "og:description": description,
      "og:url": url,
      "og:image": image,
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:type": type,
      "og:locale": "pt_BR",
      "og:site_name": "Dr. João Pedro Castro",
      "twitter:card": "summary_large_image",
      "twitter:site": twitterSite,
      "twitter:creator": twitterSite,
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
    };

    if (isArticle) {
      if (publishedTime) baseMeta["article:published_time"] = publishedTime;
      if (modifiedTime) baseMeta["article:modified_time"] = modifiedTime;
      if (author) baseMeta["article:author"] = author;
      if (section) baseMeta["article:section"] = section;
    }

    const elements: HTMLElement[] = [];

    Object.entries(baseMeta).forEach(([key, value]) => {
      const isOgOrTwitter =
        key.startsWith("og:") ||
        key.startsWith("twitter:") ||
        key.startsWith("article:");
      const attr = isOgOrTwitter ? "property" : "name";

      let el = document.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`,
      );

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
        elements.push(el);
      }

      el.setAttribute("content", value);
    });

    // article:tag — repeated meta tags, one per tag
    if (isArticle && tags) {
      tags.forEach((tag) => {
        const el = document.createElement("meta");
        el.setAttribute("property", "article:tag");
        el.setAttribute("content", tag);
        document.head.appendChild(el);
        elements.push(el);
      });
    }

    // Set canonical
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    const hadCanonical = !!canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    return () => {
      elements.forEach((el) => el.remove());
      if (!hadCanonical && canonical) canonical.remove();
    };
  }, [
    title,
    description,
    url,
    image,
    type,
    twitterSite,
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
  ]);

  return null;
};

export default PageHead;
