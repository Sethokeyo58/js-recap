//conditional statements
//if(condition){
  //  block of code to be exece
//}

//let age = 10;
//if (age >= 18) {
    console.log('You are eligible to vote.');
//}else {
  //  console.log('You are not eligible to vote')

//}

let age = 19;
let hasID;
let isRegistered;
//if age(age>=18){
    console.log('You are an adult');
    if (hasID =false){
        if(isRegistered= true){
            console.log('You are eligible to vote');
        }else {
   //         console.log(You are not eligible to vote);
        }
    }
//}else {
    console.log("You don't have an ID.");
//}


let correctPass = '1234';
let input;

do {
    input = prompt ('Enter your password:');
}while (input !== correctPass){

}
console.log('Access granted!')