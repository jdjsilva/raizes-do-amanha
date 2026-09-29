import { criarCardProjeto, getProjetos } from './templates.js';
import { validarCampo, validarFormulario } from './formulario.js';

const container = document.getElementById('conteudo');

function renderInicio() {
  const secao = document.createElement('div');
  secao.className = 'container';
  secao.innerHTML = `
    <div class="hero__texto secao">
      <h1>Instituto Raízes do Amanhã</h1>
      <p>Fortalecendo famílias através de educação, segurança alimentar e geração de renda.</p>
      <a href="#cadastro" class="btn">Quero fazer parte</a>
    </div>
    <img src="/imagens/equipe-voluntarios.jpg" alt="Voluntários em ação" class="hero__imagem">
  `;
  return secao;
}

function renderProjetos() {
  const secao = document.createElement('div');
  secao.className = 'container';
  const cards = getProjetos().map(criarCardProjeto).join('');
  secao.innerHTML = `
    <div class="secao">
      <h1>Nossos Projetos</h1>
    </div>
    <div class="secao-projetos">${cards}</div>
  `;
  return secao;
}

function renderCadastro() {
  const secao = document.createElement('div');
  secao.className = 'container';
  secao.innerHTML = `
    <div class="secao">
      <h1>Cadastre-se</h1>
      <form id="form-cadastro" novalidate>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label for="nome">Nome completo</label>
          <input type="text" id="nome" name="nome" required>
          <span class="mensagem-erro"></span>

          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required>
          <span class="mensagem-erro"></span>

          <label for="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>
          <span class="mensagem-erro"></span>
        </fieldset>

        <fieldset>
          <legend>Contato</legend>
          <label for="telefone">Telefone</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>
          <span class="mensagem-erro"></span>
        </fieldset>

        <button type="submit" class="btn">Enviar cadastro</button>
      </form>
      <div class="alerta alerta--sucesso" id="alertaSucesso" style="display:none;">Cadastro enviado com sucesso!</div>
    </div>
  `;

  const form = secao.querySelector('#form-cadastro');
  form.addEventListener('input', (e) => validarCampo(e.target));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarFormulario(form)) {
      secao.querySelector('#alertaSucesso').style.display = 'block';
      form.reset();
    }
  });

  return secao;
}

const rotas = { inicio: renderInicio, projetos: renderProjetos, cadastro: renderCadastro };

export function navegar() {
  const hash = window.location.hash.replace('#', '') || 'inicio';
  const render = rotas[hash] || renderInicio;

  container.innerHTML = '';
  container.appendChild(render());

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.classList.toggle('ativo', link.dataset.rota === hash);
  });
}

export function iniciarMenuMobile() {
  const botao = document.getElementById('botaoMenu');
  const lista = document.getElementById('listaNav');
  botao.addEventListener('click', () => {
    lista.classList.toggle('ativa');
    botao.setAttribute('aria-expanded', lista.classList.contains('ativa'));
  });
}