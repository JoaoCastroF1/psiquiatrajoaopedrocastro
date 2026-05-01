import { useHead } from "@unhead/react";

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
  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:type", content: type },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Dr. João Pedro Castro" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    link: [{ rel: "canonical", href: url }],
  });

  return null;
};

export default PageHead;
