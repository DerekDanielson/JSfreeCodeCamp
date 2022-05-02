//APPENDING VARIABLES TO STRINGS
const anAdjective = "interesting";
let ourStr = "coding is ";
ourStr += anAdjective;
//ourStr now = "coding is interesting"


//FIND LENGTH OF A STRING ******************************
let lastNameLength = 0;
const lastName = "Simpson";
lastNameLength = lastName.length;

console.log(lastNameLength);
//lastNameLength is now 7


//BRACKET NOTATION TO FIND THE FIRST CHARACTER IN A STRING
const firstName = "Homer";
let firstLetter = firstName[0];
//firstLetter is now "H"


//UNDERSTAND STRING IMMUTABILITY
let myStr = "Zhis is a string";
myStr = "This is a string";
//Changes myStr to equal "This is a string"


//BRACKET NOTATION TO FIND THE NTH CHARACTER IN A STRING
const firstName = "Homer";
let randomLetter = firstName[2];
//randomLetter = "m"


//BRACKET NOTATION TO FIND THE LAST CHARACTER IN A STRING
const firstName = "Homer";
let lastLetter = firstName[firstName.length - 1];
//lastLetter = "r"


//BRACKET NOTATION TO FIND THE NTH-TO-THE LAST CHARACTER IN A STRING
const lastName = "Simpson";
let thirdToLast = lastName[lastName.length - 3];
//thirdToLast = "s"


//NEST ONE ARRAY INSIDE ANOTHER ARRAY
const teams = [["Packers", 38], ["Suns", 34]];


//ACCESS ARRAY DATA WITH INDEXES
const numArray = [20, 30, 40 , 50, 60];
let count = numArray[1];
//count = 30


//MODIFY ARRAY DATA WITH INDEXES
const numArray = [10, 20, 30];
numArray[1] = 69;
//numArray is now [10, 69, 30]


//ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES (Array or arrays)
const arr = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [[10, 11, 12], 13, 14]
];

arr[3];         //[[10, 11, 12], 13, 14]
arr[3][0];      //[10, 11, 12]
arr[3][0][1];   //[11]


//MANIPULATE ARRAYS WITH PUSH()
let arr1 = [1, 2, 3];
arr1.push(4);   //arr1 is now [1, 2, 3, 4]

let arr2 = ["Simpson", "J", "Homer"];
arr2.push(["happy", 5]);    //arr2 = ["simpson", "J", "Homer", ["happy", 5]]


//MANIPULATE ARRAYS WITH .pop()
let threeArr = [1, 2, 3];
let oneDown = threeArr.pop();

console.log(threeArr);  //[1, 2]
console.log(oneDown);   //3


//MANIPULATE ARRAYS WITH .shift()
let ourArr = ["Simpson", "J", ["Dog", 3]];
let removedFromOurArr = ourArr.shift();
//removedFromOurArr = "Simpson"
//ourArr = ["J", ["Dog", 3]]


//MANIPULATE ARRAYS WITH .unshift()
let ourArr = ["Simpson", "J", "dog"];
ourArr.unshift("Happy");
//ourArr = ["Happy", "Simpson", "J", "dog"]

























































































































