//Q1. rTake a sentence as an input and reverse every word in that sentence. 
//Example - This is a sunny day > shiT si a ynnus yad

const readline = require('readline');

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
r1.question("Enter the sentence: ",function(input){

    let reverseSen = input.split(" ").map(word => word.split("").reverse().join(""));
  
    let revStr =reverseSen.join(" ");

      console.log("String after reversing every word in sentence : "+ revStr);
});