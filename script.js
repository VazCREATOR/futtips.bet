function simular() {
const valor = document.getElementById("valor").value;
const odd = 1.9;
const retorno = valor * odd;

document.getElementById("resultado").Innertext=
'Retorno simulado: R${retorno.tofixed(2)} (dinheiro ficticio)';}