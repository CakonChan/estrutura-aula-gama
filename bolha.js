var valores = [8, 7, 6, 5, 4, 3, 2, 1];




function ordena() {
    let inicio = 0;
    let fim = 8;
    let tmp;
    for (let vezes = 0; vezes < 8; vezes++) {
        for (let index = inicio; index < fim - 1; index++) {
            if (valores[index] > valores[index + 1]) {
                tmp = valores[index];
                valores[index] = valores[index + 1];
                valores[index + 1] = tmp;
            }
        }
    }
}


ordena();
console.log('Vetor ordenando... ');
console.log(valores);