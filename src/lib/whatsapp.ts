import { STORE, formatPrice } from "@/data/store";
import type { CartItem } from "@/context/cart-context";

export function whatsappUrl(message: string) {
  const digits = STORE.whatsapp.replace(/\D/g, "");
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(items: CartItem[]) {
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const lines = items.flatMap((item) => [
    `${item.quantity}x ${item.name}`,
    `Variação: ${item.variationLabel}`,
    item.unitPrice > 0 ? formatPrice(item.unitPrice * item.quantity) : "Preço sob consulta",
    "",
  ]);
  return ["Olá! Gostaria de fazer um pedido:", "", ...lines, `Subtotal: ${formatPrice(subtotal)}`, "", "Nome:", "CEP:", "Forma de entrega:", "", "Gostaria de confirmar disponibilidade e entrega."].join("\n");
}
