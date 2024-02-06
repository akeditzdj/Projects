function addTotalDegits(){
    let number = document.getElementById("addfive")
    let outputNumber = document.getElementById("sumfive")
     
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
     
    result=d5 + d4 + d3 + d2 + d1
    
    outputNumber.innerHTML ="Sum of five digits = "+  result
}

const button7 = document.getElementById("btn7")
button7.addEventListener("click" , addTotalDegits)