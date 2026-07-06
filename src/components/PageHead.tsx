import { Head } from "vite-react-ssg";

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

const DEFAULT_IMAGE = "https://www.drjoaopedrocastro.com.br/og-image.jpg";
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
  const isArticle = type === "article";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Dr. João Pedro Castro" />
      {isArticle && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {isArticle && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {isArticle && author && <meta property="article:author" content={author} />}
      {isArticle && section && <meta property="article:section" content={section} />}
      {isArticle &&
        tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterSite} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default PageHead;
