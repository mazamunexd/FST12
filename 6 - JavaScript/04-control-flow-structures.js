// Control Flow Structures

// 1. Conditional Statements: execute a code block if a condition is met.
// if, else if, else statement
// Code Block - {}
// Conditional Block ()
let temperature = 1;

if (temperature < 0) {
    console.log("It's freezing.");
    console.log("Prepare a hot chocolate.");
} else if (temperature >= 0 && temperature < 20) {
    // Range: 0 - 19
    console.log("It's cool outside.");
} else {
    console.log("It's hot outside.");
}

// 2. Looping Statements: repeatedly execute a block of code.

// for loop
/*
Components of a for loop:
1. Variable Initialization
2.Condition Expression
3. Increment / Decement
*/ 
for (let i = 1; i <= 3; i++) {
    console.log("For Loop Count:", i);
}

// While loop
let count = 1;
while (count <= 3) {
    console.log("While loop count:" , count);
    count++;
}