/* vaiables always will start with letter, $ or _ */
/* can contain digits, letter, underscores and dollar sign */

// no keyword
//can not start with number

//fullName vs Fullname- case sensitive

//camelCase or underscore
// let const var

// string Concatenation
/*
let firstName = "Muhammad Saeed";
let lastName = "Mustafa";

let fullName ;

console.log ("My name is:" + firstName)
*/

/*
let firstName = "Muhammad Saeed";
let lastName = "Mustafa";
let fullName = firstName + " " +lastName;
console.log("My full name is: " +fullName+ ".") */

/*
let webSite = "microsoft";
let url = "https://www."+ webSite +".com";
console.log(url)
*/

// Numbers in js
/*
let number1 = 99;
let number2 = 100;
let sum = number1 + number2;
let sub = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
console.log(sum)
console.log(sub)
console.log(multiplication)
console.log(division)
*/

// Implicit type conversion
/*
let value1 = "surName";
let value2 = "familyName";
let result1 = value1 + value2;
let value3 = "35";
let value4 = "99";
let result2 = value3 - value4;

let value5 = "35";
let value6 = "99";
let result3 = value5 + value6;

let name = "Saeed";
let age = 35;
let result = name + age;
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result)
*/
/*
// Primitive DATA TYPES in JS
// String
let text = "My Name is Muhammad Saeed Mustafa";
console.log(typeof text);
// Number
let age = 35;
console.log(typeof age);
// Boolean
let value1 = true;
let value2 = false;
console.log(typeof value1);
console.log(typeof value2);
// Null
/* Null is nulll but
in js null is an object and it is a mistake but we maybe can not be corrected at this moment */
// Undefined
/*
let myName;
console.log(typeof myName);
// Symbols Echma Script 6


// Data Types in JS

//Arrays, function and objects
// Arrays
let myCars = ['BMW', 'Tesla', 'Audi', 'Mercedes'];
// Function
let info = function info() {
  console.log("I am Saeed.");
}
// Objects
let identity = {
  name : "Saeed",
  age : 36,
}

console.log(typeof myCars);
console.log(typeof info);
console.log(typeof identity);
*/

// Arrays in JS in details


// Function in JS
/*
function sub (num1,num2) {
  let sub = num1 - num2;
  return sub;
}
console.log(sub(234,65))
console.log(sub(50,32))
console.log(sub(7,2))
*/

// Objexts in Js
/*
let person = {
  firstName: "Muhammad Saeed",
  lastName: "Mustafa",
  age: 35,
  education: true,
  home: false,
  car:["bmw", "tesla"],
  fullDetail:function() {
    console.log("The full name of the person is : " + person.firstName+" "+ person.lastName+". and he is just "+person.age+" years old!"+"he has cars "+person.car+"."+"he has home: "+person.home+".He has education: "+person.education)
  }
}
let personFirstName = person.firstName;
let personLastName =person.lastName;
let personAge = person.age;
let personCar= person.car;
let personEducation = person.education;
let personHome = person.home;
console.log(personFirstName);
console.log(personLastName);
console.log(personAge);
console.log(person.education);
console.log(person.home);


person.fullDetail();
*/


// if else Statements
// Conditional Statements in JS
// Comparison Operators
// >, <, >=, <=, ==, ===, !=, !==
/*
if (2>4){
  console.log("I am businessman.");
} else {
  console.log("I am tech Enterprenur.");
}

let myFirstName = "Muhammad Saeed";
let myLastName = "Mustafa";
let myFullName = myFirstName +" " +myLastName;
console.log("My Full name is: " + myFullName);
if(myFirstName===myLastName){
  console.log("It is true");
} else if (myFirstName == myFullName) {
  console.log("it is not true");
} else {
  console.log("I dont know.")
}
*/

