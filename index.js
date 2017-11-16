// Add your doToElementsInArray() function here:
function doToElementsInArray(array,callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here
function changeCompletely(element,index,array) {
   element=Math.floor(Math.random()*100).toString()+` ${element}s!!!`;
  }
//doToElementsInArray(array,changeCompletely);