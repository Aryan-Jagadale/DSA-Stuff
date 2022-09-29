/*https://www.youtube.com/watch?v=zdp0zrpKzIE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=22*/

const languages = ['javascript','python','c']

languages.push('dart')
/*4 ['javascript','python','c','dart']
Adds at the end of array
*/
languages.unshift('java')
/*
['java', 'javascript', 'python', 'c','dart']
Adds at the first of array
*/
languages.pop()
/*
['java', 'javascript', 'python', 'c']
Removes the last elemnet
*/
languages.shift()
/*
['javascript', 'python', 'c']
Removes the first element
*/

/*Indexof
const admins = [2,1,5];

const user = {
  name:'XYZ',
  id: 5
}

const isAdmin = admins.indexof(user.id) > -1;
console.log(isAdmin)*/
//false









/*find*/
const users = [
  {
    name:'xyz',
    id:1
  },
  {
    name:'abc',
    id:2
  },
  {
    name:'pqr',
    id:3
  }
]
const myUser = users.find((user)=>{
  return user.id === 2
  
})
console.log(myUser)

//Sort
const names = ['John','Jane','Shyam',"Ram",'Sammer','Mansi']
names.sort()

/*
['Jane', 'John', 'Mansi', 'Ram', 'Sammer', 'Shyam']
*/

//Splice
names.splice(2,2)
/*
['Jane', 'John', 'Sammer', 'Shyam']
*/
console.log(names)
console.log(languages)

/*Map function*/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/*Filter function*/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

/*Reduce function */
const arr = [5,1,3,2,6]

//Sum
function findSum(arr){
  let sum = 0
  for(let i= 0; i < arr.length; i++){
    sum += arr[i] 
  }
  return sum;
}

//Here acc === sum &&& curr === arr[i]
const output = arr.reduce(function(acc,curr) {
  acc = acc + curr
  return acc
},0)

//console.log(output)

//Max
function findMax(arr){
  let max = 0
  for(let i= 0; i < arr.length; i++){
     if(arr[i] > max) {
       max = arr[i]
     }
  }
  return max;
}
//console.log(findMax(arr))
const result = arr.reduce(function(acc,curr){
   if(curr>acc){
  	acc = curr
	}
	return acc
},0)
console.log(result)

/*Tricky reduce*/
const users = [
  {firstname:"akshay",lastname:"saini",age:26},
    {firstname:"donald",lastname:"trump",age:75},
{firstname:"elon",lastname:"musk",age:50},
  {firstname:"a",lastname:"j",age:26},
]

// {26:2,75:1,50:1}

const ageList = users.reduce(function(acc,user){
  if(acc[user.age]){
    acc[user.age] = ++acc[user.age]
  }else {
    acc[user.age] = 1
  }
  return acc
},{})
console.log(ageList)


/*Chaining */
const users = [
  {firstname:"akshay",lastname:"saini",age:26},
    {firstname:"donald",lastname:"trump",age:75},
{firstname:"elon",lastname:"musk",age:50},
  {firstname:"a",lastname:"j",age:26},
]

// {26:2,75:1,50:1}

const nameList = users.filter(user => user.age < 30)
const ageList = nameList.map(obj => obj.firstname )
console.log(ageList)

const output = users.filter(x => x.age<30).map(x => x.firstname)
console.log(output)











