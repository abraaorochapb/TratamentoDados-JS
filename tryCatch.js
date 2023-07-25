// Tentamos executar um codigo no bloco try
// Se der errado caimos no bloco catch.
// Bastante utilizado nos fetchs

try {
  const soma = x + y
} catch (error) {
  console.log(`${error}`)
}