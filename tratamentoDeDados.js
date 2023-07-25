// Nunca devemos confiar no dado que é passado pelo usuário
// Sempre devemos criar validação e tratamento para os memos

function checkNum (num){
  const isnum = Number(num) 
  if (Number.isNaN(isnum)) {
    return 'Valor inválido'
  } else {
    return 'Valor válido'
  }
}

console.log(checkNum('abc'))
console.log(checkNum('123'))
console.log(checkNum(123))