// Logical Operators && and ||
/*
let car = "BMW";
let price = 55000;
if(car==="BMW"||price<54000){
  console.log("It belongs to me.")
}

let myCar = "Tesla";
let carPrice = 120000;
if(myCar==="Tesla" && carPrice===120000){
  console.log("This is mine.")
}
*/
/*
// Boolean ( true || false)
let number = 99;
if (number <100){
  console.log("It is boolean");
}

// Unary Operator
let text = "my Name is saeed";
console.log(typeof text);

// Binary Operator
let number1 = 99;
let number1 = 99 < 100;
*/
/*
let dice = 0;

if(dice===1){
  console.log("you got it as one");
} else if(dice===2){
  console.log("You got two");

}

else {
  console.log("You didnt roll the dice");
}
*/

// Switch statement
/*
let dice = 99;

switch(dice){
  case 1:
  console.log("You are good");
  break;
  case 2:
  console.log("It will be fixed");
  break;
  default:
  console.log(" You didnt roll the dice");
}
*/
/*
function weekDays(day) {
  switch(day){
    case 1:
    console.log('It is Monday.');
    break;
    case 2:
    console.log('It is Tuesday.');
    break;
    case 3:
    console.log('It is Wednesday.');
    break;
    case 4:
    console.log('It is Thursday.');
    break;
    case 5:
    console.log('It is Friday.');
    break;
    case 6:
    console.log('It is Saturday.');
    break;
    case 7:
    console.log('It is Sunday.');
    break;
    default:
    console.log('Invalid Day.');


  }
}

weekDays(7);
weekDays(1);
weekDays(4);
weekDays(8);
weekDays(6);
*/

// Loops in JS repeatedly run a block of code while certain condition is true
// While loop
/*
let money = 5;
while(money>0){
  console.log("I am having "+ money +" Euros in my Pocket.")
  money--;
}

// Do while loop
let amount = 0;
do{
  console.log("You have " + amount + " In your pocket and you will go to shop.");
  amount++;
}while(amount<8)

// Forloop
let i;
for(i=0; i<10; i++){
  console.log("The result number will be "+i);
}
*/

// First project in JS by using function and if else statement


// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = object
// (typeof)

// Assigning to to primitive value any changes
// Are made directly to that value

// Assigning non-primitive value to variable is done by reference
// So any changes will effect all the references
/*
let number = 1;
let number2 = number;
number2 = 4;
number3 = number2;
console.log("The first value is "+ number);
console.log("The second value is "+ number2);
console.log("The third numbers is "+number3);

let person = {name: "Saeed", age: 35, car: "Tesla"};
let person2 = person;
person2.name = "Jalal";
console.log("The name of the first person " + person.name);
console.log("The name of the second person " + person2.name);
console.log("The age of the Saeed is " + person.age );
console.log("Saeed has a car " + person.car);
console.log("Saeed is just "+person2.age+" Years old.")
*/

// Both represent "no-value"


// Undefined ---- " JS can not find value for this "


// Null ---- " Programmer set the value "
/*
let name;
console.log(name);

let number = 12 + null;
console.log(number);
*/


// String
/*
let firstName = "Saeed";
let lastName = "Jalal";

let fullName = 'My full name is '+firstName+ ' ' + lastName;
console.log(fullName);

// Obj

let person = { 
  firstName: "Muhammad Saeed", lastName: "Mustafa", 
myFullName :function(){
  console.log(this.firstName + " "+ this.lastName)

  }
}
console.log(person.firstName);
person.myFullName();

// String Obj

let human = "Muhammad Saeed Mustafa";
let length = human.length;
console.log(human);
console.log(length);
console.log(human.toUpperCase());
console.log(human.slice(0,18));

console.log(human.includes("Saeed"));
console.log(human.includes("abc"));

// Template Strings
let myName = "Muhammad Saeed";
let myAge = 35;
//console.log("I am " +myName+" and i am just "+myAge+ " years old.");
//by using template string
*/

// Arrays === list of values
// Objects === collection of values
/*
let zero = [];
let name = ['Saeed', 'Naveed','Hamza', 'Shoaib','Ezza', 'Muhammad'];
let name2 = new Array (22, 88, 99);
console.log(name);
name[1, 2] = 'Jalal, Zainab';
console.log(name);
console.log(name[0]);

let identity = {
  name: 'Saeed',
  age : 35,
  car : 'Tesla'
} 
console.log(identity);
console.log(identity.age);
// Concatination
let lastName = ['Jalal', 'Mustafa', 'Jalal', 'Zainab', 35, 55, 67];
console.log(name.concat(lastName));
// Push
console.log(name.push('I am the best and all others belongs to me.'));
console.log(name);
// Pop
console.log(name.pop());
console.log(name);
// Splice
console.log(name.splice(1,4));
console.log(name);
*/

