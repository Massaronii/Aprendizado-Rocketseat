let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let buttonOpen = document.querySelector("#fortune-cookie")
let buttonReset = document.querySelector("#open-cookie")
const cookieMessage = document.getElementById("cookie-message")

let messages = [
  "A vida é feita de pequenos momentos de felicidade.",
  "Mantenha a fé, as coisas vão dar certo.",
  "A esperança é a última que morre.",
  "Tudo acontece por um motivo.",
  "A vida é curta, sorria enquanto pode.",
  "Os desafios são oportunidades para se mostrar o que você é capaz.",
  "A persistência é a chave do sucesso.",
  "O sucesso é uma jornada, não um destino.",
  "Oportunidades são escondidas dentro de cada fracasso.",
  "O impossível é apenas uma opinião, não uma realidade.",
  "A felicidade é uma escolha, escolha ser feliz.",
  "Não importa o tamanho do problema, a atitude é tudo.",
  "A gratidão é a chave para a felicidade.",
  "O amor é a força mais poderosa do mundo.",
  "A determinação é a chave para vencer.",
  "A bondade é a chave para a paz interior.",
  "A paciência é a chave para a sabedoria.",
  "A verdadeira riqueza é a amizade e a família.",
  "Otimismo é a chave para uma vida feliz.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "A honestidade é a chave para a confiança.",
  "A generosidade é a chave para a felicidade dos outros.",
  "A humildade é a chave para a sabedoria.",
  "A simplicidade é a chave para a felicidade.",
  "A confiança é a chave para o sucesso.",
  "A coragem é a chave para superar medos e obstáculos.",
  "A tolerância é a chave para a paz.",
  "A empatia é a chave para o entendimento dos outros.",
  "A sabedoria vem com a idade e a experiência.",
  "A criatividade é a chave para o sucesso.",
]

function randomMessage(){
  let randomMessage = Math.floor(Math.random() * messages.length)
  cookieMessage.innerHTML = messages[randomMessage]
}

function toggleClick(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function randomMessageAndToggleClick(){
  toggleClick()
  randomMessage()
}

buttonOpen.addEventListener("click", randomMessageAndToggleClick)
buttonReset.addEventListener("click", randomMessageAndToggleClick)