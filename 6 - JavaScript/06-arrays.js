// Array and Array Methods

// Elements: individual values inside of an array
let fruits = [
    "Apple", "Banana", 
    "Cherry", "Kiwi"
]
console.log("Fruits: ", fruits);
console.log("Length: ", fruits.length);

// Array Indexing
console.log("First Element: ", fruits[0]);
console.log("2nd Element: ", fruits[1]);
console.log("3rd: ", fruits[2]);
console.log("Last Element: ", fruits[fruits.length - 1]);

// Update Element/s
fruits[0] = "Avocado";
console.log("Fruits: ", fruits);

// Push Method - push() add elements at the end
fruits.push("Pineapple", "Grapes")
console.log("Fruits: ", fruits);

// Pop Method - .pop() allows to delete an El at the end
fruits.pop();
console.log("Fruits: ", fruits);

console.log("Is Banana included?:", fruits.includes("Banana"));
console.log("Is banana included?:", fruits.includes("banana"));
console.log("Is Orange included?:", fruits.includes("Orange"));

// .forEach(): execute a function to each element of the array
fruits.forEach(function (fruit){
    console.log("Fruit:", fruit)
});
