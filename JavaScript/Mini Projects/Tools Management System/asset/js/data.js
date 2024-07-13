
// Employee Name Array

let employeeName = [
  "Abdul Rahman",
  "Ajithkumar",
  "Arul",
  "Arun",
  "Aung Myat Thu",
  "B.Vinod",
  "Bala",
  "Busa Thata Rao",
  "Chandan",
  "Das Sapan",
  "Guru",
  "Htet Lwin",
  "Karan Kumar",
  "Karuppaiyan",
  "Kyaw Myo Thet",
  "Kyaw Sein Lin",
  "Logvel",
  "Lokeshkumar",
  "M.Prasad",
  "Manikandan",
  "Min Aung",
  "Murali",
  "Naveen",
  "Ng Hock Choon",
  "Pyin Nyar",
  "Renjumon",
  "Robert",
  "S.Varaprasad",
  "S.Vinoth",
  "San Min Zaw",
  "Saravanan",
  "Sarker Ashim",
  "Selvakumar",
  "Silambarasan",
  "Sivakumar",
  "Subba Reddy",
  "Tay Zar Linn",
  "Than Min Oo",
  "Thu Ya Soe",
  "Velmurugan",
  "Vignesh",
  "Win Min Then",
  "Win Swe",
  "Win Zaw Oo",
];
employeeName.forEach(function (item) {
    let name = document.createElement("option");
    name.text = item;
    name.value = item;
    personName.appendChild(name);
});


// Tools Name Array

let equipName = ["i-pad", "Impact Wrench", "Torque Wrench"];

equipName.forEach(function (item) {
  let tool = document.createElement("option");
  tool.text = item;
  tool.value = item;
  toolsName.appendChild(tool);
});
