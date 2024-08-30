function transporMatriz(matrizBi){
    matrizBiTransposta = [];
    
    for(let i in matrizBi[0]){
        let matrizAtual = [];
        for(let k in matrizBi){
            matrizAtual.push(matrizBi[k][i]);
        }
        matrizBiTransposta.push(matrizAtual);
    }
    return matrizBiTransposta;
}

let matriz = [
    [1,2],
    [3,4],
    [5,6]
]

let matrizTransposta = transporMatriz(matriz);
console.log(matrizTransposta);