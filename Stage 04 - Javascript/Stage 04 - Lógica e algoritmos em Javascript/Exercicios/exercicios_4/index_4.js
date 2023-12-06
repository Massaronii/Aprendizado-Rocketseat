/*let name = prompt("digite o nome do aluno")
let nota1 = prompt("digite a primeira nota do aluno")
let nota2 = prompt("digite a segunda nota do aluno")
let nota3 = prompt("digite a 3 nota do aluno")

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

media = (nota1 + nota2 + nota3) / 3

if(media >= 6){
  alert(`parabens ${name} você passou com a nota ${media}`)
}else {
  alert(`Aluno ${name} ficou de recuperação com a nota ${media} mas não desista e de seu melhor na prova de recuperação`)
}  meu jeito */

let name = prompt("digite o nome do aluno")
let nota1 = prompt("digite a primeira nota do aluno")
let nota2 = prompt("digite a segunda nota do aluno")
let nota3 = prompt("digite a 3 nota do aluno")

media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

let result = media >= 6

if (result) {
  alert(`parabens ${name} você passou com a nota ${media}`)
} else {
  alert(
    `Aluno ${name} ficou de recuperação com a nota ${media} mas não desista e de seu melhor na prova de recuperação`
  )
} 