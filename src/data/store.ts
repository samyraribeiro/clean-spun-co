import heroImage from "@/assets/hero-textiles.jpg";
import sacoImage from "@/assets/produto-saco-alvejado.jpg";
import microfibraImage from "@/assets/produto-microfibra.jpg";
import piaLisoImage from "@/assets/produto-pia-liso.jpg";
import piaXadrezImage from "@/assets/produto-pia-xadrez.jpg";
import piaSimplesImage from "@/assets/produto-pia-simples.jpg";
import pratoImage from "@/assets/produto-pano-prato.jpg";

export const STORE = {
  name: "[NOME DA LOJA]",
  whatsapp: "[WHATSAPP]",
  instagram: "[INSTAGRAM]",
  email: "[EMAIL]",
  address: "[ENDEREÇO]",
  hours: "[HORÁRIO DE ATENDIMENTO]",
  shipping: "[INFORMAÇÕES DE ENVIO]",
  heroImage,
} as const;

export type ProductVariation = { id: string; label: string; price: number };
export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  images: string[];
  material?: string;
  measurements?: string;
  color?: string;
  composition?: string[];
  features: string[];
  notice?: string;
  variations: ProductVariation[];
  price: number;
  promotionalPrice?: number;
  promotionStart?: string;
  promotionEnd?: string;
  stock?: number;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: "saco-alvejado-ga", slug: "saco-alvejado-ga", name: "Pano de Chão Saco Alvejado GA", category: "Panos de Chão", categorySlug: "panos-de-chao",
    description: "Pano de chão produzido em 100% algodão, indicado para limpeza doméstica, comercial e profissional.", images: [sacoImage], material: "100% algodão", color: "Branco",
    features: ["100% algodão", "Lavável", "Reutilizável", "Trama rústica", "Uso com rodo ou manualmente", "Indicado para pisos", "Uso doméstico e profissional"],
    notice: "Por se tratar de produto têxtil, podem ocorrer pequenas variações naturais de acabamento, trama e dimensões.",
    variations: [{ id: "10", label: "10 unidades", price: 49.9 }, { id: "20", label: "20 unidades", price: 94.9 }, { id: "30", label: "30 unidades", price: 134.9 }], price: 49.9, featured: true,
  },
  {
    id: "pano-microfibra", slug: "pano-microfibra", name: "Pano de Microfibra", category: "Microfibra", categorySlug: "microfibra",
    description: "Pano de microfibra para tarefas de limpeza do dia a dia.", images: [microfibraImage], measurements: "29 × 29 cm", composition: ["80% poliéster", "20% poliamida"],
    features: ["Lavável", "Reutilizável"], notice: "Cores sortidas enviadas conforme disponibilidade.",
    variations: [{ id: "quantidade", label: "Quantidade a definir", price: 0 }], price: 0, featured: true,
  },
  {
    id: "pano-pia-duplo-liso", slug: "pano-pia-duplo-liso", name: "Pano de Pia Duplo Liso", category: "Panos de Pia", categorySlug: "panos-de-pia",
    description: "Pano de pia duplo liso em algodão para uso doméstico.", images: [piaLisoImage], measurements: "30 × 40 cm", material: "100% algodão", features: ["100% algodão"], variations: [{ id: "unidade", label: "Unidade", price: 0 }], price: 0, featured: true,
  },
  {
    id: "pano-pia-duplo-xadrez", slug: "pano-pia-duplo-xadrez", name: "Pano de Pia Duplo Xadrez", category: "Panos de Pia", categorySlug: "panos-de-pia",
    description: "Pano de pia duplo xadrez em algodão para uso doméstico.", images: [piaXadrezImage], measurements: "30 × 40 cm", material: "100% algodão", features: ["100% algodão"], variations: [{ id: "unidade", label: "Unidade", price: 0 }], price: 0, featured: true,
  },
  {
    id: "pano-pia-simples", slug: "pano-pia-simples", name: "Pano de Pia Simples", category: "Panos de Pia", categorySlug: "panos-de-pia",
    description: "Pano de pia simples em algodão para uso doméstico.", images: [piaSimplesImage], material: "100% algodão", features: ["100% algodão"], variations: [{ id: "unidade", label: "Unidade", price: 0 }], price: 0, featured: false,
  },
  {
    id: "pano-prato", slug: "pano-prato", name: "Pano de Prato", category: "Panos de Prato", categorySlug: "panos-de-prato",
    description: "Pano de prato em algodão para uso doméstico.", images: [pratoImage], material: "100% algodão", features: ["100% algodão"], variations: [{ id: "unidade", label: "Unidade", price: 0 }], price: 0, featured: true,
  },
];

export const categories = [
  { name: "Microfibra", slug: "microfibra", image: microfibraImage },
  { name: "Panos de Chão", slug: "panos-de-chao", image: sacoImage },
  { name: "Panos de Prato", slug: "panos-de-prato", image: pratoImage },
  { name: "Panos de Pia", slug: "panos-de-pia", image: piaLisoImage },
  { name: "Sacos Alvejados", slug: "sacos-alvejados", image: sacoImage },
  { name: "Kits", slug: "kits", image: heroImage },
  { name: "Ofertas", slug: "ofertas", image: microfibraImage },
] as const;

export function isPromotionActive(product: Product, now = new Date()) {
  if (product.promotionalPrice === undefined || !product.promotionStart || !product.promotionEnd) return false;
  return now >= new Date(product.promotionStart) && now <= new Date(product.promotionEnd);
}

export function productPrice(product: Product, variation?: ProductVariation) {
  if (isPromotionActive(product) && product.promotionalPrice !== undefined) return product.promotionalPrice;
  return variation?.price ?? product.price;
}

export function formatPrice(value: number) {
  if (value <= 0) return "Preço sob consulta";
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}
