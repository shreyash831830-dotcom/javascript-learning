console.log("hello world");
//** */ variables to store elements ('let' is used to store value of any data type), let is keyword and a is  variable
let a=10.6;
//** */ store string 
let firststring="shreyash";
console.log(a); 
console.log(firststring);
//*in let we can update the value of variable 
a=20
console.log(a);
//*"const" is used to store value of any data type but we cannot update the value of variable declared with const
const b=30.5;//in const we can also store any data type
const second="yash";
console.log(b,second)
// DATATYPES (PRIMITIVE AND NON-PRIMITIVE DATA TYPES)
//** */ primitive data types are number, string, boolean, null, undefined and symbol
//** */ non-primitive data types are object, array and function
//** */ "number" data type is used to store numeric values
let num=100;
console.log(num);
//** */ "string" data type is used to store sequence of characters
let str="hello";
console.log(str);
//** */ "boolean" data type is used to store true or false values
let bool=true;
console.log(bool);
//** */ "null" data type is used to store null value
let n=null;
console.log(n);
//** */ "undefined" data type is used to store undefined value
let u=undefined;
console.log(u);
//** */ "symbol" data type is used to store unique values
let sym=Symbol("sym");
console.log(sym);
// "bigint "data type is used to store large integers
let e=23423345566567845875859475599737239959;
console.log(e);
/// NON PRIMITIVE DATA TYPES
//"ARRAY" it is used to store collection of values of any data type
let arr=[10,20,"rohit",6.7 , true]; // any data type can be stored in array
console.log(arr);
///"OBJECT"it is used to store collection of key-value pairs
let person={
    name:"shreyash",
    age:20,
    city:"pune"
}
console.log(person);
///"function" it is used to store collection of statements that can be executed when called
function greet(name){
    console.log("hello "+name);
}
greet("shreyash");//function is datatype so wecan store it in variable
let p=function hello(){
    console.log("hello");
}
console.log(p);
//** */ object data type is used to store collection of key-value pairs

