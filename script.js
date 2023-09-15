//regular functions
//bir kere tanımlıyoruz aynı kodu tekrar tekrar yazmak yerine istediğimiz zaman bu fonksiyonu çağırıyoruz.

//function declaration
// function greet(){
//     console.log('hello there');
// };

// greet();

//function expression
// const speak=function(name,time){ //name is parameter
//     console.log(`good ${time} ${name} `);
// };

// speak('merve','morning'); //name is argument

//default parameters
// const speak=function(name='merve',time='morning'){  //parameterlere değer girebiliriz
//     console.log(`good ${time} ${name} `);
// };

// speak(); //buraya argument gönderilmemişse
// speak('ahmet','evening'); //bunlar default parameterleri ezer.

//returning values
/*const calArea=function(radius){
    let area=3.14*radius**2;
    console.log(area);
}
calArea(5); */

// const calArea=function(radius){
//     let area=3.14*radius**2;
//     return area;
// }
// const a=calArea(5);
// console.log(a);

// const calArea=function(radius){

//         return 3.14*radius**2;
//     }
//     const a=calArea(5);
//     console.log(a);

//............................................................................................................
//arrow function

//tek bir parametremiz olduğunda parantez açmamaıza gerek yok
//tek bir kod satırımız olduğunda süslü parantez açmamıza gerek yok aynı zamanda returnü eklememize de gerek yok
// const calArea=radius=>  3.14*radius**2;
// const a=calArea(5);
// console.log(a);

//practise arrow functions
//1.practice
// const greet=function(){
//     return 'hello world';
// }
// const result=greet();
// console.log(result);

// const greet=()=> 'hello world';
// const result=greet();
// console.log(result);

//2.practice
// const bill=function(products,tax){
//     let total=0;
//     for(let i=0;i<products.length;i++){
//         total+=products[i]+products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30],0.2))

// const bill=(products,tax)=>{
//     let total=0;
//     for(let i=0;i<products.length;i++){
//         total+=products[i]+products[i] * tax;
//     }
//     return total;

// }
// console.log(bill([10,15,30],0.2));

//fonksiyon ve metot farkları
const name = "merve";

//function
const greet = () => "hello";

let firstResult = greet();
console.log(firstResult);

//method
let secondResult = name.toUpperCase();
console.log(secondResult);

//calbacks & foreach
//callback
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};
// myFunc(function(value){
//     console.log(value);
// })
myFunc((value) => console.log(value));

//forEach
// let people=['ece','su','aslı','cem'];

// const logPerson = (person, index) => console.log(`${index}- hi ${person}`);

// people.forEach(logPerson);

//get a reference to the ul
const ul = document.querySelector('.people');

const people = ["merve", "rüya", "su", "ece"];

let html = ``;
people.forEach(person=> html += `<li style="color: blue">${person}</li>`);

console.log(html);
ul.innerHTML=html;
