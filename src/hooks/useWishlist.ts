import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectWishlistItems, toggleItem } from "@/store/slices/wishlistSlice";
import type { Product } from "@/types";

export function useWishlist() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectWishlistItems);

  const toggle = useCallback(
    (product: Product) => dispatch(toggleItem(product)),
    [dispatch]
  );
  const isWishlisted = useCallback(
    (productId: string) => items.some((item) => item.id === productId),
    [items]
  );

  return { items, toggle, isWishlisted };
}
