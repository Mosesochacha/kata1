const prompt = require('prompt-sync')();
let number = prompt("ENTER THE NUMBER : ")
function newArray() {
  let newnumber = number.toString().split("");
  let num = newnumber.map((num) => {let newnum = Math.pow(num, 2);
    return newnum;
  });
  let newnumarr = num.join("");
  console.log(newnumarr);
}

newArray();
