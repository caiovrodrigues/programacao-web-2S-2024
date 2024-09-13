function verificarNumeroPrimo(num){
    if((num % 2 == 0 || num == 1) && num != 2){
        return false;
    }

    for(let i = 1; i < num; i += 2){
        if(num % i == 0 && i > 1){
            return false;
        }
    }
    return true;
}

for(let i = 0; i < 100; i++){
    if(verificarNumeroPrimo(i))
        console.log(i + " é um número primo");
}