import { createFileRoute, Link } from "@tanstack/react-router";
import { STORE } from "@/data/store";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => pageHead("Política de Privacidade — " + STORE.name, "Conheça como seus dados são tratados.", "/politica-de-privacidade"),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
      <div className="mb-8 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Início</Link> / Política de Privacidade
      </div>
      <h1 className="font-display text-3xl font-bold text-primary">Política de Privacidade</h1>
      <p className="mt-4 text-muted-foreground">
        A {STORE.name} valoriza a privacidade dos seus dados. Esta página descreve como coletamos, usamos e protegemos suas informações.
      </p>
      <div className="mt-8 space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-bold text-foreground">1. Dados coletados</h2>
          <p className="mt-2">Coletamos apenas os dados necessários para atendimento e envio de pedidos, como nome, telefone, e-mail e endereço.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">2. Uso das informações</h2>
          <p className="mt-2">Seus dados são usados exclusivamente para comunicação sobre pedidos, orçamentos e suporte ao cliente.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">3. Compartilhamento</h2>
          <p className="mt-2">Não vendemos seus dados. Podemos compartilhar apenas com prestadores de serviço essenciais para entrega.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">4. Segurança</h2>
          <p className="mt-2">Adotamos medidas de segurança para proteger suas informações contra acessos não autorizados.</p>
        </section>
        <section>
          <h2 className="font-bold text-foreground">5. Contato</h2>
          <p className="mt-2">Em caso de dúvidas, entre em contato pelo e-mail {STORE.email} ou WhatsApp {STORE.whatsapp}.</p>
        </section>
      </div>
    </div>
  );
}
