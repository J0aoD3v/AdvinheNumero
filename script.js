var elementoResultado = document.getElementById("resultado");
var elementoDica = document.getElementById("dica");
var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);
var tentativas = 4;
var contador = 0;
elementoResultado.innerHTML = tentativas + " tentativas";

function Chutar() {
  //  console.log(numeroSecreto); Utilizado para conferir o número secreto no console e realizar testes.
  var chute = parseInt(document.getElementById("valor").value);
  if (tentativas >= 1) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "😄Acertou! Reiniciando...";
      setTimeout(function Reiniciar() {
        elementoDica.innerHTML = "";
        numeroSecreto = parseInt(Math.random() * 11, 10);
        tentativas = 4;
        elementoResultado.innerHTML =
          "Reiniciado! " + tentativas + " tentativas";
        console.log(numeroSecreto);
      }, 2000);
    } else if (chute > 10 || chute < 0) {
      alert("Você deve digitar um número entre 0 e 10");
    } else {
      tentativas--;
      elementoResultado.innerHTML =
        "😥Errou! tem mais " + tentativas + " chances";
    }
    if (chute > numeroSecreto) {
      contador++;
      elementoDica.innerHTML = "Dica: ele é menor";
    } else {
      contador++;
      elementoDica.innerHTML = "Dica: ele é maior";
    }
  }
  if (tentativas == 0) {
    elementoResultado.innerHTML =
      "😥Errou todas as tentativas, o número secreto era " +
      numeroSecreto +
      ". Reiniciando...";
    setTimeout(function Reiniciar() {
      elementoDica.innerHTML = "";
      numeroSecreto = parseInt(Math.random() * 11, 10);
      tentativas = 4;
      elementoResultado.innerHTML =
        "Reiniciado! tem " + tentativas + " tentativas";
      console.log(numeroSecreto);
    }, 2000);
  }
}