// Global Object
/*
const months = ['January','February','March','April','May','June','July','August','September','October','Novemebr','December'];

const days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let date = new Date();
console.log(date);
console.log(months);
console.log(days);

let month = date.getMonth();
console.log(month+1);
let day = date.getDay();
console.log(day+1);
*/
/*
let toDoList = [];
function addItem(arr){
  let answer = prompt("What would you like to do today?");
  let correct = answer.toUpperCase().trim();

  if(check(arr,correct)){
    arr.push(correct);
  }
  else{
    alert('Items already exist');
  }

}
 function check(arr,item){
   let exists = false;
   let index = arr.indexOf(item);
   if(index!=-1){
     exists = false;
   }
   else{
     exisits = true;
   }
   return exists;
 }
addItem(toDoList);
addItem(toDoList);
addItem(toDoList);

console.log(toDoList);
*/
/*
let text = "My Name is Saeed";
let arrText = text.split(' ');
console.log(arrText);

// How can we you use math
function returnChange(amount){
  let quarters =Math.floor(amount/25);
  console.log(`There are ${quarters} quarters in your change`);
  console.log(quarters);
}

returnChange(120);
*/

/*
const example = [
  ["Saeed", "Ezza", "Jalal"],
  ["BMW","Tesla","Audi"],
  ["Pant","jean"]
]

console.log(example[0][1]);
let item = example[1][1];
console.log(item);
console.log(example);
*/

// Samll quiz example by using Array
/*
const quiz = [
['Best country to live in','Fi'],
['Capital of Finland','Helsinki'],
['Best car to buy','tesla'],
['Best school to study','Harvard']
]

let score = 0;
for(let i = 0;i<quiz.length;i++){
  let answer = prompt(quiz[i][0]);
  let answerCorrect = answer.toLowerCase().trim();
if(answerCorrect===quiz[i][1]){
  score++;
}else{
  alert(`Wrong answer.The correct answer is ${quiz[i][1]}`)
}

}

let correctPercent = (score/quiz.length)*100;
alert(`You answered ${score} questions correctly and your correct percent is ${correctPercent}%
`);
*/
/*
// Create code and execute whenever you need/want
// Adds behavior to objects

//Define function
function nameOfFunction(){
    //Code that will be executed
}

// Call the Fuction / Call of invoke
nameOfFunction();

// obj.method()  string.toLowerCase()


//function declarations / function expression
// declaration
function nameOfFunction(){
  //Code that will be executed
}

//expression

let varName = function nameOfFunction(){
  // code that will be executed
}

varName();


// Parameters and Arguments
function nameOfFunction(firstPara,secondPara){
  //Code will be executed with these parameters
}

// Call
nameOfFunction(firstArg,secondArg)

// return statement
function nameOfFunction(){
  //code
  return
  // code will not run
}

// Assign function invocation to variable
function sayHello (){
  return 'Hello There Stranger'
}
let varName = sayHello();
// console.log(varName) === 'Hello There Stanger'
*/

// any variable outside code block is said to have GLOBAL SCOPE!!!!!
// can be access anywhere in the program
// IT IS NOT A GOOD PRACTISE!!!
// GLOBAL SCOPE
/*
let greet = "Good Morning";
function getGreeting(){
  console.log(greet);
}
getGreeting();
if(5>2){
  console.log(greet)
}


// Local Scope
let generalNumber = 99;

function add(num1,num2){
  let result =  num1+num2+generalNumber;
  return result;
}
let result = add( 33,89);
console.log(result);
*/
/*
let generalNumber = 99;
function add(num1, num2){
  let result = num1+num2+generalNumber;
  return result;

}
let result = add(89,234);
console.log(result);
*/

// JS functions are higher order functions
// Pass a function as a argument
// Return the function from function


// Built in functions
// Callback functions

