# Plano — Loja virtual de produtos têxteis para limpeza

## Direção visual

- E-commerce mobile first, com aparência comercial, confiável e organizada.
- Paleta em azul-marinho, branco e laranja apenas para ações e destaques.
- Tipografia moderna e legível, bastante espaço em branco, bordas discretas e sombras leves.
- Fotografias dos produtos em primeiro plano; nenhuma informação comercial não fornecida será inventada.
- Dados ausentes aparecerão como placeholders editáveis: `[NOME DA LOJA]`, `[WHATSAPP]`, `[INSTAGRAM]`, `[EMAIL]`, `[ENDEREÇO]` e `[HORÁRIO]`.

## Estrutura visual principal

1. **Cabeçalho fixo e responsivo**
   - Logo/nome configurável, busca, navegação, WhatsApp e carrinho com contador.
   - Menu hambúrguer no celular.
2. **Página inicial comercial**
   - Faixa principal compacta com chamada, imagem de produtos e dois botões.
   - Categorias com imagens.
   - Produtos em destaque.
   - Ofertas, exibidas somente quando houver promoção válida cadastrada.
   - Benefícios condicionados aos dados reais dos produtos.
   - Área para pedidos em quantidade.
   - Avaliações ocultas enquanto não houver dados reais.
   - Contato e rodapé completo.
3. **Catálogo**
   - Busca textual, filtros por categoria e ordenação.
   - Grade responsiva com preço, variações resumidas e ações de compra.
   - Estado vazio claro quando nenhum item corresponder aos filtros.
4. **Detalhe do produto**
   - Galeria ampliável, miniaturas, informações, disponibilidade configurada, variações e quantidade.
   - Ações de adicionar ao carrinho e comprar pelo WhatsApp.
   - Descrição, características e aviso têxtil quando aplicável.
5. **Carrinho**
   - Acesso rápido pelo cabeçalho e página dedicada.
   - Alterar quantidade, remover, limpar, subtotal e total.
   - Persistência no navegador após recarregar a página.
6. **Finalização no WhatsApp**
   - Mensagem automática com itens, variações, quantidades, valores e campos de nome, CEP e entrega.
   - Número centralizado na configuração da loja.

## Páginas e URLs

- `/` — início
- `/produtos` — catálogo completo
- `/kits` — produtos da categoria Kits
- `/ofertas` — promoções ativas cadastradas
- `/contato` — canais e horário configuráveis
- `/carrinho` — revisão e finalização do pedido
- `/produto/$slug` — página individual de cada produto
- `/categoria/$slug` — listagem por categoria
- `/politica-de-privacidade` — conteúdo placeholder editável
- `/termos-de-uso` — conteúdo placeholder editável
- `/trocas-e-devolucoes` — conteúdo placeholder editável

Cada página pública terá título, descrição, dados sociais e URL canônica específicos.

## Produtos demonstrativos

Centralizar os seis produtos solicitados em um único arquivo editável:

- Pano de Chão Saco Alvejado GA
- Pano de Microfibra
- Pano de Pia Duplo Liso
- Pano de Pia Duplo Xadrez
- Pano de Pia Simples
- Pano de Prato

A estrutura incluirá `id`, `slug`, `nome`, `categoria`, `descricao`, `imagens`, `material`, `medidas`, `variacoes`, `preco`, `precoPromocional`, período promocional, `estoque` e `destaque`. Campos não informados ficarão explicitamente sem valor, sem dados fictícios.

## Conteúdo visual dos produtos

- Criar um conjunto coerente de imagens demonstrativas para os produtos e categorias, sem logotipos, textos impressos ou características técnicas inventadas.
- Identificar visualmente as imagens como demonstrativas onde necessário, permitindo substituição fácil por fotos reais posteriormente.
- Preservar integralmente futuros materiais oficiais enviados pela loja.

## Componentes e comportamento

- Componentes separados para cabeçalho, busca, categorias, cards, galeria, seletor de variação, quantidade, carrinho, WhatsApp, benefícios, contato e rodapé.
- Configuração única para nome, contatos, endereço, cores, frete e comportamento da loja.
- Funções isoladas para promoções por data, formatação monetária, filtros, carrinho e mensagem do WhatsApp.
- Carrinho salvo no `localStorage`, com proteção contra erros e atualização automática do contador.
- Layout sem rolagem horizontal, controles grandes no celular e navegação por teclado.

## Implementação técnica

- React com TanStack Start e rotas tipadas.
- Tailwind CSS v4 com tokens semânticos em `src/styles.css`.
- Dados locais em TypeScript para o MVP, preparados para futura troca por banco de dados.
- Estado do carrinho compartilhado por contexto React.
- Ícones acessíveis, textos alternativos, foco visível e respeito à preferência de movimento reduzido.
- Sem backend, pagamento online, estoque real, cálculo de frete ou painel administrativo nesta etapa.

## Validação

- Conferir páginas e interações em celular e desktop.
- Testar busca, filtros, variações, quantidades, persistência do carrinho e mensagem do WhatsApp.
- Verificar ausência de rolagem horizontal, textos cortados, elementos sobrepostos e links sem destino.
- Confirmar que nenhum desconto, avaliação, disponibilidade, frete ou dado comercial foi inventado.
