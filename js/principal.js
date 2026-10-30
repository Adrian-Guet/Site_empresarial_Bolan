// ----- FAQ -----
// Pega todos os botões de pergunta da página
const perguntas = document.querySelectorAll('.faq-pergunta');

perguntas.forEach(function (botao) {
  // Ao clicar em uma pergunta...
  botao.addEventListener('click', function () {
    // ...o pai do botão (.faq-item) ganha ou perde a classe "aberto"
    const item = botao.parentElement;
    const aberto = item.classList.toggle('aberto');

    // Avisa leitores de tela se está expandido (true) ou não (false)
    botao.setAttribute('aria-expanded', aberto);
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


