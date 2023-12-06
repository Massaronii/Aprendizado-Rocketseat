let numberOne = Number(prompt("Digite um número"))
let numberTwo = Number(prompt("Digite um segundo número"))
let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A Multiplicação dos dois números é ${multi}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${rest}`)

if(rest == 0){
  alert("A soma dos dois números é par")
}else {
  alert("A soma dos dois números é impar")
}

if(numberOne == numberTwo){
  alert("os números são iguais")
}else{
  alert("os números são diferentes")
}