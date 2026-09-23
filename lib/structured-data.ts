import { getDirectionItemHref, getDirectionPage, type DirectionPageData, type DirectionPrice } from "@/data/directions";
import { absoluteUrl, siteConfig } from "@/lib/site";

// schema.org graph pieces. Reviews and ratings are left out on purpose until real, verifiable ones exist.
type Node = Record<string, unknown>;

const businessId = absoluteUrl("/#business");
const websiteId = absoluteUrl("/#website");

export function businessNode(): Node {
  return {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    telephone: siteConfig.telephone,
    image: absoluteUrl(siteConfig.defaultImage.src),
    logo: absoluteUrl(siteConfig.logo),
    address: { "@type": "PostalAddress", ...siteConfig.address },
    areaServed: { "@type": "City", name: siteConfig.areaServed },
    contactPoint: { "@type": "ContactPoint", telephone: siteConfig.telephone, contactType: "customer service", availableLanguage: ["ru", "be"] },
    // Opening hours, coordinates and sameAs profiles are omitted until the workshop confirms them.
  };
}

export function websiteNode(): Node {
  return { "@type": "WebSite", "@id": websiteId, url: absoluteUrl("/"), name: siteConfig.name, inLanguage: "ru", publisher: { "@id": businessId } };
}

export function webPageNode({ path, title, description }: { path: string; title: string; description: string }): Node {
  return {
    "@type": "WebPage",
    "@id": absoluteUrl(`${path}#webpage`),
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: "ru",
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    // The home page has no breadcrumb trail.
    ...(path !== "/" && { breadcrumb: { "@id": absoluteUrl(`${path}#breadcrumb`) } }),
  };
}

export function breadcrumbNode(path: string, items: { label: string; href: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": absoluteUrl(`${path}#breadcrumb`),
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: absoluteUrl(item.href) })),
  };
}

export function faqNode(path: string, faq: DirectionPageData["faq"] | undefined): Node | undefined {
  if (!faq || faq.items.length === 0) return undefined;
  return {
    "@type": "FAQPage",
    "@id": absoluteUrl(`${path}#faq`),
    mainEntity: faq.items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };
}

function priceSpecification(price: DirectionPrice | undefined): Node | undefined {
  if (price?.kind !== "from") return undefined;
  return { "@type": "PriceSpecification", minPrice: price.amount, priceCurrency: price.currency };
}

function offer(url: string, price: DirectionPrice | undefined): Node {
  const specification = priceSpecification(price);
  return {
    "@type": "Offer",
    url,
    availability: "https://schema.org/InStock",
    areaServed: { "@type": "City", name: siteConfig.areaServed },
    ...(specification && { priceCurrency: "BYN", priceSpecification: specification }),
  };
}

/** A direction page: the repair category with its catalogue of services. */
export function directionServiceNode(data: DirectionPageData): Node {
  const path = `/${data.slug}/`;
  return {
    "@type": "Service",
    "@id": absoluteUrl(`${path}#service`),
    name: `${data.hero.title} ${data.hero.accent}`,
    serviceType: data.hero.title,
    description: data.metadata.description,
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: siteConfig.areaServed },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: data.services.title,
      itemListElement: data.services.items.map((service) => {
        const url = absoluteUrl(getDirectionItemHref(data.slug, service.slug));
        return { ...offer(url, service.price), itemOffered: { "@type": "Service", name: service.title, description: service.description, url } };
      }),
    },
  };
}

/** A service page. The price comes from the direction catalogue so both pages always agree. */
export function serviceNode({ directionSlug, slug, name, description }: { directionSlug: string; slug: string; name: string; description: string }): Node {
  const path = getDirectionItemHref(directionSlug, slug);
  const direction = getDirectionPage(directionSlug);
  const price = direction?.services.items.find((item) => item.slug === slug)?.price;
  return {
    "@type": "Service",
    "@id": absoluteUrl(`${path}#service`),
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: siteConfig.areaServed },
    ...(direction && { category: direction.hero.title, isRelatedTo: { "@id": absoluteUrl(`/${directionSlug}/#service`) } }),
    offers: offer(absoluteUrl(path), price),
  };
}

/** A service page outside the direction catalogues, e.g. Windows installation. Offers carry no price until one is published. */
export function standaloneServiceNode({ path, name, serviceType, description, catalog }: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  catalog?: { name: string; items: { title: string; description: string }[] };
}): Node {
  const url = absoluteUrl(path);
  return {
    "@type": "Service",
    "@id": absoluteUrl(`${path}#service`),
    name,
    serviceType,
    description,
    url,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: siteConfig.areaServed },
    offers: offer(url, undefined),
    ...(catalog && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: catalog.name,
        itemListElement: catalog.items.map((item) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: item.title, description: item.description } })),
      },
    }),
  };
}

export function graph(nodes: (Node | undefined)[]) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}
