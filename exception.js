// Erro que nós mesmos geramos no código
// Este recurso faz o programa abortar sua execução
// Utilizamos a expressão throw new Error com a mensagem de erro como argumento

let produtos = 10

if (produtos != 10) {
  throw new Error('Valor de produtos não pode ser diferente de 10')
}