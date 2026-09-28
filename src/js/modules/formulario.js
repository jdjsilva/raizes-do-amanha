import { salvarNoLocalStorage } from './storage.js';

const regras = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  telefone: /^\(\d{2}\) \d{4,5}-\d{4}$/,
  cep: /^\d{5}-\d{3}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

export function validarCampo(campo) {
  const valor = campo.value.trim();
  const regra = regras[campo.name];
  let valido = valor !== '';
  if (valido && regra) valido = regra.test(valor);

  campo.classList.remove('campo-erro', 'campo-sucesso');
  campo.classList.add(valido ? 'campo-sucesso' : 'campo-erro');

  const mensagem = campo.parentElement.querySelector('.mensagem-erro');
  if (mensagem) mensagem.textContent = valido ? '' : 'Formato inválido';

  return valido;
}

export function validarFormulario(form) {
  const campos = form.querySelectorAll('input[required]');
  let formValido = true;
  campos.forEach((campo) => {
    if (!validarCampo(campo)) formValido = false;
  });

  if (formValido) {
    salvarNoLocalStorage({
      nome: form.nome.value,
      email: form.email.value,
      cpf: form.cpf.value,
      telefone: form.telefone.value,
      dataEnvio: new Date().toISOString()
    });
  }

  return formValido;
}