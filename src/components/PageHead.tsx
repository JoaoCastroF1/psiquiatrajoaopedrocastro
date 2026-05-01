import { useEffect } from "react";

interface PageHeadProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
}

const DEFAULT_IMAGE = "https://drjoaopedrocastro.com.br/og-image.jpg";

const PageHead = ({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  type = "website",
}: PageHeadProps) => {
  useEffect(() => {
    document.title = title;

    const metaTags: Record<string, string> = {
      description,
      "og:title": title,
      "og:description": description,
      "og:url": url,
      "og:image": image,
      "og:type": type,
      "og:locale": "pt_BR",
      "og:site_name": "Dr. João Pedro Castro",
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
    };

    const elements: HTMLMetaElement[] = [];

    Object.entries(metaTags).forEach(([key, value]) => {
      const isOgOrTwitter = key.startsWith("og:") || key.startsWith("twitter:");
      const attr = isOgOrTwitter ? "property" : "name";

      let el = document.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`
      );

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
        elements.push(el);
      }

      el.setAttribute("content", value);
    });

    // Set canonical
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
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
  }, [title, description, url, image, type]);

  return null;
};

export default PageHead;
