var cotacao = "";
var dolar = "";
var totalElemento = "";
var button = document.querySelector("#enviar");

button.addEventListener("click", function () {
  var total = 0;
  cotacao = document.querySelector("#cotacao");
  cotacao = parseFloat(cotacao.value);
  dolar = document.querySelector("#dolar");
  dolar = parseFloat(dolar.value);
  total = cotacao * dolar;
  
  totalElemento = document.getElementById("total");
  totalElemento.value = total;
});

