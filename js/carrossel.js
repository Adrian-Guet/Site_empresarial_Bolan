/* carrossel.js - Carrossel simples da Home
   Ideia: os slides ficam lado a lado e a gente move o trilho para a esquerda. */

const trilho = document.getElementById("carrossel-trilho");
const slides = document.querySelectorAll(".slide");
const areaPontos = document.getElementById("carrossel-pontos");
const botaoAnterior = document.getElementById("btn-anterior");
const botaoProximo = document.getElementById("btn-proximo");

let atual = 0;           // número do slide que aparece (começa em 0)
const TEMPO = 5000;      // tempo da troca automática: 5000 = 5 segundos

// Mostra o slide de número "numero"
function mostrarSlide(numero) {
  if (numero >= slides.length) {
    numero = 0;                  // passou do último: volta ao primeiro
  }
  if (numero < 0) {
    numero = slides.length - 1;  // antes do primeiro: vai ao último
  }
  atual = numero;

  // slide 0 = 0%, slide 1 = -100%, slide 2 = -200%
  trilho.style.transform = "translateX(-" + atual * 100 + "%)";

  // Destaca só a bolinha do slide atual
  const bolinhas = document.querySelectorAll(".ponto");
  for (let i = 0; i < bolinhas.length; i++) {
    bolinhas[i].classList.remove("ativo");
  }
  if (bolinhas[atual]) {
    bolinhas[atual].classList.add("ativo");
  }
}

function proximo() {
  mostrarSlide(atual + 1);
}

function anterior() {
  mostrarSlide(atual - 1);
}

// Cria uma bolinha para cada slide
if (areaPontos) {
  for (let i = 0; i < slides.length; i++) {
    const bolinha = document.createElement("button");
    bolinha.className = "ponto";
    bolinha.onclick = function () {
      mostrarSlide(i);
    };
    areaPontos.appendChild(bolinha);
  }
}

// Setas (só liga se os botões existirem no HTML)
if (botaoProximo) {
  botaoProximo.onclick = proximo;
}
if (botaoAnterior) {
  botaoAnterior.onclick = anterior;
}

// Troca automática: chama "proximo" a cada TEMPO milissegundos
setInterval(proximo, TEMPO);

// Começa no primeiro slide
mostrarSlide(0);