/*
 function functionName(para1, para2){
// code here

}
setTimeout(function(){
  alert("Good day guys!");
}, 2000)*/
/*
let numbers = [22, 33, 24, 56, 65, 72, 83, 89];
let even = numbers.fillter(isEven);
console.log(even);
*/

// Very powerfull array methods forEach, filter, map, reduce;
// They all iterate over array-- No need for loop
// We pass callback function either by declaring seperately or anonymous
// Filter and Map return new array, reduce can return more than just array
/*
const numbers = [66, 89, 88, 99, 66, 24];
// show all numbers
for (let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}
// get even numbers
const even = [];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 === 0){
    even.push(numbers[i]);
  }
}
console.log(even);
// get odd numbers
const odd = [];
for (let i = 0;
  i < numbers.length; i++){
    if(numbers[i] % 2 === 1){
      odd.push(numbers[i]);
    }
  }
  console.log(odd);
  */

  // Array iterations
  // forEach
  // loop through array
  // Call a callback function
/*
  const names = ['Jalal', 'Zainab', 'Ezza', 'Muhammad'];
  
  names.forEach(function (name){
    console.log(name);
  })
  */
 /*
 names.forEach(showName);
 function showName(name){
   console.log(name);

 }
 */

// filter
/*
const numbers = [0,1,22,33,44,55,66];
const even = numbers.filter(function(number){
  return number % 2 ===0;

})

console.log(even);
*/

// Reduce in js
/*
const fruits = ['Mango', 'orange','Mango', 'orange','pear','Mango', 'pear','pear', 'Mango'];
const types = fruits.reduce(function (total, fruit) {
  if(total[fruit]){
    total[fruit] += 1;
  }
  else{
    total[fruit] = 1;
  }
  return total;
},{})
console.log(types);
*/
// Changing Array Iterators
/*
const fruits = ['Oranges', 'Oranges', ' Mangos','Pear', 'Oranges', 'Apple'];
const sale = fruits.filter(function(fruit){
  return fruit === 'Apple';
}).map(function(name){
  return `${name} are on sale`;
})
console.log(sale);
*/

// Using of the functions
// Celcius = ( Fahr-32)*5/9
// Fahrenheit = Celcius *9/5 +32
/*
function toFahrenheit(temp){
  let fahr = temp * 9/5 +32;
  console.log(`${temp} degree in C is ${fahr } degree in F`);
}
toFahrenheit(38);

function toCelcius(temp){
  let celcius = ((temp-32)*5/9).toFixed(3);
console.log(`${temp} degree in F is ${celcius} degree in C`)
}
toCelcius(100);
*/

// inches into centi meters 1 inch === 2.54 cm
// foot into inces 1 foot === 12 inces
/*
function toCm(feet,inches){
   if((feet<0) || (inches<0)){
     alert('Invalid parameters')
     return;
   }
   let centimeters = (feet*12)*2.54;
   centimeters += inches *2.54;
   console.log(`${feet} feet and ${inches} inches is equal to ${centimeters.toFixed(3)} centimeter.`);
   return centimeters.toFixed(3);

}
toCm(12,2);
toCm(-2,35);
*/

// Lets start to dive into DOM (Document object Modal)
// Everything in js is either
// One of six primitive data types or an object
// in js, objects are key value pairs
// If a property is a function it is called a method

/*
// Object literals
const person = {};

// Construction function
const secondPerson = new Object();
// Add property
person.name = 'Saeed';
console.log(person);

// Access property
console.log(person.name);

// Modify property
person.name = "Ezza";
// Access property
console.log(person.name);
// Assign value
let lastName = person.lastname;
console.log(lastName);
// Check if exists
let check = 'lastName' in person;
console.log(check);
// Delete property
delete person.name;
console.log(person);

// create object
const human = {
  name: 'Saeed',
  nickName : ' Shahzada',
  height: 6,
  weight: 78,
  education: true,
  cars: 'tesla',
  sign(){
    return `I'm playing`
  }
}
let song = human.sign()
console.log(song);

// iterate
for(const key in human){
console.log(`${key} : ${human[key]}`);
}
// nested objects
const people = {
  person1: { name:'Ezza', age: 18},
  person2: { name: 'Rabab', age: 21}
}
console.log(people);
// objects as parameters

function hello({greet,name}){
  return `${name}!!!!${greet}`
}
let greetPerson =  hello({ name: 'Syeda Zainab', greet: 'I love you Mama Jaan'})
console.log(greetPerson);
*/

