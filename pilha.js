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

function pop(){
    if (topo != -1) {
            let num = elemento[topo];
            topo--;
            return num
    } else {
        console.log('pilha esta vazia!');
    }
}

// ---- Parte do codigo que usa a pilha --- //

push(10);
push(20);
push(30);

console.log(elemento + '\n');
