Remove element:
..............

//Remove item
//Using mutating method
const removeCounter = (list, index) => {
  list.splice(index, 1);
  return list;
}
const listBefore = [1,2,3,4,5,6];
Object.freeze(listBefore);
let result = removeCounter(listBefore, 4);
console.log(result);



//Immutable method
const removeCounter = (list, index) => {
  // Old way: -ES 5
  //Remove element based index and after removal merge begining and end of the array 
  // and return new array.
  //return list.slice(0, index).concat(list.slice(index + 1));
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};
  const listBefore = [15, 10, 20,78,8,90,67];

  Object.freeze(listBefore);
  let result = removeCounter(listBefore, 4);
  console.log(result);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

When you update element:

//How to change item in array
//Array item increment - Mutating method 

const incrementCounter = (list, index) => {
  list[index]++;
  return list;
};
let list = [10];
Object.freeze(list);
console.log(incrementCounter(list, 0));
//Immutable way
const incrementCounter = (list, index) => {
  // Old way:
  // return list
  //  .slice(0, index)
  //  .concat([list[index] + 1])
  //  .concat(list.slice(index + 1));

  // ES6 way:
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};
let list = [10];
Object.freeze(list);
console.log(incrementCounter(list, 0));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Literal Object Mutatation:
..........................

const toggleTodo = (todo) => {
  // Mutated version:
  todo.completed = !todo.completed
  todo.name = 'Subramanian';
  return todo;
}

let data = {
  id: 0,
  text: 'Learn Redux',
  completed: true 
};
Object.freeze(data);
console.log(toggleTodo(data));


/*
const toggleTodo = (todo) => {
  // Mutated version:
  todo.completed = !todo.completed
  todo.name = 'Subramanian';
  return todo;
}*/
//Immutable version
/**
const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};
 */
const toggleTodo = (todo) => {
  return {
    ...todo,
      completed: !todo.completed,
      text:'Learn react with Redux'
  };
};

let data = {
  id: 0,
  text: 'Learn Redux',
  completed: true
};
Object.freeze(data);
console.log(toggleTodo(data));