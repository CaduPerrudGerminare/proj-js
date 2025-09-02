const perguntas = document.querySelectorAll(".pergunta");

const botoes = document.querySelectorAll(".pergunta-btn");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function (e) {
    const pergunta = e.currentTarget.parentElement.parentElement;

    pergunta.classList.toggle("mostrar-texto");
  });
});
