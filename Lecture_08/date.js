const now =new Date();
console.log(now);// this will give universal time 
//for indian standard time we need to add 5 hours and 30 minutes to the universal time
console.log(now.toString());// this will give the date and time in local time zone
//
console.log(now.getDate());// this will give the date of the month
console.log(now.getDay());// this will give the day of the week
console.log(now.getFullYear());// this will give the year
console.log(now.getHours());// this will give the hours
console.log(now.getMonth());// this will give the month
//jan:0,feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11
//mon:1, tue:2, wed:3, thu:4, fri:5, sat:6, sun:7
///anothet way to create time stamp
const now1=Date.now();
console.log(now1);// this will give the time stamp in milliseconds since 1 jan 1970
//this will show how many milliseconds have passed since 1 jan 1970 12:00 am
/// custom date
// new date(year, month, day, hours, minutes, seconds, milliseconds
const customDate = new Date(2023, 9, 15, 10, 30, 0, 0);
console.log(customDate);
