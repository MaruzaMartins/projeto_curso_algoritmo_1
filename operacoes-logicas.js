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
