// let score = "33abc"
// let score = null
let score = undefined


console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof score);
console.log(valueInNumber);



//"33" => 33
//"33abc" => NaN
//true => 1; flase => 0

let isLoggedIn = 54

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=> true ; 0=> false
//""=> false
//"vickss" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// **************************** Operation ***********************


let value = 3
let negValue = -value
console.log(negValue);


let str1 = "hello "
let str2 = "World "

let str3 = str1 + str2
console.log(str3);

console.log("1"+2); //12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); //32

console.log(+true)
console.log(+"");