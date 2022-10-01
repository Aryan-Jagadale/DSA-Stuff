/*Reverse a array*/
/*Reverse an array*/
/*let arr = [34, 234, 567, 4];
let arr1 = []
let arr2 = []
let arr3 = []*/


//Using push method
/*for (let i = arr.length-1; i>=0 ;i--){
  arr1.push(arr[i])  
}
console.log(arr1)

//using Unshift method
arr.forEach(element => arr2.unshift(element))
console.log(arr2)*/

//Using swap method
let arr = [1, 2, 3, 4];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
}
console.log(arr);










