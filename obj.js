// OBJECT
const studen = {
    firstName: 'ram',
    class : 10
};
console.log(typeof studen.firstName);
console.log(typeof studen.class);

// using dot notation
const person = {
    name : 'john',
    age: 20,
}
// accessing property
console.log(person.name);
console.log(person.age);

// nested object
const student = {
    name: 'john',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
console.log(student.marks);
console.log(student.marks.science);
console.log(student.marks.math);
// an objects contain function
const human = {
    name: 'Sam',
    age : 30,
    // using function as a value
    greet: function() { console.log('hello');} 
}
human.greet()

// javascript built-in methods
let number = '23.33';
let results = parseInt(number);
console.log(results);

// javascript string lenght 
let sentence = "I love programiz.";
let len = sentence.length
console.log(len);
// Javascript String StartsWith()
const message = "JavaScript is fun";
// check if message start with Java
let result = message.startsWith("Java");
console.log(result);

// checkif message starts with script
result = message.startsWith("Script");
console.log(result);

// using startsWith() method
sentence = "Java is to Javascript what car is to carpet";
let check = sentence.startsWith("Java");
console.log(check);

let check1 = sentence.startsWith("Java is");
console.log(check1);

// case sensitive
let check2 = sentence.startsWith("JavaScript");
console.log(check2);
// below argument specifies the starting position
let check3 = sentence.startsWith("JavaScript", 11);
console.log(check3);
