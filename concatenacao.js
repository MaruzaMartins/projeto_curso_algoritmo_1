/*
   nome: caractere
   numero: real
inicio
// Seção de Comandos
   escreval("Digite o nome: ")
   leia (nome)
   escreval("Digite o numero: ")
   leia (numero)
   
   escreval(nome," : ", numero)
   */

   var nome, numero

   nome = prompt("Digite o seu nome: ")
   numero = prompt("Digite o seu numero: ")

   document.getElementById("paragrafo").innerText = nome + " : " + numero