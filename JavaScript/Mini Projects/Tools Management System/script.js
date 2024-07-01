let tools = [
  {
    id: 1,
    date: today,
    toolsName: "Impact Wrench",
    personName: "Ajith",
    time: Date.now(),
  },
  {
    id: 2,
    date: today,
    toolsName: "I-pad",
    personName: "Bala",
    time: Date.now(),
  },
];


loadData();

console.log(tools);

function loadData() {
  let output = "";
  tools.forEach((tool, index) => {
    output += `<tr>
    <td>${index + 1}</td>
    <td>${tool.today}</td>
    <td>${tool.toolsName}</td>
    <td>${tool.personName}</td>
    <td>${tool.time}</td>
    </tr>
    `;
  });

  document.getElementById("tbody").innerHTML = output;
}



// get current date

// function currentDate() {
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, "0");
//     var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
//     var yyyy = today.getFullYear();

//     today = dd + "/" + mm + "/" + yyyy;

// }
// currentDate();

  var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy;

/*

let scores = {
  abel: 45.6,
  brian: 34.6,
  caroline: 39.8,
  david: 24.5,
};

Object.keys(scores).map((name) => (scores[name] += 5));

console.log(scores);


{ abel: 50.6, brian: 39.6, caroline: 44.8, david: 29.5 }
*/