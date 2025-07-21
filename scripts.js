console.log('Hello,World');
let firstName='John';
console.log(firstName);
//let age = '20';

//numbers
let num = 10.56;
console.log (typeof num);
console.log (5 / 0);
console.log (-5 / 0);

console.log('Hi' / 2);
console.log(Math.sqrt(-4));

let largeNumber =5760746874707649999089n
console.log(largeNumber);
let lNumber =BigInt("64034560568996887798");
console.log(lNumber);
console.log(largeNumber + lNumber);
console.log(largeNumber * lNumber);

let num1 = 10;
let num2 = 5;
console.log (num1 + num2);
console.log (num1 - num2);
console.log (num1 / num2);
console.log (num1 * num2);
console.log (num1 % num2);
console.log (num1 ** num2);  //exponensiation


console.log(Math.sqrt(16));
console.log(Math.floor(16.9));
console.log(Math.ceil(16.1));
console.log(Math.round(16.4547374));
console.log(Math.round(16.256374).toFixed(2));


//Area of Triangle
let base = 10;
let height = 17;

console.log((0.5*(base))* height);

let radius = 5;
let height1 = 12;
let volume = Math.PI* (radius**2) *height1;
console.log(volume.toFixed(2));

let isLoggedIn = true;
let hasPermission = false;

//undefined
let lastName;
console.log(lastName);
console.log(typeof lastName);

//null
//let gender =null;
//console.log(gender);
//console.log(typeof gender);

let name = 'John';
let age =30;
let isStudent =true;
let gender = 'male';

let person = {
    name: 'John',
    age: 30,
    isStudent:true,
    gender:'male',
    address:{
        city: 'Nairobi',
        street: 'Mpaka Road',
    },
};
person.age=50 //Changing values for data in an object
person.address.street= "kibiku street";

console.log(person.age);
console.log(person.address.street);
person['name']= "Seth";
console.log(person.age);
console.log(person['gender']);
console.log(person.name);


//Arrays (list of items used of storing ordered list of items)

const laptops = ['Macbook', 'HP', 'Lenovo', 'Dell'];
console.log(laptops);

let mixedArray = ['John', true, 40, null, undefined, {gender:'male'}]

console.log(mixedArray);
console.log(laptops[1]);
console.log(mixedArray[5].gender);
console.log(mixedArray.length);

laptops.push("Toshiba"); //Adding to indefinite position 
laptops.unshift('Asus'); //adding at the beginning
laptops.splice(2, 0, 'Acer') //Adding to Specific position
console.log(laptops);
console.log(laptops.indexOf('Dell')); // Knowing the position of an item in the list

laptops.pop(); //removing the last in the list
laptops.shift(); // removing first in the list
laptops.splice(2, 1); //removing from a specific location
console.log(laptops);

const sortedArray = laptops.sort()
console.log(sortedArray);

const reversedArray = sortedArray.reverse();
console.log(reversedArray);

const people = [
    {name:'Seth', class: 7, Subject: 'English', Teacher: 'Dan'},
    {name:'Jane', class: 5, Subject: 'Kisawahili', Teacher: 'Frank'},
    {name:'Lawi', class: 4, Subject: 'Science', Teacher: 'Dan'},
    {name:'Belinda', class: 7, Subject: 'SST', Teacher: 'Frank'},
    {name:'Otoyo', class: 5, Subject: 'SST', Teacher: 'Dan'},
];

const groupedByName = Object.groupBy(people,(people) =>people.name);
console.log(groupedByName);
const groupedBySubject = Object.groupBy(people,(people) =>people.Subject);
console.log(groupedBySubject);
