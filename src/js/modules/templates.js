const projetos = [
  { titulo: 'Projeto Educação', imagem: '/src/imagens/projeto-educacao.jpg', categoria: 'educacao', descricao: 'Reforço escolar e alfabetização digital.' },
  { titulo: 'Segurança Alimentar', imagem: '/src/imagens/projeto-alimentacao.jpg', categoria: 'alimentacao', descricao: 'Cestas básicas e hortas comunitárias.' },
  { titulo: 'Geração de Renda', imagem: '/src/imagens/projeto-renda.jpg', categoria: 'renda', descricao: 'Cursos profissionalizantes.' }
];

export function criarCardProjeto(projeto) {
  return `
    <article class="card-projeto">
      <img src="${projeto.imagem}" alt="${projeto.titulo}">
      <span class="badge">${projeto.categoria}</span>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    </article>
  `;
}

export function getProjetos() {
  return projetos;
}