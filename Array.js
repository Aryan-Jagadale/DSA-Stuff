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
