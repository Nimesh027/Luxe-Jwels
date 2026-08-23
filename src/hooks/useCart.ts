import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addItem,
  clearCart,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartSubtotal,
  updateQuantity,
} from "@/store/slices/cartSlice";
import type { Product } from "@/types";

export function useCart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const count = useAppSelector(selectCartCount);
  const subtotal = useAppSelector(selectCartSubtotal);

  const add = useCallback(
    (product: Product, quantity = 1) => dispatch(addItem({ product, quantity })),
    [dispatch]
  );
  const remove = useCallback(
    (productId: string) => dispatch(removeItem(productId)),
    [dispatch]
  );
  const setQuantity = useCallback(
    (productId: string, quantity: number) =>
      dispatch(updateQuantity({ productId, quantity })),
    [dispatch]
  );
  const clear = useCallback(() => dispatch(clearCart()), [dispatch]);

  return { items, count, subtotal, add, remove, setQuantity, clear };
}
