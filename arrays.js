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
   return array[index]
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(array){
    return array.shift()
    array

 }
 
 function removeElementFromBeginningOfArray (array){
   return array.slice(1)
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
   return array.pop()
   
 }
 
 function removeElementFromEndOfArray (array){
   return array.slice(0, array.length - 1)
  
 }