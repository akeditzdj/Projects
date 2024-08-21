let students = [];
// @ts-ignore
const btnAdd = document.getElementById("btnAdd");
const btnUpdate = document.getElementById("btnUpdate");
// @ts-ignore
const btnClear = document.getElementById("btnClear");
const nameElement = document.getElementById("name");
const maleElement = document.getElementById("male");
const rollnoElement = document.getElementById("rollno");
const englishElement = document.getElementById("english");
const mathsElement = document.getElementById("maths");
const scienceElement = document.getElementById("science");
const socialElement = document.getElementById("social");
const tamilElement = document.getElementById("tamil");
const midElement = document.getElementById("mid");
const mnameElement = document.getElementById("mname");
const mmaleElement = document.getElementById("mmale");
const mfemaleElement = document.getElementById("mfemale");
const mrollnoElement = document.getElementById("mrollno");
const menglishElement = document.getElementById("menglish");
const mmathsElement = document.getElementById("mmaths");
const mscienceElement = document.getElementById("mscience");
const msocialElement = document.getElementById("msocial");
const mtamilElement = document.getElementById("mtamil");
const searchTxtElement = document.getElementById("searchTxt");
const tbody = document.querySelector("#mainBody");
function total(student) {
  return (student =
    student.english +
    student.maths +
    student.science +
    student.social +
    student.tamil);
}
function calculateAcadamic(student) {
  const data = {};
  data.total = total(student);
  data.average = data.total / 5;
  data.result =
    student.english >= 35 &&
    student.maths >= 35 &&
    student.science >= 35 &&
    student.social >= 35 &&
    student.tamil >= 35
      ? "Pass"
      : "Fail";
  if (data.result == "Pass") {
    if (data.average >= 90 && data.average <= 100) {
      data.grade = "A Grade";
    } else if (data.average >= 80 && data.average <= 90) {
      data.grade = "B Grade";
    } else if (data.average >= 70 && data.average <= 79) {
      data.grade = "C Grade";
    } else {
      data.grade = "D Grade";
    }
  } else {
    data.grade = "-";
  }
  return data;
}
function loadStudentData(initial = false) {
  // @ts-ignore
  tbody.innerHTML = "";
  students = students.map((student, index) => {
    const data = calculateAcadamic(student);
    // @ts-ignore
    tbody.innerHTML += `<tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.gender}</td>
        <td>${student.rollno}</td>
        <td class="${student.english < 35 ? "fail" : ""}">${
      student.english
    }</td>
        <td class="${student.maths < 35 ? "fail" : ""}">${student.maths}</td>
        <td class="${student.science < 35 ? "fail" : ""}">${
      student.science
    }</td>
        <td class="${student.social < 35 ? "fail" : ""}">${student.social}</td>
        <td class="${student.tamil < 35 ? "fail" : ""}">${student.tamil}</td>
        <td>${data.total}</td>
        <td>${data.average.toFixed(2)}%</td>
        <td>${data.result}</td>
        <td>${data.grade}</td>
         <td><button data-id='${
           student.id
         }' class="btn btn-primary btnEdit btn-sm">Edit</button></td>
         <td><button  data-id="${
           student.id
         }" class="btn btn-danger btnDelete btn-sm" >Delete</button></td>
        </tr>`;
    return {
      ...student,
      total: data.total,
      average: data.average,
      result: data.result,
      grade: data.grade,
    };
  });
  const btnEdit = document.querySelectorAll(".btnEdit");
  btnEdit.forEach((btn) => {
    btn.addEventListener("click", editStudent);
  });
  const btnDelete = document.querySelectorAll(".btnDelete");
  btnDelete.forEach((btn) => {
    btn.addEventListener("click", deleteStudent);
  });
  if (initial == false) saveStudentsLocalStorage();
}
const myModalEl = document.getElementById("myModal");
// @ts-ignore
const myModal = new bootstrap.Modal(myModalEl, {});
function editStudent(e) {
  const id = e.target.dataset.id;
  const student = students.filter((student) => student.id == id)[0];
  // @ts-ignore
  mnameElement.value = student.name.trim();
  student.gender == "Male"
    // @ts-ignore
    ? (mmaleElement.checked = true)
    // @ts-ignore
    : (mfemaleElement.checked = true);
  // @ts-ignore
  mrollnoElement.value = student.rollno.trim();
  // @ts-ignore
  menglishElement.value = student.english;
  // @ts-ignore
  mmathsElement.value = student.maths;
  // @ts-ignore
  mscienceElement.value = student.science;
  // @ts-ignore
  msocialElement.value = student.social;
  // @ts-ignore
  mtamilElement.value = student.tamil;
  // @ts-ignore
  midElement.value = id;
  myModal.show();
}
function deleteStudent(e) {
  const id = e.target.dataset.id;
  if (confirm("Are you sure to delete?")) {
    students = students.filter((student) => student.id != id);
    loadStudentData();
    top3Students();
    genderwise();
    subjectwise();
  }
}
// Modal Update Form - Validate //
function setModalError(element, message) {
  const formGroupModal = element.parentElement;
  const errorElementModal = formGroupModal.querySelector(".modal-error");
  errorElementModal.innerText = message;
  formGroupModal.classList.add("modal-error");
  formGroupModal.classList.remove("modal-success");
}
function setModalSuccess(element) {
  const formGroupModal = element.parentElement;
  const errorElementModal = formGroupModal.querySelector(".modal-error");
  errorElementModal.innerText = "";
  formGroupModal.classList.add("modal-success");
  formGroupModal.classList.remove("modal-error");
}
// @ts-ignore
btnUpdate.addEventListener("click", function () {
  // @ts-ignore
  const name = mnameElement.value;
  // @ts-ignore
  const gender = mmaleElement.checked ? "Male" : "Female";
  // @ts-ignore
  const rollno = mrollnoElement.value;
  // @ts-ignore
  const english = Number(menglishElement.value);
  // @ts-ignore
  const maths = Number(mmathsElement.value);
  // @ts-ignore
  const science = Number(mscienceElement.value);
  // @ts-ignore
  const social = Number(msocialElement.value);
  // @ts-ignore
  const tamil = Number(mtamilElement.value);
  // @ts-ignore
  const id = midElement.value;
  if (name == "") {
    setModalError(mnameElement, "Name is required");
    // mnameElement.value = "";
    // @ts-ignore
    mnameElement.focus();
    return;
  } else {
    setModalSuccess(mnameElement);
  }
  if (rollno == 0) {
    setModalError(mrollnoElement, "Roll No is required");
    // mrollnoElement.value = "";
    // @ts-ignore
    mrollnoElement.focus();
    return;
  } else {
    // @ts-ignore
    if (mrollnoElement.value.length != 4) {
      setModalError(mrollnoElement, "Please enter 4 digits number");
      // mrollnoElement.value = "";
      // @ts-ignore
      mrollnoElement.focus();
      return;
    }
    if (isNaN(rollno)) {
      setModalError(mrollnoElement, "Please input numeric characters only");
      // mrollnoElement.value = "";
      // @ts-ignore
      mrollnoElement.focus();
      return;
    }
    if (rollnoAlreadyExist(rollno)) {
      setModalError(mrollnoElement, "Roll No already preset.");
      return;
    }
    setModalSuccess(mrollnoElement);
  }
  // @ts-ignore
  if (english == "") {
    setModalError(menglishElement, "Mark is required");
    // menglishElement.value = "";
    // @ts-ignore
    menglishElement.focus();
    return;
  } else {
    if (
      // @ts-ignore
      menglishElement.value.length != 2 &&
      // @ts-ignore
      menglishElement.value.length != 1 &&
      // @ts-ignore
      menglishElement.value != 100
    ) {
      setModalError(menglishElement, "Please enter valid marks");
      // menglishElement.value = "";
      // @ts-ignore
      menglishElement.focus();
      return;
    }
    if (isNaN(english)) {
      setModalError(menglishElement, "Please input numeric characters only");
      // menglishElement.value = "";
      // @ts-ignore
      menglishElement.focus();
      return;
    }
    setModalSuccess(menglishElement);
  }
  // @ts-ignore
  if (maths == "") {
    setModalError(mmathsElement, "Mark is required");
    // mmathsElement.value = "";
    // @ts-ignore
    mmathsElement.focus();
    return;
  } else {
    if (
      // @ts-ignore
      mmathsElement.value.length != 2 &&
      // @ts-ignore
      mmathsElement.value.length != 1 &&
      // @ts-ignore
      mmathsElement.value != 100
    ) {
      setModalError(mmathsElement, "Please enter valid marks");
      // mmathsElement.value = "";
      // @ts-ignore
      mmathsElement.focus();
      return;
    }
    if (isNaN(maths)) {
      setModalError(mmathsElement, "Please input numeric characters only");
      // mmathsElement.value = "";
      // @ts-ignore
      mmathsElement.focus();
      return;
    }
    setModalSuccess(mmathsElement);
  }
  // @ts-ignore
  if (science == "") {
    setModalError(mscienceElement, "Mark is required");
    // mscienceElement.value = "";
    // @ts-ignore
    mscienceElement.focus();
    return;
  } else {
    if (
      // @ts-ignore
      mscienceElement.value.length != 2 &&
      // @ts-ignore
      mscienceElement.value.length != 1 &&
      // @ts-ignore
      mscienceElement.value != 100
    ) {
      setModalError(mscienceElement, "Please enter valid marks");
      // mscienceElement.value = "";
      // @ts-ignore
      mscienceElement.focus();
      return;
    }
    if (isNaN(science)) {
      setModalError(mscienceElement, "Please input numeric characters only");
      // mscienceElement.value = "";
      // @ts-ignore
      mscienceElement.focus();
      return;
    }
    setModalSuccess(mscienceElement);
  }
  // @ts-ignore
  if (social == "") {
    setModalError(msocialElement, "Mark is required");
    // msocialElement.value = "";
    // @ts-ignore
    msocialElement.focus();
    return;
  } else {
    if (
      // @ts-ignore
      msocialElement.value.length != 2 &&
      // @ts-ignore
      msocialElement.value.length != 1 &&
      // @ts-ignore
      msocialElement.value != 100
    ) {
      setModalError(msocialElement, "Please enter valid marks");
      // msocialElement.value = "";
      // @ts-ignore
      msocialElement.focus();
      return;
    }
    if (isNaN(social)) {
      setModalError(msocialElement, "Please input numeric characters only");
      // msocialElement.value = "";
      // @ts-ignore
      msocialElement.focus();
      return;
    }
    setModalSuccess(msocialElement);
  }
  // @ts-ignore
  if (tamil == "") {
    setModalError(mtamilElement, "Mark is required");
    // mtamilElement.value = "";
    // @ts-ignore
    mtamilElement.focus();
    return;
  } else {
    if (
      // @ts-ignore
      mtamilElement.value.length != 2 &&
      // @ts-ignore
      mtamilElement.value.length != 1 &&
      // @ts-ignore
      mtamilElement.value != 100
    ) {
      setModalError(mtamilElement, "Please enter valid marks");
      // mtamilElement.value = "";
      // @ts-ignore
      mtamilElement.focus();
      return;
    }
    if (isNaN(tamil)) {
      setModalError(mtamilElement, "Please input numeric characters only");
      // mtamilElement.value = "";
      // @ts-ignore
      mtamilElement.focus();
      return;
    }
    setModalSuccess(mtamilElement);
  }
  const index = students.findIndex((student) => student.id == id);
  students[index].name = name;
  students[index].gender = gender;
  students[index].rollno = rollno;
  students[index].english = english;
  students[index].maths = maths;
  students[index].science = science;
  students[index].social = social;
  students[index].tamil = tamil;
  loadStudentData();
  top3Students();
  genderwise();
  subjectwise();
  myModal.hide();
  // @ts-ignore
  mnameElement.value = "";
  // @ts-ignore
  mmaleElement.checked ? "Male" : "Female";
  // @ts-ignore
  mrollnoElement.value = "";
  // @ts-ignore
  menglishElement.value = "";
  // @ts-ignore
  mmathsElement.value = "";
  // @ts-ignore
  mscienceElement.value = "";
  // @ts-ignore
  msocialElement.value = "";
  // @ts-ignore
  mtamilElement.value = "";
});
function top3Students() {
  const rankBody = document.getElementById("rankBody");
  // @ts-ignore
  rankBody.innerHTML = "";
  let passedStudents = students.filter((student) => {
    return student.result == "Pass";
  });
  passedStudents.sort((a, b) => {
    return b.average - a.average;
  });
  // @ts-ignore
  top3 = passedStudents.slice(0, 3);
  let currentrank = 1;
  let currentAverage = null;
  // @ts-ignore
  top3.forEach((student, index) => {
    if (student.average != currentAverage) {
      student.rank = currentrank;
      currentrank++;
    } else {
      student.rank = currentrank - 1;
    }
    currentAverage = student.average;
  });
  // @ts-ignore
  top3.forEach((student, index) => {
    // @ts-ignore
    rankBody.innerHTML += `<tr>
  <td>${student.rank}</td>
  <td>${student.name}</td>
  <td>${student.average.toFixed(2)}%</td>
  </tr>`;
  });
}
function genderwise() {
  const genBody = document.getElementById("genBody");
  // @ts-ignore
  genBody.innerHTML = "";
  let obj = [
    { gender: "Male", strength: 0, pass: 0, percentage: 0 },
    { gender: "Female", strength: 0, pass: 0, percentage: 0 },
  ];
  // @ts-ignore
  obj = obj.map((o, index) => {
    o.strength = students.filter(
      (student) => student.gender == o.gender
    ).length;
    o.pass = students.filter(
      (student) => student.gender == o.gender && student.result == "Pass"
    ).length;
    o.percentage = (o.pass / o.strength) * 100;
    // @ts-ignore
    genBody.innerHTML += `<tr>
    <td>${o.gender}</td>
    <td>${o.strength}</td>
    <td>${o.pass}</td>
    <td>${o.percentage.toFixed(2)}%</td>
    </tr>`;
    return 0;
  });
}
function getMaxMark(subjectKey) {
  const marks = [];
  students.forEach((student) => {
    marks.push(student[subjectKey]);
  });
  return Math.max(...marks);
}
function getNamesByMark(mark, subjectKey) {
  const names = [];
  students.forEach((student) => {
    if (student[subjectKey] == mark) names.push(student.name);
  });
  return names;
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function passPercentSubject(subjectKey) {
  const total = students.length;
  const pass = students.filter((student) => student[subjectKey] >= 35).length;
  return ((pass / total) * 100).toFixed(2);
}
function subjectwise() {
  const subjBody = document.getElementById("subjBody");
  // @ts-ignore
  subjBody.innerHTML = "";
  let obj = [
    { subject: "english", name: [], mark: 0, percentage: 0 },
    { subject: "maths", name: [], mark: 0, percentage: 0 },
    { subject: "science", name: [], mark: 0, percentage: 0 },
    { subject: "social", name: [], mark: 0, percentage: 0 },
    { subject: "tamil", name: [], mark: 0, percentage: 0 },
  ];
  obj = obj.map((o) => {
    o.mark = getMaxMark(o.subject);
    // @ts-ignore
    o.name = getNamesByMark(o.mark, o.subject);
    // @ts-ignore
    o.percentage = passPercentSubject(o.subject);
    // @ts-ignore
    subjBody.innerHTML += `<tr>
    <td>${capitalizeFirstLetter(o.subject)}</td>
    <td>${o.name}</td>
    <td>${o.mark}</td>
    <td>${o.percentage}%</td>
    </tr>`;
    return o;
  });
}
function rollnoAlreadyExist(rollno, id = 0) {
  if (id == 0) {
    let result = students.some((student) => student.rollno == rollno);
    return result;
  } else {
    let result = students.some(
      (student) => student.rollno == rollno && student.id != id
    );
    return result;
  }
}
// @ts-ignore
btnAdd.addEventListener("click", function () {
  // @ts-ignore
  const name = nameElement.value.trim();
  // @ts-ignore
  const gender = maleElement.checked ? "Male" : "Female";
  // @ts-ignore
  const rollno = rollnoElement.value.trim();
  // @ts-ignore
  const english = Number(englishElement.value.trim());
  // @ts-ignore
  const maths = Number(mathsElement.value.trim());
  // @ts-ignore
  const science = Number(scienceElement.value.trim());
  // @ts-ignore
  const social = Number(socialElement.value.trim());
  // @ts-ignore
  const tamil = Number(tamilElement.value.trim());
  if (name === "") {
    setError(nameElement, "Name is required");
    // nameElement.value = "";
    // @ts-ignore
    nameElement.focus();
    return;
  } else {
    setSuccess(nameElement);
  }
  if (rollno == 0) {
    setError(rollnoElement, "Roll No is required");
    // rollnoElement.value = "";
    // @ts-ignore
    rollnoElement.focus();
    return;
  } else {
    // @ts-ignore
    if (rollnoElement.value.length != 4) {
      setError(rollnoElement, "Please enter 4 digits number");
      // rollnoElement.value = "";
      // @ts-ignore
      rollnoElement.focus();
      return;
    }
    if (isNaN(rollno)) {
      setError(rollnoElement, "Please input numeric characters only");
      // rollnoElement.value = "";
      // @ts-ignore
      rollnoElement.focus();
      return;
    }
    if (rollnoAlreadyExist(rollno)) {
      setError(rollnoElement, "Roll No already preset.");
      return;
    }
    setSuccess(rollnoElement);
  }
  // @ts-ignore
  if (english == "") {
    setError(englishElement, "Mark is required");
    // englishElement.value = "";
    // @ts-ignore
    englishElement.focus();
    return;
  } else {
    if (
      // @ts-ignore
      englishElement.value.length != 2 &&
      // @ts-ignore
      englishElement.value.length != 1 &&
      // @ts-ignore
      englishElement.value != 100
    ) {
      setError(englishElement, "Please enter valid marks");
      // englishElement.value = "";
      // @ts-ignore
      englishElement.focus();
      return;
    }
    if (isNaN(english)) {
      setError(englishElement, "Please input numeric characters only");
      // englishElement.value = "";
      // @ts-ignore
      englishElement.focus();
      return;
    }
    setSuccess(englishElement);
  }
  // @ts-ignore
  if (maths == "") {
    setError(mathsElement, "Mark is required");
    // mathsElement.value = "";
    // @ts-ignore
    mathsElement.focus();
    return;
  } else {
    if (
      // @ts-ignore
      mathsElement.value.length != 2 &&
      // @ts-ignore
      mathsElement.value.length != 1 &&
      // @ts-ignore
      mathsElement.value != 100
    ) {
      setError(mathsElement, "Please enter valid marks");
      // mathsElement.value = "";
      // @ts-ignore
      mathsElement.focus();
      return;
    }
    if (isNaN(maths)) {
      setError(mathsElement, "Please input numeric characters only");
      // mathsElement.value = "";
      // @ts-ignore
      mathsElement.focus();
      return;
    }
    setSuccess(mathsElement);
  }
  // @ts-ignore
  if (science == "") {
    setError(scienceElement, "Mark is required");
    // scienceElement.value = "";
    // @ts-ignore
    scienceElement.focus();
    return;
  } else {
    if (
      // @ts-ignore
      scienceElement.value.length != 2 &&
      // @ts-ignore
      scienceElement.value.length != 1 &&
      // @ts-ignore
      scienceElement.value != 100
    ) {
      setError(scienceElement, "Please enter valid marks");
      // scienceElement.value = "";
      // @ts-ignore
      scienceElement.focus();
      return;
    }
    if (isNaN(science)) {
      setError(scienceElement, "Please input numeric characters only");
      // scienceElement.value = "";
      // @ts-ignore
      scienceElement.focus();
      return;
    }
    setSuccess(scienceElement);
  }
  // @ts-ignore
  if (social == "") {
    setError(socialElement, "Mark is required");
    // socialElement.value = "";
    // @ts-ignore
    socialElement.focus();
    return;
  } else {
    if (
      // @ts-ignore
      socialElement.value.length != 2 &&
      // @ts-ignore
      socialElement.value.length != 1 &&
      // @ts-ignore
      socialElement.value != 100
    ) {
      setError(socialElement, "Please enter valid marks");
      // socialElement.value = "";
      // @ts-ignore
      socialElement.focus();
      return;
    }
    if (isNaN(social)) {
      setError(socialElement, "Please input numeric characters only");
      // socialElement.value = "";
      // @ts-ignore
      socialElement.focus();
      return;
    }
    setSuccess(socialElement);
  }
  // @ts-ignore
  if (tamil == "") {
    setError(tamilElement, "Mark is required");
    // tamilElement.value = "";
    // @ts-ignore
    tamilElement.focus();
    return;
  } else {
    if (
      // @ts-ignore
      tamilElement.value.length != 2 &&
      // @ts-ignore
      tamilElement.value.length != 1 &&
      // @ts-ignore
      tamilElement.value != 100
    ) {
      setError(tamilElement, "Please enter valid marks");
      // tamilElement.value = "";
      // @ts-ignore
      tamilElement.focus();
      return;
    }
    if (isNaN(tamil)) {
      setError(tamilElement, "Please input numeric characters only");
      // tamilElement.value = "";
      // @ts-ignore
      tamilElement.focus();
      return;
    }
    setSuccess(tamilElement);
  }
  students.push({
    id: Date.now(),
    name,
    gender,
    rollno,
    english,
    maths,
    science,
    social,
    tamil,
  });
  clearAll();
  loadStudentData();
  top3Students();
  genderwise();
  subjectwise();
});
// Registration Form Validate //
function setError(element, message) {
  const formGroup = element.parentElement;
  const errorElement = formGroup.querySelector(".error");
  errorElement.innerText = message;
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
}
function setSuccess(element) {
  const formGroup = element.parentElement;
  const errorElement = formGroup.querySelector(".error");
  errorElement.innerText = "";
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
}
function clearAll() {
  // @ts-ignore
  nameElement.value = "";
  // @ts-ignore
  maleElement.checked = true;
  // @ts-ignore
  rollnoElement.value = "";
  // @ts-ignore
  englishElement.value = "";
  // @ts-ignore
  mathsElement.value = "";
  // @ts-ignore
  scienceElement.value = "";
  // @ts-ignore
  socialElement.value = "";
  // @ts-ignore
  tamilElement.value = "";
}
// @ts-ignore
btnClear.addEventListener("click", clearAll);
// @ts-ignore
searchTxtElement.addEventListener("input", function () {
  // @ts-ignore
  const query = this.value.toLowerCase();
  const filteredData = students.filter(
    (student) =>
      student.name.toLowerCase().includes(query) ||
      student.rollno.toLowerCase().includes(query)
  );
  // @ts-ignore
  mainBody.innerHTML = "";
  filteredData.forEach((student, index) => {
    // @ts-ignore
    mainBody.innerHTML += `<tr>
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.gender}</td>
      <td>${student.rollno}</td>
      <td class="${student.english < 35 ? "fail" : ""}">${student.english}</td>
      <td class="${student.maths < 35 ? "fail" : ""}">${student.maths}</td>
      <td class="${student.science < 35 ? "fail" : ""}">${student.science}</td>
      <td class="${student.social < 35 ? "fail" : ""}">${student.social}</td>
      <td class="${student.tamil < 35 ? "fail" : ""}">${student.tamil}</td>
      <td>${student.total}</td>
      <td>${student.average}</td>
      <td>${student.result}</td>
      <td>${student.grade}</td>
      <td><button data-id='${
        student.id
      }' class='btn btn-primary btn-sm btnEdit'>Edit</button></td>
      <td><button data-id='${
        student.id
      }' class='btn btn-danger btn-sm btnDelete'>Delete</button></td>
    <tr>`;
  });
});
function saveStudentsLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
  console.log("Data Saved to localStorage");
}
function getStudentsDetail() {
  if (localStorage.getItem("students")) {
    // @ts-ignore
    students = JSON.parse(localStorage.getItem("students"));
  }
}
document.addEventListener("DOMContentLoaded", function () {
  getStudentsDetail();
  loadStudentData(true);
  top3Students();
  genderwise();
  subjectwise();
  clearAll();
});
function refreshPage() {
  window.location.reload();
}
