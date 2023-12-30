// let firstName = "Ankit";
// let age = 18;
// let isMarried = "Monkey";

// // console.log("This person name is " + firstName + " and their age is " + age)

// if(isMarried){
//     // console.log(firstName + " is Married");
// }else{
//     // console.log(firstName + " is not Married");
// }


// let ans = 0;
// for(let i = 0 ; i <= 100 ; i++){
//     ans = ans + i;
// }
// // console.log(ans);

// const ages = [21, 22, 23, 26, 27, 31];
// const numberOfPeople = ages.length;

// for(let i = 0 ; i < numberOfPeople ; i++){
//     if(ages[i] % 2 == 0){
//         // console.log(ages[i]);
//     }
// }

// let allUsers = [{
//     firstName: "Ankit",
//     age : 22
// },{
//     firstName: "Piyush",
//     age : 21
// }]

// //console.log(allUsers[1].firstName);


// //----> Callbacks


// function sum(num1, num2, fntoCall) {
//     let result = num1 + num2;
//     fntoCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum

// const answer = sum(1, 2, displayResult);



//Using Callback
// const fs = require('fs');

// function readFile(cb){
//     fs.readFile('a.txt', 'utf-8', function(err, data){
//         cb(data);
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// readFile(onDone);

//


//Promises
// const fs = require('fs');

// function readFile(){
//     return new Promise(function(fn){
//         fs.readFile('a.txt', 'utf-8', function(err, data){
//             fn(data);
//         });
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// readFile().then(onDone);
// console.log('I am Here');


//Async Await
// const fs = require('fs');

// function readFile(){
//     let p = new Promise(function(fn){
//         fs.readFile('a.txt', 'utf-8', function(err, data){
//             fn(data);
//         });
//     });
//     return p;
// }

// async function main(){
//     const v = await readFile();
//     console.log(v);
// }

// main();
// console.log('I am Here');


