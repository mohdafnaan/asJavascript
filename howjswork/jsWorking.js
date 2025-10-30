
// Javascript is a synchronous single threaded language.


// what happens when you run a js code?
// everything in js happens inside an execution context


var n = 2;
function square (num){
    var ans = num * num;
    return ans ;

}
var square2 = square(2);
console.log(square2);
var square4 = square(4);
console.log(square4);
// console.log(object);