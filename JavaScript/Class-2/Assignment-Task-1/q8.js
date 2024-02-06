

function reverseNumber(){
    let number = document.getElementById("rev")
    let outputNumber = document.getElementById("revOutput")
     
    const convertNumber = Number(number.value)

    let revNumber = convertNumber

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