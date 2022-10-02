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



// Max && Min

//Simple loop
let arr1 = [5,6,89,0,54]
let max = -Infinity, min = +Infinity;

/*for(let i = 0; i<arr.length; i++){
  if(arr[i]>max){
    max = arr[i]
  }
  if(arr[i] < min){
    min = arr[i]
  }
}*/

//console.log(max,min)

//Using destructing
//console.log("Min",Math.min(...arr))
//console.log("Max",Math.max(...arr))



function getMinMax(arr){
  let n = arr.length;
  let mx,mn,i;
  
  if(n%2 ==0){
    mx = Math.max(arr[0],arr[1])
    mn = Math.min(arr[0],arr[1])
    i=2
  }else{
    mx = mn = arr[0]
    i =  1
  }
  
  while(i < n-1){
   if(arr[i] < arr[i+1]){
     mx = Math.max(mx,arr[i+1])
     mn = Math.max(mn,arr[i])
   }else{
   
   mx = Math.max(mx, arr[i])
    mn = Math.min(mn, arr[i + 1])
   }
    i += 2
             
  }
  return [mx,mn]
}



let arr = [1000, 11, 445, 1, 330, 3000]
let mx = getMinMax(arr)[0]
let mn = getMinMax(arr)[1]
console.log(mx,mn)








