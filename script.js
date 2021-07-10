console.log("Hello World!")

// 2. Variáveis var, let e const
// var - pode ocorrer hoisting
// let - recomendado usá-lo
// const - não podem ser atualizadas nem reatribuídas

var myName="Yu";
console.log(myName)

const myLastName="Ue";
console.log(myLastName)



// 3. Tipos de dados
// string, number, null, undefined, boolean
// objeto, array e function


function sum(){
    return a+b 
}

console.log(typeof sum)



// 4. Operadores

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



// 5. Condicionais if, if else e switch

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


// 6. Estrutura de Repetição/Laço/Loop for while e do while
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



// 7. Funções 

function sayHello() {
    console.log("Hello")
}

sayHello();

function sayHelloo(name, lastName) {
    console.log("Helloo " + name + ' ' + lastName)
}

sayHelloo("Yu", "Ue");


function sum(a, b) {
    return a + b;
}

console.log(sum(40,60));



// 8. Classes (objeto)

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo  ${this.title} `
    }
}

let book = new Book("Algoritmos para viver", "Brian", 500);
let otherBook = new Book("Um Exu em Nova York", "Cidinha da Silva", 100);

console.log(book)
console.log(book.read())
console.log(otherBook)
console.log(otherBook.read())
console.log(book, otherBook)


// Herança (herdar as propriedades da classe Book)

class ITBook extends Book {
    constructor(title,author, pages,technology) {
        super(title, author, pages);
        this.technology = technology;
    }
}

let itBook = new ITBook("Algoritmos para viver", "Brian", 500, "Algoritmos");

console.log(itBook.title);
console.log(itBook);


// encapsulamento (getters e setters)

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}


let person = new Person("Yu");
person.name = "Yuyu"
console.log(person.name)





