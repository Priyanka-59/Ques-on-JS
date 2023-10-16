//Perform sorting of an array in descending order.

const readline = require('readline');

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
r1.question("Enter the elements of array separated by space :" , function(input){
    const inputArray = input.split(" ").map(Number);
    if (inputArray.some(isNaN)) {
        console.log("Invalid input. Please enter a list of numbers separated by spaces.");
      } else {
        // Sort the array in descending order
        inputArray.sort((a, b) => b - a);
      
        // Display the sorted array
        console.log("Sorted in descending order: " + inputArray);
      }
    });