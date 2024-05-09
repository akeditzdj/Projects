const name = nameElement.value.trim();
const gender = maleElement.checked ? "Male" : "Female";
const rollno = rollnoElement.value.trim();
const english = Number(englishElement.value.trim());
const maths = Number(mathsElement.value.trim());
const science = Number(scienceElement.value.trim());
const social = Number(socialElement.value.trim());
const tamil = Number(tamilElement.value.trim());
const form = document.querySelector("#myForm");
const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateInputs()) {
    const data = new FormData(e.target);
    const studentData = {};
    for (const pair of data.entries()) {
      studentData[pair[0]] = pair[1];
    }
    form.reset();
  }
});

function validateInputs() {
  let success = true;

  if (
    name == "" &&
    gender == "" &&
    rollno == "" &&
    english == "" &&
    maths == "" &&
    science == "" &&
    social == "" &&
    tamil == ""
  ) {
    if (name === "") {
      success = false;
      setError(nameElement, "Name is required");
      nameElement.value = "";
      nameElement.focus();
      return;
    } else {
      setSuccess(nameElement);
    }

    if (rollno == 0) {
      success = false;
      setError(rollnoElement, "Roll No is required");
      rollnoElement.value = "";
      rollnoElement.focus();
      return;
    } else {
      setSuccess(rollnoElement);
    }

    if (rollnoElement.value.length != 4) {
      success = false;
      setError(rollnoElement, "Please enter 4 digits number");
      rollnoElement.value = "";
      rollnoElement.focus();
      return;
    } else {
      setSuccess(rollnoElement);
    }
    if (isNaN(rollno)) {
      success = false;
      setError(rollnoElement, "Please input numeric characters only");
      rollnoElement.value = "";
      rollnoElement.focus();
      return;
    } else {
      setSuccess(rollnoElement);
    }
    if (rollnoAlreadyExist(rollno)) {
      setError(rollnoElement, "Roll No already preset.");
      return;
    } else {
      setSuccess(rollnoElement);
    }
    if (english == "") {
      success = false;
      setError(englishElement, "Mark is required");
      englishElement.value = "";
      englishElement.focus();
      return;
    } else {
      setSuccess(englishElement);
    }

    if (
      englishElement.value.length != 2 &&
      englishElement.value.length != 1 &&
      englishElement.value != 100
    ) {
      success = false;
      setError(englishElement, "Please enter valid marks");
      englishElement.value = "";
      englishElement.focus();
      return;
    } else {
      setSuccess(englishElement);
    }

    if (maths == "") {
      success = false;
      setError(mathsElement, "Mark is required");
      mathsElement.value = "";
      mathsElement.focus();
      return;
    } else {
      setSuccess(mathsElement);
    }
    if (
      mathsElement.value.length != 2 &&
      mathsElement.value.length != 1 &&
      mathsElement.value != 100
    ) {
      success = false;
      setError(mathsElement, "Please enter valid marks");
      mathsElement.value = "";
      mathsElement.focus();
      return;
    } else {
      setSuccess(mathsElement);
    }
    if (science == "") {
      success = false;
      setError(scienceElement, "Mark is required");
      scienceElement.value = "";
      scienceElement.focus();
      return;
    } else {
      setSuccess(scienceElement);
    }
    if (
      scienceElement.value.length != 2 &&
      scienceElement.value.length != 1 &&
      scienceElement.value != 100
    ) {
      success = false;
      setError(scienceElement, "Please enter valid marks");
      scienceElement.value = "";
      scienceElement.focus();
      return;
    } else {
      setSuccess(scienceElement);
    }

    if (social == "") {
      success = false;
      setError(socialElement, "Mark is required");
      socialElement.value = "";
      socialElement.focus();
      return;
    } else {
      setSuccess(socialElement);
    }
    if (
      socialElement.value.length != 2 &&
      socialElement.value.length != 1 &&
      socialElement.value != 100
    ) {
      success = false;
      setError(socialElement, "Please enter valid marks");
      socialElement.value = "";
      socialElement.focus();
      return;
    } else {
      setSuccess(socialElement);
    }

    if (tamil == "") {
      success = false;
      setError(tamilElement, "Mark is required");
      tamilElement.value = "";
      tamilElement.focus();
      return;
    } else {
      setSuccess(tamilElement);
    }
    if (
      tamilElement.value.length != 2 &&
      tamilElement.value.length != 1 &&
      tamilElement.value != 100
    ) {
      success = false;
      setError(tamilElement, "Please enter valid marks");
      tamilElement.value = "";
      tamilElement.focus();
      return;
    } else {
      setSuccess(tamilElement);
    }
  } else {
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
  }

  clearAll();
  loadStudentData();
  top3Students();
  genderwise();
  subjectwise();
  return success;
}
