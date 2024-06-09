"use strict";
const arrayOfNumber = [1, 21, 21, 82, 6, -7, 9, 4, 4, 0, 8, 21, 8, 9, 7];

function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = array.length; i > 0; i--) {
      if (array[i] < array[i - 1]) {
        const greater = array[i - 1];
        array[i - 1] = array[i];
        array[i] = greater;
      }
    }
  }
  return array;
}

function bubbleSort2(array) {
  let arrayLength = array.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < arrayLength; i++) {
      if (array[i - 1] > array[i]) {
        const greater = array[i - 1];
        const smaller = array[i];
        array[i - 1] = smaller;
        array[i] = greater;
        swapped = true;
      }
    }
    arrayLength--;
  } while (swapped);
  return array;
}

function findSmallestValue(array) {
  if (array.length == 0) return undefined;
  let smallestValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (smallestValue > array[i]) smallestValue = array[i];
  }
  return smallestValue;
}

function selectionSort(array) {
  for(let i = 0; i < array.length; i ++){
    
    let idxOfSmallestValue = i;
    for(let j = i+1; j < array.length; j ++){
      if (array[idxOfSmallestValue] > array[j]) idxOfSmallestValue = j;
    }
    if(idxOfSmallestValue != i){
      const tmp = array[idxOfSmallestValue];
      array[idxOfSmallestValue] = array[i];
      array[i] = tmp;
    }
    console.table(array)
  }
  return array;
}

function generateCombinations(n, k) {
  const combinationsAcc = [];
  const currentCombination = [];
  function generateAllCombos(n, k, startCursor) {
      if (k === 0) {//condition de terminaison, nos deux éléments ont été ajouter, la combinaisons est complête.
          if (currentCombination.length > 0) {
              combinationsAcc.push(currentCombination.slice());
          }
          return combinationsAcc;
      }
      const endCursor = n - k + 2;
      for (let i = startCursor; i < endCursor; i++) {
          currentCombination.push(i);
          generateAllCombos(n, k - 1, i + 1);
          currentCombination.pop();
      }
      return combinationsAcc;
  }
  return generateAllCombos(n, k, 1);
}

var sumOfAll = function(n) {
  var result = 1;
  for(var i = 1; i <= n; i++){
    console.log("before addition by ", i )
    console.log({result})
    result = result + i;
    console.log('after addtion by ', i)
    console.log({result})
  }
  return result;
};

var factorial = function(n) {
	// base case: 
	if(n === 0){
	    return 1;
    }
    return n * factorial(n - 1);
	// recursive case:
}; 


console.group();
// console.log("-------- before ---------");
// console.table(arrayOfNumber);
console.log("-------- result ---------");
console.groupEnd();
