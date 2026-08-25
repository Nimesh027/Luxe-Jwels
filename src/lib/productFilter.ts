import type { Product } from "@/types";

export interface ProductFilterOptions {
  collection?: string;
  category?: string;
  gender?: string;
  search?: string;
}

/**
 * Checks whether a product belongs to a given collection slug.
 * Supports explicit collections array and fallback collection definitions.
 */
export function isProductInCollection(product: Product, collectionSlug: string): boolean {
  if (!collectionSlug) return true;
  const slug = collectionSlug.toLowerCase().trim();

  // 1. Explicit collections array match takes highest priority
  if (product.collections && product.collections.length > 0) {
    if (product.collections.some((col) => col.toLowerCase().trim() === slug)) {
      return true;
    }
  }

  // 2. Fallback matching rules per collection slug
  if (slug === "mens-collection") {
    return product.gender === "men" || product.category === "mens-collection";
  }

  if (slug === "womens-collection") {
    return product.gender === "women";
  }

  if (slug === "diamond-collection") {
    return (
      product.name.toLowerCase().includes("diamond") ||
      (product.description?.toLowerCase().includes("diamond") ?? false)
    );
  }

  if (slug === "gold-collection") {
    return (
      product.name.toLowerCase().includes("gold") ||
      (product.description?.toLowerCase().includes("gold") ?? false)
    );
  }

  if (slug === "couple-collection") {
    return product.category === "rings" || product.category === "bracelets";
  }

  if (slug === "gift-collection") {
    return (
      product.category === "pendants" ||
      product.category === "earrings" ||
      Boolean(product.isMostSold) ||
      Boolean(product.isMostViewed) ||
      Boolean(product.isBestseller)
    );
  }

  return false;
}

/**
 * Filters a list of products by collection, category, and gender simultaneously.
 */
export function filterProducts(
  products: Product[],
  options: ProductFilterOptions
): Product[] {
  const { collection, category, gender, search } = options;

  const normalizedCollection = collection ? collection.toLowerCase().trim() : undefined;
  const normalizedCategory = category ? category.toLowerCase().trim() : undefined;
  const normalizedGender = gender ? gender.toLowerCase().trim() : undefined;
  const normalizedSearch = search ? search.toLowerCase().trim() : undefined;

  return products.filter((product) => {
    // 1. Collection filter
    if (normalizedCollection && !isProductInCollection(product, normalizedCollection)) {
      return false;
    }

    // 2. Category filter
    if (normalizedCategory) {
      if (normalizedCategory === "mens-collection") {
        if (product.gender !== "men" && product.category !== "mens-collection") {
          return false;
        }
      } else if (normalizedCategory === "womens-collection") {
        if (product.gender !== "women") {
          return false;
        }
      } else if (product.category.toLowerCase().trim() !== normalizedCategory) {
        return false;
      }
    }

    // 3. Gender filter
    if (normalizedGender && normalizedGender !== "all") {
      if (normalizedGender === "men" && product.gender !== "men") {
        return false;
      }
      if (normalizedGender === "women" && product.gender !== "women") {
        return false;
      }
      if (normalizedGender === "unisex" && product.gender !== "unisex") {
        return false;
      }
    }

    // 4. Search query filter
    if (normalizedSearch) {
      const matchName = product.name.toLowerCase().includes(normalizedSearch);
      const matchDesc = product.description?.toLowerCase().includes(normalizedSearch);
      const matchCat = product.category.toLowerCase().includes(normalizedSearch);
      if (!matchName && !matchDesc && !matchCat) {
        return false;
      }
    }

    return true;
  });
}
