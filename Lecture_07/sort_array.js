const names=["Rohit","Ramesh","Suresh","Mahesh"];
///sort the names in ascending order
names.sort();
console.log(names);
///sort the names in descending order
names.sort((a,b)=>b.localeCompare(a));
console.log(names);
const aim=["Rohit","Ramesh","Suresh","Mahesh","rohit","ramesh","suresh","mahesh"];
aim.sort();
console.log(aim);///it is sorting in ascending order but it is case sensitive so it is sorting capital letters first and then small letters
//usig ascii values
const num=[10,20,7,101,23,78,4];
num.sort();
console.log(num);///it is sorting in ascending order but it is sorting based on ascii values so it is not giving correct result
//output is [10, 101, 20, 23, 4, 7, 78] which is not correct
//it takes num as string and then sort it based on ascii values
//to sort numbers in ascending order we can use compare function
num.sort((a,b)=>a-b);
console.log(num);///it is sorting in ascending order correctly
