// ----- FAQ -----
// Pega todos os botões de pergunta da página

const perguntas = document.querySelectorAll('.faq-pergunta');

function alternarResposta(botao) {
  const item = botao.parentElement;
  const aberto = item.classList.toggle('aberto');
  botao.setAttribute('aria-expanded', aberto);
}

perguntas.forEach(function (botao) {
  botao.addEventListener('click', function () {
    alternarResposta(botao);
  });
});


// ----- MENU MOBILE -----
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-principal');

btnMenu.addEventListener('click', function () {
  // Adiciona a classe "aberto" se não existir, remove se existir
  const aberto = menu.classList.toggle('aberto');

  // Avisa leitores de tela se o menu está expandido
  btnMenu.setAttribute('aria-expanded', aberto);
});


