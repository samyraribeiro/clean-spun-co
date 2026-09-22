import { createFileRoute, Link } from "@tanstack/react-router";
import { STORE } from "@/data/store";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/trocas-e-devolucoes")({
  head: () => pageHead("Trocas e Devoluções — " + STORE.name, "Política de trocas e devoluções da loja.", "/trocas-e-devolucoes"),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
      <div className="mb-8 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Início</Link> / Trocas e Devoluções
      </div>
      <h1 className="font-display text-3xl font-bold text-primary">Trocas e Devoluções</h1>
      <p className="mt-4 text-muted-foreground">
        Confira as condições para troca ou devolução de produtos adquiridos na {STORE.name}.
      </p>
      <div className="mt-8 space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-bold text-foreground">1. Condições gerais</h2>
          <p className="mt-2">Aceitamos trocas ou devoluções em caso de defeito, divergência ou arrependimento, conforme o Código de Defesa do Consumidor.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">2. Prazo</h2>
          <p className="mt-2">O prazo para solicitar troca ou devolução deve ser combinado no atendimento, respeitando a legislação vigente.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">3. Produtos</h2>
          <p className="mt-2">Os produtos devem estar sem uso e com a embalagem original, quando aplicável.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">4. Procedimento</h2>
          <p className="mt-2">Entre em contato pelo WhatsApp {STORE.whatsapp} ou e-mail {STORE.email} para iniciar o processo.</p>
        </section>
      </div>
    </div>
  );
}
