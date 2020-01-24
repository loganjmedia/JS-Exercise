   
var num2 = Math.ceil(Math.random() * 100);
console.log(num2);
var num1 = prompt('Pick a # between 1 and 100:');
num1 = Number(num1);

while (num1 != num2) {
    if (num1 < num2) {
        num1 = prompt ('TOO LOW! Pick another number:');
        num1 = Number(num1);
    }
    if (num2 < num1 && num1 <= 100) {
        num1 = prompt ('TOO HIGH! Pick another number:');
        num1 = Number(num1);
    }
    if (num1 > 100) {
        num1 = prompt ('FOLLOW THE RULES! Pick a number NO GREATER than 100');
        num1 = Number(num1);
    }
    if (isNaN(num1)) {
        num1 = prompt ('FOLLOW THE RULES! Pick a NUMBER no greater than 100');
        num1 = Number(num1);
    }
}

 alert("CONGRATS");