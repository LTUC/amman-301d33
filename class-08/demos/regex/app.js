// Regular Expression REGEX

//we use it to:
// 1-VALIDATE strings against certain rules
// 2-to FIND substring within a string
// 3-to REPLACE part of the string

//typically speaking, we use REGEX to match patterns with strings

// let str = 'The rain in spain falls Mainly in the plain';

// VALIDATE : test() -> return boolean
// Find S letter in a string
// let regex1 =/S/gi;
// let res1 = regex1.test(str);
// console.log(res1);

// let regex1 = /[0-9]/g;
// let regex1 = /\d/g;
// let res1 = regex1.test(str);
// console.log(res1);



//FIND : match() -> return array
// let regex2 = /in/g;
// let newArr = str.match(regex2);
// console.log(newArr);
// console.log(str.match(regex2).length);


// find how many words end with 'in'
// let regex2 = /(in)\b/g;
// console.log((str.match(regex2)).length);

let str = 'The rain in Spain falls Mainly in the plAin';

// to retrieve the ends of the words
// let wordEnding = /\W/g;
// console.log(str.match(wordEnding));


//REPLACE : replace() -> return string
// let newStr = str.replace(wordEnding,'-');
// let newStr = str.replace(wordEnding,'\n');
// console.log(newStr);
// console.log(str);

// we want to match all the words that begin with a capital letter
//  let reg =/\b[A-Z]/g;
// let reg =/\b[A-Z](\w)*/g;
// let reg =/[A-Z](\w)*/g;
// console.log(str.match(reg));



let names = ['Razan Quran', 'Ali Ahmad', 'Zaid Quran', 'Mohammad Ccc', 'Bana Quran'];

// return a new array contains any name (first name) starts with letter (A-C) from the names array
//output: ['Ali Ahmad','Bana Quran']

const patternReg = /^[A-C]/g;
let newArr = [];
names.forEach(item=>{
  if(patternReg.test(item)) {
    newArr.push(item)
  }
})
console.log(newArr)



// choose the strings that ends with Quran word
//output: ['Razan Quran','Zaid Quran','Bana Quran']
const patternReg = /Quran$/g;

