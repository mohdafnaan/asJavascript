//                first class fucntion

//ability to used like values .

let b = function(para1){
    return function(){
        console.log("inner function");
    }
}
console.log(b());



