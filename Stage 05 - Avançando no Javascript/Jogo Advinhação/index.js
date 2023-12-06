//variáveis
const buttonTry = document.querySelector("#buttonTry")
const buttonReset = document.querySelector("#buttonReset")
let screenOne = document.querySelector(".screen1")
let screenTwo = document.querySelector(".screen2")
let random = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
buttonTry.addEventListener("click", handleTryClick)
buttonReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown",enterClick)

//Funções
function handleTryClick(event) {
  event.preventDefault() //Não faça o padrão

  const inputValue = document.querySelector("#inputNumber")

if (
  Number(inputValue.value) < 0 ||
  Number(inputValue.value) > 10 ||
  Number(inputValue.value) != 0){
  alert("Insira um número entre 1 e 10")
}

  if (Number(inputValue.value) == random) {
    toggleScreen()
    screenTwo.querySelector("h2").innerText = `acertou em
    ${xAttempts} tentativas`
  }
  inputValue.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  random = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

function enterClick(e){
  document.addEventListener("keydown")
  if(e.key == "Enter" && screenOne.classList.contains("hide")){
    handleResetClick
  }
}