let menu
let list = []

while (menu != 3) {
  menu = Number(
    prompt(`Digite a opção desejada:
                   1. Cadastrar um item na lista
                   2. Mostrar itens cadastrados
                   3. Sair do programa`)
  )
  switch (menu) {
    case 1:
      let item = prompt(`adicione um item a lista`)
      list.push(item)
      break
    case 2:
      if (list.length == 0) {
        alert("não existe itens cadastrados")
      } else {
        alert(list)
      }
      break
    case 3:
      alert("voce saiu do programa")
      break
    default:
      alert("invalido")
  }
}
