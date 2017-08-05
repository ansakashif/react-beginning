Array Immutations:


//Immutabilty 

//Array
//1.Add new Item

//Mutable List
/*
let list=[1,2,3];
//Test whether list is mutable or not
Object.freeze(list);
list.push(4);
console.log(list);
                        
console.log(list.concat([4]));

//ES 7 Spread Operator
let newArray = [...list, 4];
console.log(newArray);

//Immutabilty 

//Array
//1.Add new Item

//Mutable List
/*
let list=[1,2,3];
//Test whether list is mutable or not
Object.freeze(list);
list.push(4);
console.log(list);
*/
//Immutable List
let list =[1,2,3];
Object.freeze(list);
console.log(list.concat([4]));
//ES 7 Spread Operator
let newArray = [...list, 4];
console.log(newArray);