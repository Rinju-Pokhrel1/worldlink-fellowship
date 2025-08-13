//variable
const a =10;
let b  = 20;
console.log(b);
let c = a+b;
console.log(a);
console.log(c);

// regular function
function getName() {
    console.log("hello rinju from regular functional");
}
getName();

//arrow function
const getName2 = () => {
    console.log("hello Rinju from arrow function");
}
getName2();

const getrslt= (a,b) => {
    console.log (a+b);
    return a+b;
}
console.log(getrslt(a,b));


// to print the sum of two numbers
function add(a,b)
{
   
    return a+b;
}
const sum = add(10,20);
 console.log(`the sum of two numbers is ${sum}`);    //backtick string

 
