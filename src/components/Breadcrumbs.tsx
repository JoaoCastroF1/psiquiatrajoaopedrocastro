import { Link } from "react-router-dom";
import JsonLd from "./JsonLd";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const fullItems = [{ label: "Início", href: "/" }, ...items];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://www.drjoaopedrocastro.com.br${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <nav aria-label="Breadcrumb" className="font-body text-xs text-foreground/80 mb-6">
        <ol className="flex flex-wrap items-center gap-1.5">
          {fullItems.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-border">/</span>}
              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
