var valores = [5, 8, 10, 22, 38, 45, 60, 91, 100, 120];
//posição =  0  1   2   3   4   5   6   7    8    9

// Caso busca é "100" então retorno seria -1 ou null depende da situação.

function busca(num) {
    for (i = 0; i < 6; i++) {
        if (num == valores[i]) {
            console.log('Encontrado ... ' + i + ' Posição.');
            return i;
        }
    }
    console.log('Não encontrado ... ' + i + ' Posição.');
    return -1;
}

function buscaBin(num) {
    let inicio, fim;
    let meio;
    let passos = 0;
    inicio = 0;
    fim = 9;

    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        passos++;
        if (num == valores[meio]) {
            console.log('Achei em ' + passos + ' passos.');
            return meio;
        } else {
            if (num > valores[meio]) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }
    }
    console.log('Não Achei em ' + passos + ' passos.');
    return -1;
}


//-- usando a nossa ferramenta de busca --//

console.log(busca(10));
console.log(busca(50));

console.log(buscaBin(10));
console.log(buscaBin(50));
console.log();
console.log(buscaBin(60));