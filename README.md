# Minimal Link Page

Uma página web minimalista com **perfil de usuário**, **botões interativos**, **loader animado** e **modo escuro**, inspirada em **design neumorfista**, com cores neutras e transições suaves.

---

## Funcionalidades

- Loader animado na inicialização da página.
- Botão de alternância de **modo escuro/claro**.
- Loader acompanha a cor do tema ao trocar entre claro e escuro.
- Botões interativos com efeito de pressão (neumorfismo).
- Layout responsivo para dispositivos móveis.

---

## Tecnologias

- HTML5
- CSS3 (neumorfismo, transições, animações)
- JavaScript (modo escuro, loader, persistência com localStorage)

---

## Como Usar

1. Clone o repositório ou faça download dos arquivos.
2. Abra `index.html` em um navegador moderno.
3. Clique no **botão de modo escuro** (🌙 / ☀️) para alternar entre temas.
4. O **loader** será exibido no início e durante a troca de tema.

---

## Personalização

- **Cores do tema:** altere no `:root` (tema claro) e em `body.dark-mode` (tema escuro) dentro do `style.css`.
- **Tempo do loader:** ajuste o `setTimeout` no `script.js` para alterar a duração da animação.
- **Botões:** estilize `.btn` e `.link-buttons button` para mudar cores, bordas e animações.

---

## Responsividade

- A página é adaptável a **telas menores**, mantendo o layout centralizado e os elementos proporcionais.
- Ajustes de largura do card e botões para mobile estão no CSS usando `@media queries`.

---

## Observações

- O tema selecionado é salvo no **localStorage**, mantendo a preferência do usuário entre visitas.
- O design segue princípios de **minimalismo e simplicidade**, evitando cores saturadas ou elementos poluídos.


