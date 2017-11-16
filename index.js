// Add your doToElementsInArray() function here:
function doToElementsInArray(array,callback) {
  array.forEach(callback);
  return array;
}

// Add your changeCompletely() function here
function changeCompletely(element) {
   element=Math.floor(Math.random()*100).toString()+` ${array[element]}s!!!`;
  }
//doToElementsInArray(array,changeCompletely);
