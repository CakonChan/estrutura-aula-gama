var valores = [5, 8, 10, 22, 45, 38];
  //posição =  0  1   2   3   4   5

  // Caso busca é "100" então retorno seria -1 ou null depende da situação.

function busca(num){
    for(i = 0; i < 6; i++){
        if (num == valores[i]) {
            return i;
        }
    }
    return -1;
}

// usando a nossa ferramenta de busca

console.log(busca(10));
console.log(busca(50));