function getArea() {
  let length = document.getElementById("length");
  let breadth = document.getElementById("breadth");

  let areaOutput1 = document.getElementById("area1");
  let periOutput = document.getElementById("perimeter");

  let len = Number(length.value);
  let brth = Number(breadth.value);

  let rectanglearea = len * brth;

  let rectangleperi = 2 * (len + brth);


  areaOutput1.innerHTML = "Rectangle Area = " + rectanglearea;
  periOutput.innerHTML = "Rectangle Perimeter = " + rectangleperi;
}

const button5 = document.getElementById("btn5");
button5.addEventListener("click", getArea);

//-----------Circle Area-----//

function getCircleRadius() {
  let radius = document.getElementById("radius");
  let areaOutput2 = document.getElementById("area2");
  let circumOutput = document.getElementById("circum")
  let circleRadius = Number(radius.value);
  let pi = 3.14;

  let circleArea = pi * circleRadius * circleRadius;
  let circleCircum = Math.floor( 2 * pi * circleRadius)


  areaOutput2.innerHTML = "Circle Area = " + circleArea;
  circumOutput.innerHTML = "Circle Circumference = " + circleCircum

}

const button6 = document.getElementById("btn6");
button6.addEventListener("click", getCircleRadius);
