// pseudocode
// convert the number to a string
// split the numbers to get each value
// map through an array of strings
// square the each value in array
// Change the  values into interger
// join the numbers

var number = 5656
const prompt = require('prompt-sync')();
var  number = prompt("ENTER THE NUMBER : ")
function newArray() {
  let newnumber = number.toString().split("");
  console.log();
  let num = newnumber.map((num) => {let newnum = Math.pow(num, 2);
    console.log(newnum);
    return newnum;
    
  });
  let newnumarr =parseInt(num.join(""));
  console.log(newnumarr);
}

newArray();
