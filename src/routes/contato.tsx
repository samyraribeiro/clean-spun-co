import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STORE } from "@/data/store";
import { whatsappUrl } from "@/lib/whatsapp";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () => pageHead("Contato — " + STORE.name, "Entre em contato conosco pelo WhatsApp ou e-mail.", "/contato"),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
      <div className="mb-8 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Início</Link> / Contato
      </div>
      <h1 className="font-display text-3xl font-bold text-primary">Contato</h1>
      <p className="mt-4 text-muted-foreground">
        Fale conosco pelo WhatsApp para tirar dúvidas, solicitar orçamentos ou acompanhar seu pedido.
      </p>
      <div className="mt-8 grid gap-6 rounded-md border border-border bg-card p-6">
        <div>
          <h2 className="font-bold">WhatsApp</h2>
          <p className="mt-1 text-muted-foreground">{STORE.whatsapp}</p>
          <Button className="mt-4" variant="whatsapp" asChild>
            <a href={whatsappUrl("Olá! Gostaria de falar com a loja.")} target="_blank" rel="noreferrer">
              <MessageCircle /> Conversar no WhatsApp
            </a>
          </Button>
        </div>
        <div>
          <h2 className="font-bold">E-mail</h2>
          <p className="mt-1 text-muted-foreground">{STORE.email}</p>
        </div>
        <div>
          <h2 className="font-bold">Horário de atendimento</h2>
          <p className="mt-1 text-muted-foreground">{STORE.hours}</p>
        </div>
      </div>
    </div>
  );
}
