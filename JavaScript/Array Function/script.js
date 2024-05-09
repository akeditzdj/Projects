/* 1.Write a function that takes an array of numbers and returns a new array with only the even numbers.
     Sample Input: [1, 2, 3, 4, 5, 6]
     Sample Output: [2, 4, 6] 
*/
// let numbers = [1, 2, 3, 4, 5, 6];

// let result = numbers.filter((numbers) => numbers % 2 == 0);
// console.log(result);

/*-------------------------------------------------------------------------*/

/* 2.Implement a function that doubles each element in an array.
Sample Input: [1, 2, 3, 4]
Sample Output: [2, 4, 6, 8]
*/

// const sampleInput = [1, 2, 3, 4];
// let result = sampleInput.map((input) => input *2);
// console.log(result);

/*-------------------------------------------------------------------------*/

/* 3.Create a function that takes an array of strings and returns a new array with only the strings that have a length greater than 5.
Sample Input: ['apple', 'banana', 'orange', 'kiwi', 'strawberry']
Sample Output: ['banana', 'orange', 'strawberry'] */

// let furuits = ["apple", "banana", "orange", "kiwi", "strawberry"];

// let result = furuits.filter((furuits) => furuits.length > 5);

// // console.log(result);

/*-------------------------------------------------------------------------*/

/* 4.Write a function that calculates the sum of all the numbers in an array.
Sample Input: [1, 2, 3, 4, 5]
Sample Output: 15
*/

// let inputs = [1, 2, 3, 4, 5];
// let input = [6, 7, 8];
// inputs.push(...input);
// let result = inputs.reduce((a, b) => a + b, 0);
// console.log(inputs, result);

/*-------------------------------------------------------------------------*/

/* 5.Implement a function that removes duplicates from an array.
Sample Input: [1, 2, 3, 2, 4, 5, 3]
Sample Output: [1, 2, 3, 4, 5]
*/

// let input = [1, 2, 3, 2, 4, 5, 3];

// function removeDuplicates(input) {
//   return input.filter((item, index) => input.indexOf(item) === index);
// }
// console.log(removeDuplicates(input));

/*-------------------------------------------------------------------------*/

/* 6.Create a function that reverses a given array.
Sample Input: [1, 2, 3, 4, 5]
Sample Output: [5, 4, 3, 2, 1]
*/

// let input = [1, 2, 3, 4, 5];
// let result = input.reverse();
// console.log(result);

/*-------------------------------------------------------------------------*/

/* 7.Write a function that takes an array of numbers and returns the maximum number.
Sample Input: [5, 2, 8, 1, 9]
Sample Output: 9
*/

// let input = [5, 2, 8, 1, 9];
// let result = Math.max(...input);

// console.log(result);

/*-------------------------------------------------------------------------*/

/* 8.Implement a function that merges two arrays and removes duplicates.
Sample Input: ([1, 2, 3], [3, 4, 5])
Sample Output: [1, 2, 3, 4, 5]
*/

// let input1 = [1, 2, 3];
// let input2 = [4, 5];
// input1.push(...input2);

// console.log(input1);

/*-------------------------------------------------------------------------*/

/* 9.Create a function that finds the index of a given element in an array. If the element is not found, return -1.
Sample Input: ([10, 20, 30, 40, 50], 30)
Sample Output: 2
*/
// inputVal = 40;
// let inputs = [10, 20, 30, 40, 50];
// let result = inputs.indexOf(inputVal);
// console.log("Input value : " + inputVal);
// console.log("Index of input value  : " + result);

/*-------------------------------------------------------------------------*/

/* 10.Write a function that sorts an array of strings in alphabetical order.
Sample Input: ['banana', 'apple', 'orange', 'grape']
Sample Output: ['apple', 'banana', 'grape', 'orange']
*/

// let fruits = ["banana", "apple", "orange", "grape"];
// let result = fruits.sort();
// console.log(result);

/*-------------------------------------------------------------------------*/

/* 11.Write a function that takes an array of strings and returns the count of strings that contain a specific substring.
Sample Input: (['apple', 'banana', 'pineapple', 'kiwi'], 'apple')
Sample Output: 2
*/

// const strings = ["apple", "banana", "orange", "pineapple"];
// const substring = "apple";

// function countStrings(array, substring) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].includes(substring)) {
//       count++;
//     }
//   }
//   return count;
// }

// const result = countStrings(strings, substring);
// console.log(`Number of strings containing "${substring}": ${result}`);

/*-------------------------------------------------------------------------*/

/* 12.Implement a function that removes all occurrences of a specific element from an array.
Sample Input: ([1, 2, 3, 4, 2, 5], 2)
Sample Output: [1, 3, 4, 5]
*/

// const input = [1, 2, 3, 4, 2, 5];
// const elementToRemove = 2;

// function removeElement(input, elementToRemove) {
//   return input.filter((element) => element !== elementToRemove);
// }

// const result = removeElement(input, elementToRemove);
// console.log(
//   "Array after removing all occurrences of",
//   elementToRemove,
//   ":",
//   result
// );

/*-------------------------------------------------------------------------*/

/* 13.Create a function that finds the average of all the numbers in an array.
Sample Input: [10, 20, 30, 40, 50]
Sample Output: 30
*/

// let inputs = [10, 20, 30, 40, 50];
// let InputLength = inputs.length;
// let result = inputs.reduce((a, b) => a + b, 0);
// console.log(result / InputLength);

/*-------------------------------------------------------------------------*/

/* 14.Write a function that returns the intersection of two arrays (i.e., elements that are present in both arrays).
Sample Input: ([1, 2, 3, 4], [3, 4, 5, 6])
Sample Output: [3, 4]
*/

// const input1 = [1, 2, 3, 4];
// const input2 = [3, 4, 5, 6];

// function intersection(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const intersectionArray = arr2.filter((element) => set1.has(element));
//   return intersectionArray;
// }
// const result = intersection(input1, input2);

// console.log("Intersection of array1 and array2:", result);

/*-------------------------------------------------------------------------*/

/* 15.Implement a function that converts an array of strings into a single concatenated string.
Sample Input: (['Hello', 'World', '!'])
Sample Output: 'Hello World !'
*/

// let inputString = ["Hello", "World", "!"];
// console.log(inputString.join(" "));

/*-------------------------------------------------------------------------*/

/* 16.Create a function that flattens a nested array.
Sample Input: [[1, 2], [3, 4], [5, 6]]
Sample Output: [1, 2, 3, 4, 5, 6]
*/
// let nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// function flattenArray(arr) {
//   let flattenedArray = [];

//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       flattenedArray = flattenedArray.concat(flattenArray(element));
//     } else {
//       flattenedArray.push(element);
//     }
//   });

//   return flattenedArray;
// }

// const flattened = flattenArray(nestedArray);
// console.log("Flattened array:", flattened);

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const data = [].concat(...nestedArray);

console.log(data)


/*-------------------------------------------------------------------------*/

/* 17.Implement a function that partitions an array into two arrays based on a condition.
Sample Input: ([1, 2, 3, 4, 5], num => num % 2 === 0)
Sample Output: [[2, 4], [1, 3, 5]]
*/

// let numbers = [1, 2, 3, 4, 5];

// let result1 = numbers.filter((numbers) => numbers % 2 == 0);
// let result2 = numbers.filter((numbers) => numbers % 2 !== 0);

// console.log(result1, result2);

/*-------------------------------------------------------------------------*/