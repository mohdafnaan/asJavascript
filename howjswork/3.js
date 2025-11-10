//       asynchronous 
function a(){
    console.log("a");
}


console.log("b");

a();


///                 SETTIMEOUT

function hello(){
    console.log("print after 4 secs");
}

setTimeout(hello,4000);// prints the output after 5 secs


setTimeout(()=>{
    console.log("print after 4 secs");
},4000); 
