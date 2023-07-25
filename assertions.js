// Assertions são quando os tratamentos de valores passados pelo usuário geram erro

const checkArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('O array deve ser um array, e não pode ser vazio')
  } else {
    return 'Array valido'
  }
}

console.log(checkArray([1, 2, 3, 4]))
console.log(checkArray([]))