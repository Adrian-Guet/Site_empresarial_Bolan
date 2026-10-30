
//bora Bolan
//aqui quando inicia o site, ele lê todos faq pergunta e adiciona na perguntas
const perguntas = document.querySelectorAll('.faq-pergunta');


//essa funcao é chamada dentro da função abaixo
function alternarResposta(botao) {
  const item = botao.parentElement;
  const aberto = item.classList.toggle('aberto');
  botao.setAttribute('aria-expanded', aberto);
}

//pra cada pergunta, chama a função ao clicar
perguntas.forEach(function (botao) {
  botao.addEventListener('click', function () {//fica escutando, se "escutar" um click, chama a funcao generica, que chama a alternarResposta
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


