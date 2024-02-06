

function reverseNumber(){
    let number = document.getElementById("rev")
    let outputNumber = document.getElementById("revOutput")
     
    const convertNumber = Number(number.value)

    let revNumber = convertNumber

    if (revNumber == 0) {
        error1.innerHTML = "Number not be a empty";
        return;
      }
    
      if (isNaN(revNumber)) {
        error1.innerHTML = "Please fill Numeric Data Only";
        number.value = "";
        number.focus();
        return;
      }
    
      if (number.value.length !== 5) {
        error1.innerHTML = "Plaese enter 5 digits number";
        outputNumber.innerHTML = "";
        return;
      }
    
      error1.innerHTML = "";

    let d5 = revNumber % 10
    revNumber = Math.floor(revNumber/10)
    let d4 = revNumber % 10
    revNumber = Math.floor(revNumber/10)
    let d3 = revNumber % 10
    revNumber = Math.floor(revNumber/10)
    let d2 = revNumber % 10
    revNumber = Math.floor(revNumber/10)
    let d1 = revNumber % 10
     
    reverse=d5*10000 + d4*1000 + d3*100 + d2*10 + d1
    
    outputNumber.innerHTML ="Result = "+  reverse
}

const button8 = document.getElementById("btn8")
button8.addEventListener("click" , reverseNumber)