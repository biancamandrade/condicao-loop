for (let i = 0; i<10; i++) {
    console.log
}



//Imprima os numeros de 1 a 10.
for (let i=1; i<=10; i++) {
    console.log
}

//Imprima os numeros pares até 10
for (let i = 1; i <= 10; i++) {
    if (i%2 === 0){
        console.log
    }
}

//Imprima os multiplos de 3 de 1 a 20
for (let i = 1; i <=20; i++){
    if (i%3 === 0){
        console.log
    }
}

// Imprima os numero primos de 1 a 100 
//for (let i = 2; i <= 100; i++){
   // if (i<=10 %  != 0){

    //} else if(i%2 != 0 && i%3 != 0 && i%5 != 0 && i%7 != 0){
      //  console.log(i)
    //}
//}

// 
for (let i= 2; i <= 100; i++){
    let isPrime = true;

    for (let j = 2; j < i; j++){
        if (i % j ===0){
            isPrime = false;
            break;
        }
    }

    if (isPrime){
        console.log
    }
}

// Divida todos os elementos de uma lista por 2

//const arr = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]

//for (let i = 0; i < arr.length; i++){
  //  console.log(arr[i]/2)
//}

//Calcule a media de uma lista de numeros

const arr = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
soma = 0 

for (let i = 0; i < arr.length; i++){
    soma += arr[i];
}
 const media = soma / arr.length
console.log("A média dos elementos é", media)
