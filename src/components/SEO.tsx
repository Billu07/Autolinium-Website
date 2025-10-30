import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: any;
}

/**
 * SEO Component for dynamic meta tags
 * Usage: <SEO title="Page Title" description="Page description" />
 */
const SEO: React.FC<SEOProps> = ({
  title = "Autolinium - AI Automation Agency | Transform Your Business with AI",
  description = "Transform your business with AI automation. Autolinium specializes in AI agents, custom CRMs, workflow automation, and mobile apps. Boost efficiency and reduce costs.",
  keywords = "AI automation, AI agents, custom CRM, workflow automation, business automation, mobile apps, Airtable, Zapier, Make, n8n",
  url,
  type = "website",
  author = "Autolinium",
  publishedTime,
  modifiedTime,
  schema,
}) => {
  const location = useLocation();
  const currentUrl = url || `https://autolinium.com${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("name", "author", author);

    // Open Graph tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", currentUrl);
    updateMetaTag("property", "og:type", type);
    updateMetaTag("property", "og:site_name", "Autolinium");

    // Article specific tags
    if (type === "article") {
      if (publishedTime) {
        updateMetaTag("property", "article:published_time", publishedTime);
      }
      if (modifiedTime) {
        updateMetaTag("property", "article:modified_time", modifiedTime);
      }
      updateMetaTag("property", "article:author", author);
    }

    // Update canonical link
    updateCanonicalLink(currentUrl);

    // Update structured data
    if (schema) {
      updateStructuredData(schema);
    }
  }, [
    title,
    description,
    keywords,
    currentUrl,
    type,
    author,
    publishedTime,
    modifiedTime,
    schema,
  ]);

  return null;
};

// Helper function to update meta tags
const updateMetaTag = (
  attribute: string,
  key: string,
  content: string
): void => {
  if (!content) return;

  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (element) {
    element.setAttribute("content", content);
  } else {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.setAttribute("content", content);
    document.head.appendChild(element);
  }
};

// Helper function to update canonical link
const updateCanonicalLink = (url: string): void => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (link) {
    link.href = url;
  } else {
    link = document.createElement("link");
    link.rel = "canonical";
    link.href = url;
    document.head.appendChild(link);
  }
};

// Helper function to update structured data (JSON-LD)
const updateStructuredData = (schema: any): void => {
  const scriptId = "structured-data";
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (script) {
    script.innerHTML = JSON.stringify(schema);
  } else {
    script = document.createElement("script") as HTMLScriptElement;
    script.id = scriptId;
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
  }
};

// Predefined schemas for common page types
export const schemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Autolinium",
    url: "https://autolinium.com",
    logo: "https://autolinium.com/assets/autolinium-logo.webp",
    description:
      "AI Automation Agency specializing in AI agents, custom CRMs, workflow automation, and mobile app development",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@autolinium.com",
    },
  },

  service: (serviceName: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Autolinium",
      url: "https://autolinium.com",
    },
    serviceType: "AI Automation",
    areaServed: "Worldwide",
  }),

  article: (
    title: string,
    description: string,
    author: string,
    datePublished: string,
    dateModified: string,
    image: string
  ) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Autolinium",
      logo: {
        "@type": "ImageObject",
        url: "https://autolinium.com/assets/autolinium-logo.webp",
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
    image: image,
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};

export default SEO;
