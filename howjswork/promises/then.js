// how to  create a prommise object..

// let promise = new Promise(function(resolve,reject){

// });


// example 1:

// const count = true;

// let countValue = new Promise(function(resolve,reject){
//     if(count){
//         resolve ("there is a count value")
//     } else {
//         reject ("there is no count value")
//     }
// })

// console.log(countValue);




// example with .then()

let promise = new Promise ((resolve,reject)=>{
    resolve("hello world") // the code is success so it prints"hello world"
}); 
promise.then(value =>{
    console.log(value)});    // then returns the successed value




// example with .catch()

// let promise1 = new Promise((resolve,reject)=>{
//     reject("something is wrong")
// })
// .then((value)=>{
//     console.log(value);
// })
// .catch((value) =>{
//     console.log(value);
// })
