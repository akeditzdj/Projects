
function addNumber(){
    let inputNumber = document.getElementById("sum")
    let outputNumber = document.getElementById("outputSum")
    let number = Number(inputNumber.value)

    let divNumber = number

    d4= divNumber  % 10
    divNumber = Math.floor(divNumber/10)
    d3= divNumber  % 10
    divNumber = Math.floor(divNumber/10)
    d2= divNumber  % 10
    divNumber = Math.floor(divNumber/10)
    d1= divNumber  % 10
   
     const result = d4 + d1
    
     outputNumber.innerHTML = "Result =" + result

}

const button9 = document.getElementById("btn9")
button9.addEventListener("click", addNumber)