///2D ARRAY///
let arr2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr2D);
//individal element from 2d array
console.log(arr2D[0][0]);
console.log(arr2D[1][1]);
console.log(arr2D[2][2]);
//length of 2d array
console.log(arr2D.length);//it will return number of rows in 2d array
console.log(arr2D[0].length);//it will return number of columns in 2d array
//change value of 2d array
arr2D[0][0] = 10;
console.log(arr2D);
//add new row to 2d array
arr2D.push([10, 11, 12]);
console.log(arr2D);
//remove last row from 2d array
arr2D.pop();
console.log(arr2D);
//print each row of 2d array
for (let i = 0; i < arr2D.length; i++) {
    console.log(arr2D[i]);
}
console.log(arr2D[0]);
console.log(arr2D[0][1]);
///print each element of 2d array
for(let row=0;row<arr2D.length;row++){
    for(let col=0;col<arr2D[row].length;col++){
        console.log(arr2D[row][col]);
    }
}
