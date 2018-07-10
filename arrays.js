var arr = [];
var element = 'foo';

function addElementToBeginningOfArray(arr, element) {
  return arr.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  return [element, ...arr];
}