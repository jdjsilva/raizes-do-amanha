import { navegar, iniciarMenuMobile } from './modules/navegacao.js';

window.addEventListener('hashchange', navegar);
window.addEventListener('DOMContentLoaded', () => {
  navegar();
  iniciarMenuMobile();
});