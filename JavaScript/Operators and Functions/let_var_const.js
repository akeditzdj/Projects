/*
                                            var    let   const
  Variable Declaration & value Assignment    Y      Y      Y
  Re-Assignment                              Y      Y      -
  Re-Declaration                             Y      -      -
  
*/

//Variable Declaration & value Assignment 1995-2015
var a = 10;
console.log(a);

//Re-Assignment
a = 45;
console.log(a);

//Re-Declaration
var a = "Joes";
console.log(a);

//2015 Above let & Const

//Variable Declaration & value Assignment
let b = 10;
console.log(b);
//Re-Assignment
b = 45;
console.log(b);

//Re-Declaration Not Allowed
//let b = "Joes";  //already been declared

//Variable Declaration & value Assignment
const c = 10;
console.log(c);

//Re-Assignment
//c = 45;  //TypeError: Assignment to constant variable.

//Re-Declaration Not Allowed
//const c = "Joes"; //already been declared

{
  var x = 100;
  console.log(x);
  let y = 200;
  console.log(y);
  const z = 300;
  console.log(z);
}

console.log(x);
//console.log(y);//y is not defined
//console.log(z);//y is not defined


// + - * / % 