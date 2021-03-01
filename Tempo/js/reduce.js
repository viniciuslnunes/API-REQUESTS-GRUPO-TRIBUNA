const numeros_r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function somar (a, b){
    return a + b
}

console.log(numeros_r.reduce(somar))

function media (acc, num){
    console.log(acc)
    const novoTotal = acc.total + num
    const novaQtde = acc.qtde + 1
    return {
        total: novoTotal,
        qtde: novaQtde,
        media: novoTotal / novaQtde
    }

}
const valorInicial = {total: 0, qtde: 0, media: 0}
const valorFinal = numeros_r.reduce(media, valorInicial)

console.log(valorFinal.media)
