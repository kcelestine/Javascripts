var sumOfSquares = 0;
var num = 100;
for(var i = 1; i <= num; i++) {
  sumOfSquares += (i * i);
}
var squareOfSum = Math.pow((num * (num + 1) / 2),2);
var difference = squareOfSum - sumOfSquares;
console.log('Sum of Squares from 1 to ' + num + ': ' + sumOfSquares);
console.log('Square of sum from 1 to ' + num + ': ' + squareOfSum);
console.log('difference between the sum of the squares of the first one hundred natural numbers and the square of the sum: ' + difference);
