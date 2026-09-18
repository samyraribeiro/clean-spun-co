import { createFileRoute } from "@tanstack/react-router"; import { CartPageContent } from "@/components/store/store-ui"; import { pageHead } from "@/lib/seo";
export const Route=createFileRoute("/carrinho")({head:()=>pageHead("Carrinho — [NOME DA LOJA]","Revise os itens e finalize seu pedido pelo WhatsApp.","/carrinho"),component:CartPageContent});
