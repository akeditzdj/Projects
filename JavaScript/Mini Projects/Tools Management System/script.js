let tools = [
  {
    id: 1,
    date: Date.now(),
    toolsName: "Impact Wrench",
    personName: "Ajith",
    time: Date.now(),
  },
  {
    id: 2,
    date: Date.now(),
    toolsName: "I-pad",
    personName: "Bala",
    time: Date.now(),
  },
];



function loadData() {
  let output = "";
  tools.forEach((tool, index) => {
    output += `<tr>
    <td>${index + 1}</td>
    <td>${tool.date}</td>
    <td>${tool.toolsName}</td>
    <td>${tool.personName}</td>
    <td>${tool.time}</td>
    </tr>
    `;
  });

  document.getElementById("tbody").innerHTML = output;
}

loadData()
