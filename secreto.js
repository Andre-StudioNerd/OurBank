//Programa Secreto
// Declara uma constante 'numero'
// e atribui o valor 169
const numero = 169;
// Define a função responsável por
// calcular a raiz quadrada
function calcularRaiz() {
  // Calcula a raiz quadrada de 'numero'
  // usando a função Math.sqrt() e armazena
  // na constante 'raiz'
  const raiz = Math.sqrt(numero);
  return { numero, raiz };
}
// Execução: chama a função 'calcularRaiz'
// e armazena o objeto retornado em 'resultado'
const resultado = calcularRaiz();
// Exibe o resultado formatado
// no console (ex: "Raiz Quadrada: √169")
console.log(`Raiz Quadrada:
√${resultado.numero} = ${resultado.raiz}`);

//ERROR FATAL
