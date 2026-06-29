//any information is stored in objects
const user={
    name:"John",
    age:30,
    city:"New York"
}
console.log(user.name); //accessing the name property of the user object
console.log(user);
console.log(user.age); //accessing the age property of the user object
///
function Display(food){
    console.log(food.name);
    console.log(food.price);
    console.log(food.rating);
    console.log(food.description);
    console.log(food.imagelink);
}
const obj1={
    name:"Pizza",
    price:10,
    rating:4.5,
    description:"Delicious pizza with cheese and toppings",
    imagelink:"https://www.example.com/pizza.jpg"
}
const obj2={
    name:"Burger",
    price:5,
    rating:4.0,
    description:"Juicy burger with lettuce and tomato",
    imagelink:"https://www.example.com/burger.jpg"
}
Display(obj1);
Display(obj2);
//create new key value in object
user.adhar="1234-5678-9012";
console.log(user);
//u[pdate the value of existing key in object
user.age=31;
console.log(user);
//delete the key value in object
delete user.city;
console.log(user);
///add function in object
const strike={
    name:"rohit",
    age:20,
    email:"rohit@example.com",
    greet:function(){
        console.log("Hello, my name is "+this.name);
    }
}
//function call
strike.greet();
///object inside object
const use={
    name:"rohit",
    age:20,
    email:"rohit@example.com",
    arr:[10,30,40,50],
    address:{
        city:"New Delhi",
        state:"Delhi",
        country:"India"
    }

   
}
console.log(use.arr[2]);
//to access the city property of the address object
console.log(use.address.city);
///
const coustomer={
    name:"Rohit",
    age:30,
    email:"rohit@example.com",
}
//to print all the keys of the object
console.log(Object.keys(coustomer));
//to print all the values of the object
console.log(Object.values(coustomer));
//to print all the key value pairs of the object
console.log(Object.entries(coustomer));
///manually print all keys
const coustomer1=Object.keys(coustomer);

console.log(coustomer1);
///it convert object into array of key value pairs
const coustomer2=Object.entries(coustomer);
console.log(coustomer2);
//we can iterate over the array of key value pairs using for loop
for(const [key,value] of coustomer2){
    console.log(key,value);
}
for(const key of coustomer2){
   console.log(key);
   console.log(coustomer[key]);
}
///to print values 
for (const value of Object.values(coustomer)) {
    console.log(value);
}
//2d array of key value pairs
const coustomer3=Object.entries(coustomer);
console.log(coustomer3);
//or
for(const ans of Object.entries(coustomer)){
    console.log(ans);
}
//to print key value pairs using for loop
for(const [key,value] of Object.entries(coustomer)){
    console.log(key,value);
}
/// object are reference type so if we assign one object to another object then both objects will point to the same memory location so if we change one object then the other object will also change
const obj3={name:"Rohit",age:30};
const obj4=obj3;
obj4.name="Ramesh";
console.log(obj3.name); //it will print Ramesh because both obj1 and obj2 are pointing to the same memory location
///how to create a copy of an object so that if we change one object then the other object will not change
const obj5={name:"Rohit",age:30};
const obj6={...obj5}; //using spread operator
obj6.name="Ramesh";
console.log(obj5.name); //it will print Rohit because both obj1 and obj2 are pointing to different memory location
//

