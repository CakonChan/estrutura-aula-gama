var elemento = [];
var topo = -1;
const maximo = 0;

function push(num) {
    if(topo < maximo){
        //topo = topo + 1;
        //Ou
        topo++;

        elemento[topo] = num;
    }else{
        console.log('pilha esta cheia');
    }
}

function estaVazia(){
    return topo == -1;
}

function pop(){
    if (topo != -1) {
            let num = elemento[topo];
            //topo = topo - 1;
            topo--;
            return num;
    } else {
        console.log('pilha esta vazia!');
    }
}

// ---- Parte do codigo que usa a pilha --- //

var numDecimal = 10;
var resto;

console.log('HORA DE EMPILHAR....');
while (numDecimal != 0){
    resto = parseInt(numDecimal % 2);
    push(resto);
    console.log(resto);
    numDecimal = parseInt(numDecimal / 2);
}

console.log('HORA DE DESEMPILHAR OU SEJA ELIMINAR DADOS...');
while(!estaVazia()){
    console.log(pop());
}

/*
push(10);
push(20);
push(30);

console.log(elemento + '\n');

console.log(pop());
console.log(pop());
console.log(pop());
*/