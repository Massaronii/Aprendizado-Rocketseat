/* alert("Advinhe o numero que estou pensando")
let numberUser;
let getRandom  = Number(Math.floor(Math.random() * 10));
let correct = numberUser == getRandom

switch (correct) {
    case false:
    while(numberUser != getRandom) {
        let numberUser = Number(prompt("Digite um número entre 0 e 10")) 
    }
      break;
    default:
      alert(`você acertou o número era ${getRandom}`)
    } */

alert("Advinhe o numero que estou pensando")
let numberUser = Number(prompt("Digite um número entre 0 e 10"))
let getRandom = Math.floor(Math.random() * 10)

while (numberUser != getRandom) {
  numberUser = prompt("erro tente novamente")
}

alert(`parabens você acerto, o numero era ${numberUser}`)
