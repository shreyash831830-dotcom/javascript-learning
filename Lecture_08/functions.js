///create a function
function greet() {
    console.log("Hello, World!");
}
//call the function
greet();
// function of add two numbers
function add(a, b) {
    console.log(a + b);
}
add(5, 10);
//
function addnumber(num1, num2) {
    return num1 + num2;
}
let result = addnumber(10, 20);
console.log(result);
///using rest parameter to add numbers
function addNumbers(...arr) {//it will take all the numbers and store in an array
    let sum =0;
    for(const num of arr) {
        sum += num;
    }
    return sum;
}
console.log(addNumbers(2,1,3,4,54,53,54,55,566,6,72));
///second way to create a function
let greet2 = function() {
    console.log("Hello, World!");
    return "10";//this is not inside the function greet2, so it will not be printed
}
greet2();
//
const greet3 = function(){
    console.log("Hello, World!");
    return "10";//this is not inside the function greet3, so it will not be printed 
}
const answer = greet3();
console.log(answer);
///third type to create a function// most used
const greet4 = () => {
    console.log("Hello, World!");
}
greet4();
//
const addNumber1=(num1,num2)=>{
    return num1+num2;
}
console.log(addNumber1(3,9));
//short method
const addnumber2=(num1,num2)=>num1+num2;
console.log(addnumber2(3,9));
///
const square=(num)=>num*num;
console.log(square(6));
// when we have only one parameter no need to use ()
const square1=nums=>nums*nums;
console.log(square1(8));
///object inside function 
const user1=()=>{
    return{
        name:"rohit",
        age:20,
    }
}
console.log(user1());
//short method
const user2=()=>({name:"rohit",age:20});
console.log(user2());


