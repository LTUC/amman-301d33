// array.sort( [compareFunction] ) sorts an array in place -- mutating the array.
//There is no return value.

<!-- so we don't have to worry about the sorting algorithm that the array.sort will use -->

https://www.toptal.com/developers/sorting-algorithms

// The compareFunction is a function that is used by sort to evaluate sibling values in turn, and sort in the appropriate order.

<!-- when i google this question  -->
<!-- can i know the algorithm that sort use in javascript -->

<!-- JavaScript by default uses insertion sort for the sort() method. ... When dealing with large data sets, one should consider other sorting algorithms such as merge sort. Generally, a divide and conquer based sorting algorithm is faster than a recursion based sorting algorithm. -->

<!-- ascending -->

If compareFunction(a, b) is less than 0(False), sort a to an index lower than b, i.e. a comes first. '-1'
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other. '0'
If compareFunction(a, b) is greater than 0 (TRUE), sort b to an index lower than a, i.e. b comes first. '1'

```js
let numbers = [1, 5, 3, 9, 11, 100, 87, 44, 5, 23, 67];
// numbers.sort( (a,b) who will pick the a,b the sorting algorithm
numbers.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
  //talk about this >>>>> return a-b;
});
console.log(numbers);

// http://sticksandstones.kstrom.com/appen.html
const people = [
  { name: "Jim", role: "Support" },
  { name: "Hadi", role: "DevEloper" },
  { name: "Fred", role: "Developer" },
  { name: "Gina", role: "Manager" },
];
//what if we have 2 F names it will do the second letter check
const people = [
  { name: "Jim", role: "Support" },
  { name: "Fadi", role: "DevEloper" },
  { name: "Fred", role: "Developer" },
  { name: "Gina", role: "Manager" },
];
people.sort((a, b) => {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1; //you can use any - value like -3
  } else if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
  else return 0;
});
//we are using toUpperCase because ascii code will cause a problem
const people = [
  { name: "Aim", role: "Support" },
  { name: "aadi", role: "DevEloper" },
  { name: "Fred", role: "Developer" },
  { name: "Gina", role: "Manager" },
];
people.sort((a, b) => {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1; //you can use any - value like -3
  } else if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
  else return 0;
});
console.log(people);
```
