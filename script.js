console.log("Hello World!")

// Variáveis var, let e const
// var - pode ocorrer hoisting
// let - recomendado usá-lo
// const - não podem ser atualizadas nem reatribuídas

var myName="Yu";
console.log(myName)

const myLastName="Ue";
console.log(myLastName)



// Tipos de dados
// string, number, null, undefined, boolean
// objeto, array e function


function sum(){
    return a+b 
}

console.log(typeof sum)



// Operadores

//Operadores aritméticos

var sumTwoNumbers = 1+3;
console.log(sumTwoNumbers)

var subTwoNumers = 4-3;
console.log(subTwoNumers)

var multTwoNumbers = 4*3;
console.log(multTwoNumbers)

var divTwoNumbers = 4/2;
console.log(divTwoNumbers)

console.log(8%3)

var num = 1;
console.log(++num)
console.log(--num)


// Operadores de atribuição
// = atribuição

// atribuição de soma

var x = 1;
var y = 3;
console.log(x+=y) // == x = x+y)
console.log(x-=y)
console.log(x*=y)
console.log(x/=y)
console.log(x%=y)


// Operadores de comparação
// == Comparação de valores
//=== Valor e tipo
// != Diferente de 
// < ou <=
// > ou >=


// Operadores lógicos (verificações)

// e &&
// ou ||
// ! (negação)



// Condicionais if, if else e switch

var num = 1;
num =  5;

if (num === 1) {
    console.log("num é igual a 1")
} else if (num ===2) {
    console.log("num é igual a 5")
} else {
    console.log("num é 5")
}


// switch case

var mes = "janeiro";

switch (mes) {
    case "fevereiro":
        console.log("mes 2");
        break; // interrompe o bloco de código se for atendido

    case "março":
        console.log("mes 3");
        break;


    case "janeiro":
        console.log("mes 1");
        break;


    default: // caso nenhum seja atendido
        console.log("nenhum dos casos foi atendido")

}


// Estrutura de Repetição/Laço/Loop for while e do while
// arrays
// contagem começa do 0 []

var colors = ["black", "white", "yellow", "green", "blue"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ou então

for (var i = 0; i < 5; i++) {
    console.log(colors[i]);
}


for (var i = 0; i < 10; i++) {
    console.log(i)
}


var i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}


var i = 1;

do {
    console.log(i);
    i++;
} while (i < 10)


