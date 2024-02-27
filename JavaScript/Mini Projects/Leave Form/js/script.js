const form = document.querySelector("#form");
const staffId = document.querySelector("#staffId");
const staffName = document.querySelector("#staffName");
const leaveType = document.querySelector("#leaveType");
const startDate = document.querySelector("#startDate");
const endDate = document.querySelector("#endDate");
const reason = document.querySelector("#reason");
const command = document.querySelector("#command");
const checkBoxAccept = document.querySelector("#accept");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    const data = new FormData(e.target);
    // for (const pair of data.entries()) {
    //   console.log(`${pair[0]} : ${pair[1]}`);
    // }
    const leaveData = {};
    for (const pair of data.entries()) {
      leaveData[pair[0]] = pair[1];
    }
    console.log(leaveData);
    form.reset();
  }
});

function validateInputs() {
  const sIdVal = staffId.value.trim();
  const sNameVal = staffName.value.trim();
  const lTVal = leaveType.value;
  const sDVal = startDate.value.trim();
  const eDVal = endDate.value.trim();
  const reVal = reason.value.trim();

  let success = true;

  if (sIdVal === "") {
    success = false;
    setError(staffId, "UserId is required");
  } else {
    setSuccess(staffId);
  }

  if (sNameVal === "") {
    success = false;
    setError(staffName, "Staff Name is required");
  } else {
    setSuccess(staffName);
  }

  if (lTVal === "") {
    success = false;
    setError(leaveType, "Leave type is required");
  } else {
    setSuccess(leaveType);
  }

  if (sDVal === "") {
    success = false;
    setError(startDate, "Start date is required");
  } else {
    setSuccess(startDate);
  }
  if (eDVal === "") {
    success = false;
    setError(endDate, "End date is required");
  } else {
    setSuccess(endDate);
  }
  if (reVal === "") {
    success = false;
    setError(reason, "Reason is required");
  } else {
    setSuccess(reason);
  }

  return success;
}

//element - password, msg- pwd is reqd

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}
