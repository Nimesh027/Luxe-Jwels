import type { MetadataRoute } from "next";
import { productsData } from "@/store/slices/productsSlice";
import { collectionsData } from "@/store/slices/collectionsSlice";
import { categoriesData } from "@/data/mockData";
import { SITE_URL } from "@/lib/seo";

const staticRoutes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/shop", priority: 0.9, changeFrequency: "daily" },
  { path: "/collections", priority: 0.8, changeFrequency: "weekly" },
  { path: "/our-story", priority: 0.6, changeFrequency: "monthly" },
  { path: "/manufacturing", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/reviews", priority: 0.5, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/guide", priority: 0.6, changeFrequency: "monthly" },
  { path: "/care-guide", priority: 0.4, changeFrequency: "yearly" },
  { path: "/faqs", priority: 0.4, changeFrequency: "monthly" },
  { path: "/shipping", priority: 0.3, changeFrequency: "yearly" },
  { path: "/returns", priority: 0.3, changeFrequency: "yearly" },
  { path: "/track-order", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = (path: string) => `${SITE_URL}${path}`;

  return [
    ...staticRoutes.map((r) => ({ url: url(r.path), lastModified, changeFrequency: r.changeFrequency, priority: r.priority })),
    ...categoriesData.map((c) => ({ url: url(`/category/${c.slug}`), lastModified, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...collectionsData.map((c) => ({ url: url(`/collections/${c.slug}`), lastModified, changeFrequency: "weekly" as const, priority: 0.7 })),
    ...productsData.map((p) => ({
      url: url(`/products/${p.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
      images: [url(p.image)],
    })),
  ];
}
