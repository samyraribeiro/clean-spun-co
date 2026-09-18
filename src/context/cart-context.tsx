import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = { key: string; productId: string; slug: string; name: string; image: string; variationId: string; variationLabel: string; unitPrice: number; quantity: number };
type CartContextValue = { items: CartItem[]; totalItems: number; subtotal: number; addItem: (item: Omit<CartItem, "key">) => void; updateQuantity: (key: string, quantity: number) => void; removeItem: (key: string) => void; clearCart: () => void };
const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "textile-store-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => { try { const saved = localStorage.getItem(STORAGE_KEY); if (saved) setItems(JSON.parse(saved)); } catch { localStorage.removeItem(STORAGE_KEY); } }, []);
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }, [items]);
  const value = useMemo(() => ({
    items,
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    addItem: (next: Omit<CartItem, "key">) => setItems((current) => { const key = `${next.productId}:${next.variationId}`; const found = current.find((item) => item.key === key); return found ? current.map((item) => item.key === key ? { ...item, quantity: item.quantity + next.quantity } : item) : [...current, { ...next, key }]; }),
    updateQuantity: (key: string, quantity: number) => setItems((current) => quantity < 1 ? current.filter((item) => item.key !== key) : current.map((item) => item.key === key ? { ...item, quantity } : item)),
    removeItem: (key: string) => setItems((current) => current.filter((item) => item.key !== key)),
    clearCart: () => setItems([]),
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error("useCart must be used inside CartProvider"); return context; }
