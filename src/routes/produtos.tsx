import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/store/store-ui";
import { pageHead } from "@/lib/seo";
export const Route=createFileRoute("/produtos")({validateSearch:(s:Record<string,unknown>)=>({busca:typeof s.busca==="string"?s.busca:""}),head:()=>pageHead("Produtos para Limpeza — [NOME DA LOJA]","Encontre panos de chão, prato, microfibra, pia e produtos têxteis para limpeza.","/produtos"),component:Page});
function Page(){const {busca}=Route.useSearch();return <CatalogPage title="Todos os produtos" description="Panos e produtos têxteis para diferentes rotinas de limpeza." initialQuery={busca}/>}
