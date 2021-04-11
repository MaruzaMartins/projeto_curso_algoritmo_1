/*escreval ("Digite o nome do aluno: ")
Leia (nome)

escreval ("Ditite a nota 01 do aluno: ")
Leia (nota01)

escreval ("Ditite a nota 02 do aluno: ")
Leia (nota02)
media := (nota01 + nota02) / 2

se media >= 5 entao
   escreval("Aprovado!", nome)
Senao
   escreval ("Reprovado!", nome)
fimse*/

var nome, nota1, nota02;
nome = prompt("Digite o nome do aluno: ")
nota01 = prompt("Ditite a nota 01 do aluno: ")
nota02 = prompt("Ditite a nota 02 do aluno: ")

media = (parseInt(nota01) + (parseInt(nota02))/2;  

if (media >= 50){
    alert("Aprovado!"+ nome)
}
else
    alert("Reprovado!"+ nome) 
    