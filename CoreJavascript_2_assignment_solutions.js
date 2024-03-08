// 1. Arrow function to calculate the square of a given number
const square = (number) => number * number;
const numToSquare = 5;
console.log(`1. Square of ${numToSquare}: ${square(numToSquare)}`);

// 2. Array of student ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sorting the array
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Calculating median age
const middleIndex = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0
  ? (ages[middleIndex - 1] + ages[middleIndex]) / 2
  : ages[middleIndex];

// Calculating average age
const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;

// Calculating range
const ageRange = maxAge - minAge;

// Comparing (min - average) and (max - average)
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

console.log(`2. Min Age: ${minAge}, Max Age: ${maxAge}, Median Age: ${medianAge}, Average Age: ${averageAge.toFixed(2)}, Age Range: ${ageRange}, 
    Min-Average Difference: ${minAverageDiff.toFixed(2)}, Max-Average Difference: ${maxAverageDiff.toFixed(2)}`);

// 3. Map to store contact information
const contactsMap = new Map();
contactsMap.set("John", { age: 25, email: "john@example.com", location: "New York" });
contactsMap.set("Jane", { age: 30, email: "jane@example.com", location: "Los Angeles" });

// Function to retrieve contact details by name
const getContactDetails = (name) => contactsMap.get(name);

console.log(`3. Contact details for John:`, getContactDetails("John"));

// 4. Objects person1 and person2
const person1 = { name: "Alice", age: 28 };
const person2 = { name: "Bob", age: 35 };

// Function to introduce a person
function introduce() {
  console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Using call method to introduce persons
introduce.call(person1);
introduce.call(person2);

// 5. Managing a list of unique items with Set and Map
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 3, 2, 1]);
const numberSquareMap = new Map();

uniqueNumbers.forEach((number) => {
  const square = number * number;
  numberSquareMap.set(number, square);
});

console.log("5. Unique Numbers and Their Squares:");
numberSquareMap.forEach((square, number) => {
  console.log(`Number: ${number}, Square: ${square}`);
});

// 6. Functions displayInfo and greet with call, apply, and bind
function displayInfo(name, role) {
  console.log(`6. Display Info: Name - ${name}, Role - ${role}`);
}

displayInfo.call(null, "John Doe", "Developer");

const argsArray = ["Jane Doe", "Designer"];
displayInfo.apply(null, argsArray);

function greet() {
  console.log(`6. Greetings with Context: ${this.context}`);
}

const boundGreet = greet.bind({ context: "World" });
boundGreet();

// 7. Calculator and discountCalculator objects
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  calculate: function (operation, a, b) {
    if (operation === 'add') return this.add(a, b);
    if (operation === 'subtract') return this.subtract(a, b);
    if (operation === 'multiply') return this.multiply(a, b);
    return 'Invalid operation';
  }
};

console.log(`7. Addition Result: ${calculator.calculate('add', 10, 5)}`);
console.log(`   Multiplication Result: ${calculator.calculate('multiply', 3, 4)}`);

const discountCalculator = {
  discountPercentage: 10,
  applyDiscount: function (amount) {
    return amount - (amount * this.discountPercentage) / 100;
  }
};

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
console.log(`   Discounted Price: ${calculateDiscount(100)}`);
