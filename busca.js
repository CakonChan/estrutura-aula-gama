var valores = [5, 8, 10, 22, 38, 45, 60, 91, 100, 120];
  //posição =  0  1   2   3   4   5   6   7    8    9

  // Caso busca é "100" então retorno seria -1 ou null depende da situação.

function busca(num){
    for(i = 0; i < 6; i++){
        if (num == valores[i]) {
            return i;
        }
    }
    return -1;
}

function buscaBin(num) {
    let inicio, meio, fim;
    
    inicio = 0;
    fim = 9;

    while(inicio < fim){
        meio = (inicio + fim) / 2;
        if(num == valores[meio]){
            return meio;
        }else{
            if(num > valores[meio]){
                inicio = meio + 1;
            }else{
                fim = meio - 1;
            }
        }

    }

}


// usando a nossa ferramenta de busca

console.log(busca(10));
console.log(busca(50));