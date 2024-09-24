// Callback function

function sayHello(){
    console.log("hello everyone");
}

 function sayHi(){
    console.log("Hi everyone");
}



function add (num1: number, num2: number, Callback: any,){
    console.log(num1+num2);
    Callback();
    
}
add(2,10,sayHello);
add (5,2,sayHi);

function hello(Callback:any){
    Callback("Sarmad bhai");
}
let arrowFunc = (name:string)=>{
    console.log(`hello ${name}`)

}
hello(arrowFunc);


function myName (Callback:any) {
    Callback("ali");

}
let myName2 = (myName:string)=>{
    console.log(`Asalam Alaikum ${myName}`);
}
myName(myName2);