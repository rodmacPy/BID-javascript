// ============= 01 =============
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Output: 'Tesla'
console.log(otherRandomCar) // Output: 'Mercedes'

// ============= 02 =============
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); // Output : ReferenceError: name is not defined
console.log(otherName); // Output: 'Elon'


// ============= 03 =============
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // Output : '12345'
console.log(hashedPassword); // Output : undefined porque no está declarada en el objeto


// ============= 04 =============
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // first : 2
const [,,,second] = numbers; // second : 5
const [,,,,,,,,third] = numbers; // third : 2
//Predict the output
console.log(first == second); // Output : false
console.log(first == third); // Output : true


// ============= 05 =============
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // key = 'value'
const { secondKey } = lastTest; // secondKey = array
const [ ,willThisWork] = secondKey; // willThisWork : 5 
//Predict the output
console.log(key); // Output : 'value'
console.log(secondKey); // Output : array[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Output : 1
console.log(willThisWork); // Output : 5