// Small Exercise
/*
const students = [
  {name:'Saeed', score: 91},
  {name:'Ezza', score: 99},
  {name:'Muhammad', score: 91},
  {name:'Shoaib', score: 95},
  {name:'Hamza', score: 96},
  {name:'Naveed', score: 93}
];
let totalScores = 0;

for (let i = 0; i<students.length; i++){
  totalScores += students[i].score;
}
console.log(totalScores);

let average = totalScores/students.length;
console.log(average.toFixed(2));
*/

// DOCUMENT OBJECT MODEL

//DOM basics
//Select Elements
//Navigate the DOM tree
//Change thext content
//Chamge CSS
//Listen for events
//Add event listeners
//Use local and Session Storage


// className
// classList



//innerHTML
//textContent
/*
const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);
*/

// Changing CSS
/*
const item = document.getElementById("item");

item.style.backgroundColor = 'blue';
item.style.color = 'white';
item.style.fontSize = 'white';
item.style.display = 'none';
item.style.display = 'block';
*/
/*
let movies = ['MI-3', 'Black Panther', 'Avengers','The first jedi','Target'];
//movies.forEach( movie => alert(movie));
for (let movie of movies){
  console.log(movie);
}
*/

/*
var movie = {
  title: 'Wonder Women',
  time: '2pm',
};

movie.status = 'Unavailable';
console.log(movie);
*/

/*
let movies = [
  {
    title: 'Avengers',
    time: '2pm',
    status: 'avaialable',
  },
{
  title: 'Black Panther',
  time: '4pm',
  status: 'unavaialable',
},
{
  title: 'The big man',
  time: '6pm',
  status:'avaialable',
},
{
  title: 'MI-3',
  time: '8pm',
  status: 'avaialable',
}
];

for (let movie of movies){
  if (movie.status=== 'avaialable'){
    console.log(`The movie ${movie.title} will play at ${movie.time}`)
  } else {
    console.log(`The movie ${movie.title} is sold out.`)
  }
}
*/
/*
 let movies = [
   {
     title: 'MI-4',
     time: '1pm',
     status: 'avaialble',
   },
   {
     title: 'Glaxy',
     time: '3pm',
     status: 'unavailable',
   },
   {
     title: 'The Star',
     time: '4pm',
     status: 'avaialble',
   },
   {
     title: 'Panther',
     time: '6pm',
     status: 'unavailable',
   }
 ];

 for(let movie of movies){
   if (movie.status === 'avaialble'){
     console.log(`The movie ${movie.title} will play at ${movie.time}`);
   }else {
     console.log(`Sorry, The movie ${movie.title} is sold out`);
   }
 }
 */
/*
let tickets = [
  {
    consert: 'jusitn',
    status: 'available',
    month:'next month',
  },
  {
    consert: 'enrique',
    status: 'unavaible',
    month: 'this month',
  },
  {
    consert: 'Ariana',
    status: 'available',
    month: 'this month',
  },
  {
    consert: 'gaga',
    status: 'unavaible',
    month: 'next month',
  }
];

for( let ticket of tickets){
  if (ticket.status ==='available'){
  console.log(`You people can buy and enjoy ${ticket.consert} at ${ticket.month}`);
}else
{
console.log(`You can not enjoy ${ticket.consert} because the tickets are sold out.`)
}
}
*/
/*
var myObj = {
  gift: 'pony',
  car: 'Tesla',
  house: 'Own'
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp) == true){
    return myObj[checkProp];
  } else {
    return 'Not found'
  }
}
*/
/*
const username = prompt('Enter Your Name...');
const password = prompt('Enter Your Password...');
*/
/*
let sum = (a,b) => {
  console.log(`Sum of ${a} and ${b} is ${a+b} `);
}
sum(70,30);
*/











