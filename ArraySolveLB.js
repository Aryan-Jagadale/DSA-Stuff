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

/*Sort array in 0s,1s,2s*/

/*1st approach*/
sort012(arr, N)
    {
        let low = 0;
        let mid = 0;
        let high = N-1;
        let temp = 0;
        
        while(mid <= high){
            if(arr[mid] === 0){
                temp = arr[low]
                arr[low]= arr[mid]
                arr[mid] = temp
                low++;
                mid++;
                
            }else if(arr[mid] === 1){
                mid++;
            }else{
                temp = arr[mid];
                arr[mid] = arr[high];
                arr[high] = temp;
                
                high--
            }
        }
    }
/* 2nd approach */

  sort012(arr, n)
    {
        let i, cnt0 = 0, cnt1 = 0, cnt2 = 0;
 
    // Count the number of 0s, 1s and 2s in the array
    for (i = 0; i < n; i++) {
        switch (arr[i]) {
        case 0:
            cnt0++;
            break;
        case 1:
            cnt1++;
            break;
        case 2:
            cnt2++;
            break;
        }
    }
 
    // Update the array
    i = 0;
 
    // Store all the 0s in the beginning
    while (cnt0 > 0) {
        arr[i++] = 0;
        cnt0--;
    }
 
    // Then all the 1s
    while (cnt1 > 0) {
        arr[i++] = 1;
        cnt1--;
    }
 
    // Finally all the 2s
    while (cnt2 > 0) {
        arr[i++] = 2;
        cnt2--;
    }
    
    }

/*
Move all negative numbers to beginning and positive to end with constant extra space
*/

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
//Using sort method
//console.log(arr.sort(function(a,b) {return a-b}))

//Using for loop
/*let j = 0
for( let i=0; i< arr.length; i++){
  if(arr[i] < 0){
    if(i != j){
      let temp = arr[i]
      arr[i] = arr [j]
      arr[j] = temp
    }
    j++
  }
}
console.log(arr)*/

//Check another approach in gfs

//Using Dutch National Flag Algo
 let low = 0
 let high = arr.length - 1
 while(low < high){
   if(arr[low]<0){
     low+=1
   }else if(arr[high]>0){
     high-=1
   }else{
     let temp = arr[low]
     arr[low] = arr[high]
     arr[high] = temp
   }
 }

console.log(arr)



