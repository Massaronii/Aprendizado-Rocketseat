import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = function(event) {
  event.preventDefault()  

  const weight = inputWeight.value 
  const height = inputHeight.value

  const weightORHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightORHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

addEventListener("input", event => {})

inputWeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()