/*
    The program tries to reach the DESIRED number by randomly generating it within the set range by user

    GOALS: 
    [] make the GUI for the progam 
    [] let the program find the longest and quickest period it took to get the number wihtin certain amount of attempts (SET_RANGE_ATTEMPS) 
    [] find a way to store all those attempts in one file (because it rewrites everything)
    [] find a reason why i couldn't set the array to 100 (it threw memory error all the time)
*/


const fs = require("fs"); // creates a variable through which we access the file system (fs)
const array = []; // array to safe the results of the loop 
const ARRAY_LIMIT = 10; // regulates how much data can be pushed into the array
let counter = 0; // counts how many times it took the program to get the result; we start with 0 attempts
let randomNumber = 0; // variable to store the random number; set to 0 before we launch the process
const DESIRED = 3; //what desired number we want to get
const MAX_NUM = 3; // set the range in which the progam will look for DESIRED number. 
let received = false; // answers: did we get 3? if we did it is TRUE if not it is FALSE; set to FALSE before we launch the process 

for(; !received && counter != ARRAY_LIMIT; counter++){ // for loop; if we reached the number and/or get to the limit of the arrray the loop stops
    
    randomNumber = Math.floor(Math.random() * MAX_NUM+1); // get the random number and store it; set to "MAX_NUM + 1" because the function doesn't include the number we include 
    array.push(randomNumber); // push the number to array as an attempt
    received = (randomNumber === DESIRED) ? true:false;//checks if we get the number
}

fs.writeFileSync("array.txt", JSON.stringify(array)); // pushes the attempts stored in the array to the file named "array.txt",
                                                    // we convert array to string with JSON.stringify() method 

if (received) // send appropritate message if we get the number or not. 
{
    console.log("It took " + counter + " times to randomly get 3");
}else {
    console.log("It reached the maximum limit for the array.");
}
