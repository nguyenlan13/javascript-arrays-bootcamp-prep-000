var chocolateBars;

chocolateBars = [
  'snickers', 
  'hundred grand', 
  'kitkat', 
  'skittles'
];

console.log (chocolateBars);
  

function addElementToBeginningOfArray(array, element){
 return [element, ...array]
}

 function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
 }
 
 function addElementToEndOfArray(array, element){
  return[...array, element]
 }
 
 function destructivelyAddElementToEndOfArray(array, element){
    array.push(element)
    return array
 }
 
 function AccessElementInArray(array, index){
   return [3]
 }
 
 function destructivelyRemoveElementFromBeginningOfArray (array){
  return array.shift()
 }