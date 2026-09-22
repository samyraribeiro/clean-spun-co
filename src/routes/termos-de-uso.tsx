import { createFileRoute, Link } from "@tanstack/react-router";
import { STORE } from "@/data/store";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => pageHead("Termos de Uso — " + STORE.name, "Termos e condições de uso do site.", "/termos-de-uso"),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
      <div className="mb-8 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Início</Link> / Termos de Uso
      </div>
      <h1 className="font-display text-3xl font-bold text-primary">Termos de Uso</h1>
      <p className="mt-4 text-muted-foreground">
        Ao acessar e usar o site da {STORE.name}, você concorda com os termos abaixo.
      </p>
      <div className="mt-8 space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-bold text-foreground">1. Aceitação</h2>
          <p className="mt-2">O uso do site implica na aceitação integral destes termos.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">2. Informações dos produtos</h2>
          <p className="mt-2">As descrições e imagens são demonstrativas. Preços e disponibilidade devem ser confirmados no atendimento.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">3. Pedidos</h2>
          <p className="mt-2">Os pedidos são feitos pelo WhatsApp e confirmados pela loja. A disponibilidade será verificada no atendimento.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">4. Limitação de responsabilidade</h2>
          <p className="mt-2">A loja não se responsabiliza por inconsistências resultantes de informações incorretas fornecidas pelo cliente.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">5. Contato</h2>
          <p className="mt-2">Dúvidas podem ser enviadas para {STORE.email} ou WhatsApp {STORE.whatsapp}.</p>
        </section>
      </div>
    </div>
  );
}
