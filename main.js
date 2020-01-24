   
var num2 = Math.ceil(Math.random() * 100);
console.log(num2);
var count = 0;
var num1 = prompt('Pick a # between 1 and 100:');
num1 = Number(num1);

while (num1 != num2) {
    if (num1 < num2) {
        num1 = prompt ('TOO LOW! Pick another number:');
        num1 = Number(num1);
        count++
        console.log(count);
    }
    if (num2 < num1 && num1 <= 100) {
        num1 = prompt ('TOO HIGH! Pick another number:');
        num1 = Number(num1);
        count++
        console.log(count);
    }
    if (num1 > 100) {
        num1 = prompt ('FOLLOW THE RULES! Pick a number NO GREATER than 100');
        num1 = Number(num1);
        count++
        console.log(count);
    }
    if (isNaN(num1)) {
        num1 = prompt ('FOLLOW THE RULES! Pick a NUMBER no greater than 100');
        num1 = Number(num1);
        count++
        console.log(count);
    }
}

 alert("Congrats! It took you " + count + " time(s) to guess the correct number. Do better.");