// -------------------------------------------------- EXEMPLO 1 --------------------------------------------------
const numeros = [3, 4, 7, 1, 9, 7];

function dobro(num) {
  return num * 2;
}

function metade(num) {
  return num / 2;
}

const resultado1 = numeros.map(metade);

console.log(resultado1);
//-------------------------------------------------- EXEMPLO 2 --------------------------------------------------
const produtos = [
  {
    nome: "",
    preco: 23.67,
    desconto: 0.2,
  },
  {
    nome: "",
    preco: 120.99,
    desconto: 0.3,
  },
  {
    nome: "",
    preco: 3567.67,
    desconto: 0.5,
  },
  {
    nome: "",
    preco: 10.8,
    desconto: 0.1,
  },
  {
    nome: "",
    preco: 7.43,
    desconto: 0.05,
  },
  {
    nome: "",
    preco: 12355.33,
    desconto: 0.15,
  },
];

function getCusto(precoComDesconto) {
  return parseInt(precoComDesconto * 0.3);
}

function precoComDesconto(produto) {
  return produto.preco * (1 - produto.desconto);
}

function altoCusto(produto){
    return produto.preco >= 1000
}

const resultado2 = produtos
.filter(altoCusto)
    .map(precoComDesconto)
    .map(getCusto);
console.log(resultado2);

//-------------------------------------------------- FILTER --------------------------------------------------

const notas = [7.1, 8.3, 6.3, 7.7, 9.1, 4.3]

function aprovado(nota){
   return nota >= 7
}

const resultado3 = notas.filter(aprovado)
console.log(resultado3)

//-------------------------------------------------- FILTER --------------------------------------------------
