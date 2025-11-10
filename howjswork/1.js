let x = 1;
a();   // this will print first 10
b();   // this will print second 100

console.log(x); // this will last 1

function a(){
    let x = 10;
    console.log(x);
}

function b(){
    let x = 100;
    console.log(x);
}

