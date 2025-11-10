// call back hell 

// function getData(dataId){
//     console.log("data" ,   dataId);
// }
// getData(1);// we will get data 1 as the output ;



// level 2 :

// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId);
//     },2000)
// }
// getData(1);
// getData(2);
// getData(3);




// level 3:

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }
// getData(1,()=>{
//     getData(2)
// })






// normal callback function 

// function greet(name,callback){
//     console.log(`hi my name is ${name}`);
//     callback();

// }

// function callMe(){
//     console.log("i have called a function");
// }

// greet("afnaan",callMe);




// callback function with setTimeout

// function name(yourname){
//     console.log(`hi${yourname}`);
// }
// function greet(){
//     console.log(`assalmualaikum`);
// }
// name("afnaan");
// setTimeout(()=>{
//     greet();
// },2000)



// function takeName(name,greet){

//         console.log(`hi ${name}.`);
//         greet();
// }
// function doSalam(){
//     console.log(`assalamualaikum`);
// }
// takeName("afnaan", doSalam)



// function takeName(name,greet){
//     console.log(`hi ${name} bro.`);
//     greet();
// }
// function askWater(){
//     setTimeout(() => {
//         console.log(`would you like to have water?`)
//     },2000);
// }

// takeName("afnaan",askWater);



// function sayName(x){
//    return  x;
// }
// let a = sayName("afnaan");
// console.log(a);




function sayName(x,y){
    console.log(`i am ${x}`);
    y();
}
function greet(x){
console.log(`${x}how are you?`);
}

sayName("afnaan",greet)

// setTimeout(sayName, 2000,"afnaan", gree`t);