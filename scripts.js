console.log("This program will check two numbers to see if they are greater , equal or smaller");

let num1 = prompt("Enter a value for number 1");
let num2 = prompt("Enter a value for number 2");

var number1 = parseInt(num1);
var number2 = parseInt(num2);

if(number1<number2){

console.log("number 2 is greater than number 1");

}else if(number1 == number2){

    console.log("number1 is equal to number2");
}else{

console.log("number2 is less than number1");

}