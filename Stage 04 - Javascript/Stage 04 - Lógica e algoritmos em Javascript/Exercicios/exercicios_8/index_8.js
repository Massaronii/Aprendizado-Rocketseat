let patients = [
  {
    name: "Yago",
    idade: 20,
    peso: 80,
    altura: 180,
  },
  {
    name: "Yuri",
    idade: 27,
    peso: 75,
    altura: 183,
  },
  {
    name: "Bruno",
    idade: 23,
    peso: 70,
    altura: 190,
  },
]

let patientsName = []
let patientsIdade = []
let patientsPeso = []
let patientsAltura = []
let index = 0

for(let patient of patients){
  patientsName.push(patient.name)
  patientsIdade.push(patient.idade)
  patientsPeso.push(patient.peso)
  patientsAltura.push(patient.altura)
  alert(
    `${patientsName[index]} tem idade de ${patientsIdade[index]} altura de ${patientsAltura[index]} e peso de ${patientsPeso[index]}`
  )
  index++
  
}