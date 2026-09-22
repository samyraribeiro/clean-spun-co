import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, PackageCheck, Recycle, ShoppingBag, Store, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryGrid, ProductGrid, SectionHeading } from "@/components/store/store-ui";
import { STORE, products } from "@/data/store";
import { whatsappUrl } from "@/lib/whatsapp";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/")({ head:()=>pageHead("Panos para Limpeza e Uso Doméstico — [NOME DA LOJA]","Panos de chão, prato, microfibra, pia, sacos alvejados e kits para casa, comércio e empresa.","/"), component: Home });
function Home(){return <>
<section className="border-b border-border bg-muted"><div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-14"><div><div className="mb-3 text-xs font-bold uppercase text-cta">Limpeza com praticidade</div><h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">Praticidade e qualidade para a limpeza do dia a dia</h1><p className="mt-5 max-w-xl text-lg text-muted-foreground">Panos e produtos têxteis para sua casa, comércio ou empresa.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button size="lg" variant="cta" asChild><Link to="/produtos" search={{ busca: "" }}><ShoppingBag/>Ver produtos</Link></Button><Button size="lg" variant="whatsapp" asChild><a href={whatsappUrl("Olá! Gostaria de conhecer os produtos disponíveis.")} target="_blank" rel="noreferrer"><MessageCircle/>Comprar pelo WhatsApp</a></Button></div></div><div className="relative overflow-hidden rounded-md"><img src={STORE.heroImage} alt="Composição demonstrativa de panos de limpeza" width={1600} height={1000} className="aspect-[8/5] w-full object-cover"/><span className="absolute bottom-3 left-3 rounded-sm bg-background/90 px-2 py-1 text-xs text-muted-foreground">Imagem demonstrativa</span></div></div></section>
<section className="mx-auto max-w-7xl px-4 py-16 lg:px-8"><SectionHeading eyebrow="Categorias" title="Encontre o que você precisa"/><CategoryGrid/></section>
<section className="bg-muted"><div className="mx-auto max-w-7xl px-4 py-16 lg:px-8"><div className="flex items-end justify-between gap-4"><SectionHeading eyebrow="Mais procurados" title="Produtos em destaque" text="Escolha a variação ideal e adicione ao carrinho."/><Button variant="outline" asChild><Link to="/produtos" search={{ busca: "" }}>Ver todos</Link></Button></div><ProductGrid items={products.filter(p=>p.featured)}/></div></section>
<section className="mx-auto max-w-7xl px-4 py-16 lg:px-8"><SectionHeading eyebrow="Vantagens" title="Feitos para a rotina de limpeza"/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{([
  [Recycle, "Laváveis e reutilizáveis"],
  [PackageCheck, "Kits econômicos"],
  [Users, "Compra em quantidade"],
  [MessageCircle, "Atendimento pelo WhatsApp"],
  [Store, "Uso doméstico e profissional"],
] as const).map(([Icon, label]) => <div key={label} className="border-l-2 border-cta p-4"><Icon className="size-6 text-primary"/><div className="mt-3 text-sm font-bold">{label}</div></div>)}</div></section>
<section className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center lg:px-8"><div><div className="text-xs font-bold uppercase text-cta">Atacado</div><h2 className="mt-2 text-3xl font-bold">Precisa de uma quantidade maior?</h2><p className="mt-3 max-w-2xl text-primary-foreground/75">Atendemos residências, profissionais de limpeza, comércios e empresas. Consulte condições para pedidos em maior quantidade.</p></div><Button size="lg" variant="cta" asChild><a href={whatsappUrl("Olá! Gostaria de solicitar um orçamento para uma quantidade maior.")} target="_blank" rel="noreferrer">Solicitar orçamento</a></Button></div></section>
</>}
