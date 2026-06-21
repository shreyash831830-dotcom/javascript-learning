//// ARRAY////
let marks = [90, 80, 70, 60, 50];
console.log(marks);
console.log(marks[0]);
//length of array
console.log(marks.length);
//last element of array
console.log(marks[marks.length - 1]);
//change value of array
marks[0] = 95;
console.log(marks);
//add new element to array
marks.push(40);
console.log(marks);
//remove last element from array
marks.pop();
console.log(marks);
// all elements of array
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
///array stores different types of datatypes, string number, boolean, object, array, null, undefined(it can store any type of data)////
let mixedArray = [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(mixedArray);
///delete and insert element in the starting of array
//insert element in the starting of array
marks.unshift(100);
console.log(marks);
//delete element from the starting of array
marks.shift();
console.log(marks);
///slice//
let a=marks.slice(1,3);//it will return new array from index 1 to index 2
console.log(a);//it doesnt change the original array
///splice//
marks.splice(1,2);//it will delete 2 elements from index 1
console.log(marks);//it changes the original array
let arc=[10,20,40,50,60,70];
let b=arc.splice(2,4,17,19);//it will delete 4 elements from index 2 and insert 17 and 19 at index 2
console.log(b);
console.log(arc);//it changes the original array
///delete element from array
arc.splice(2,1);//it will delete 1 element from index 2
console.log(arc);//it changes the original array
///insert element in array
arc.splice(2,0,30,41);//it will insert 30 and 41 at index 2
console.log(arc);//it changes the original array

//add two or more arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const combinedArray = arr1.concat(arr2, arr3);
console.log(combinedArray);
//do not use push to add two or more arrays because it will add the second array as a single element in the first array
///shortcut to add two or more arrays
//**** use spread operator to add two or more arrays ****
const combinedArray2 = [...arr1, ...arr2, ...arr3];
console.log(combinedArray2);
///store some elements from array
const nums=[10,20,30,40,90];
const first=nums[0];
const second=nums[1];
console.log(first,second);
///shortcut to store some elements from array
//**** use destructuring to store some elements from array ****
const [firstNum,secondNum]=nums;
console.log(firstNum,secondNum);
///****store some elements from array and rest of the elements in another array***
//we can use rest operator to store some elements from array and rest of the elements in another array
const [firstN,secondN,...rest]=nums;
console.log(firstN,secondN,rest);//very important rest operator should be used at the end of destructuring assignment
///convert array to string
const names=["Rhoit","Mohit","Sohan","Rohan","Mohit"];
console.log(names.join(", "));//it will convert array to string and separate each element with comma and space
//index of element in array
console.log(names.indexOf("Mohit"));//it will return the index of first occurrence of "Mohit"
console.log(names.lastIndexOf("Mohit"));//it will return the index of last occurrence of "Mohit"
//check if element is present in array
console.log(names.includes("Rohan"));//it will return true if "Rohan" is present in array otherwise it will return false
console.log(names.includes("Rahul"));//it will return false because "Rahul" is not present in array


