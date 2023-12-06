let student = [
  {
    name: "Osvaldo",
    note1: 7,
    note2: 9,
  },
  {
    name: "Irineu",
    note1: 3,
    note2: 5,
  },
  {
    name: "Turano",
    note1: 6,
    note2: 8,
  },
  {
    name: "Edriene",
    note1: 10,
    note2: 5,
  },
]

function sumAvarege(nota1, nota2) {
  return (nota1 + nota2) / 2
}

for(let students of student){ 
  let sum = sumAvarege(students.note1, students.note2)
  if(sum >= 7){
    alert(`A media do ${students.name} é ${sum}
            Parabens você foi aprovado`)
  }else {
    alert(`A media do ${students.name} é ${sum},
           Não foi dessa vez.`)
  } 
}

