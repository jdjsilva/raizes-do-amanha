export function salvarNoLocalStorage(dados) {
  const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  cadastros.push(dados);
  localStorage.setItem('cadastros', JSON.stringify(cadastros));
}

export function carregarCadastros() {
  return JSON.parse(localStorage.getItem('cadastros')) || [];
}