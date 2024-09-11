// 1. Imprimir números de 1 a 10.

/*
num=1

while(num<=10){
    console.log(num)
    num++
}
*/

//2. Imprimir números pares de 1 a 20

/*
num=1

while(num<=20){
    
    if(num%2 == 0){

    console.log(num)

    }
        num++
    }
*/

//3. Somar números de 1 a 100

/*
num=1
soma=0

while(num<=100){
    soma=soma+num
    num++
}
console.log(soma)
*/

//4. Tabuada do 5

/*
contador = 1

while (contador <= 10){
    console.log("5X", contador, "=", contador * 5)
    contador++
}
*/

//5. Imprimir uma frase 10 vezes

/*
cont=1

while(cont<=10){
    console.log("Estou aprendendo laço de repetição.")
    cont++
}
*/

//6. Fatorial de um número
/*
numero = 5
fatorial = 1
contador = 1

while (contador <= numero){
    fatorial *= contador
    contador++
    }
    console.log("O fatorial desse numero é :", fatorial)
*/

//7. Sequência de Fibonacci
/*
a = 0
b = 1
contador = 0

while (contador < 10){
    console.log(a)
    proximo = a + b
    a = b
    b = proximo
    contador++
}
*/

//8. Números primos até 50.
/*
num = 2

while (num <= 50) {
    let isPrime = true
    let divisor = 2

    while (divisor < num){
        if (num % divisor === 0) {
            isPrime = false
            break
        }
        divisor++
    } if (isPrime){
        console.log(num)
    }
    num++
}

//Isprime é usado para validar se ele é um numero primo ou não

*/

//9. Soma de dígitos




//10.  Contagem regressiva
/*
num=10

while(num>=1){
    console.log(num)
    num--
}
*/