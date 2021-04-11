/* 
passou := falso
   escreval ("Digite o nome do aluno: ")
   Leia (nome)

   escreval ("Ditite a nota 01 do aluno: ")
   Leia (nota01)

   escreval ("Ditite a nota 02 do aluno: ")
   Leia (nota02)
   media := (nota01 + nota02) / 2

   se media >= 50 entao
      passou := verdadeiro
   fimse

   se !passou && media ==0 entao //conjunçao
      escreval("Aprovado!", nome)
   Senao
      escreval ("Reprovado!", nome)
*/ 

var nome, nota1, nota02, passou;

passou+ false;
nome = prompt("Digite o nome do aluno: ")
nota01 = prompt("Ditite a nota 01 do aluno: ")
nota02 = prompt("Ditite a nota 02 do aluno: ")

media = (parseInt(nota01) + parseInt(nota02)) / 2;  

if (media >= 50)
    passou = true

if (passou && media >=70)
    alert("Aprovado!"+ nome)
else
    alert("Reprovado!"+ nome)
