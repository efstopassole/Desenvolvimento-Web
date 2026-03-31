const percentualgorjeta = 10
const valorcompra = 500
var valorgorjeta = valorcompra * percentualgorjeta / 100
var valorfinal = valorcompra - valorgorjeta

console.log("O valor final da compra é: R$" + valorfinal)
console.log("O valor da gorjeta é: R$" + valorgorjeta)
console.log("O percentual da gorjeta é: " + percentualgorjeta + "%")
console.log("O valor da compra é: R$" + valorcompra) 