/*

let a = 5;

switch (a) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Invalid Selection");
    break;
}

let letters = "x".toLowerCase();

switch (letters) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(letters, " is a Vowel");
    break;
  default:
    console.log(letters, " is not a Vowel");
    break;
}


*/

const dobElement = document.getElementById("dob");
const pElement = document.getElementsByTagName("p");

dobElement.addEventListener("change", function () {
  const dob = new Date(this.value);

  const age = new Date().getFullYear() - dob.getFullYear();
  pElement[0].innerHTML = "Your age is " + age;
});
