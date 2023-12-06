const patients = [
  {
    name: "Agnaldo",
    age: 48,
    weight: 70,
    height: 170,
  },
  {
    name: "Juselina",
    age: 73,
    weight: 60,
    height: 150,
  },
  {
    name: "turano",
    age: 30,
    weight: 60,
    height: 160,
  },
]


function calculateIMC(weight, height) {
   return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printIMC(patient) {
  return `${patient.name} tem o IMC de ${calculateIMC(patient.weight, patient.height)}`
}

for(let patient of patients){
  let messageIMC = printIMC(patient)
  alert(messageIMC)
}




/*function calculateIMC(patient) {
  return `${patient.name} tem o IMC de ${(
      patient.weight /
      (patient.height / 100) ** 2
    ).toFixed(2)}`
  
}

for(let patient of patients){
  calculateIMC(patient)
} */