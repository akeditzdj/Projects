const API_URL = "http://localhost:4000/users";
let editUserId = null;

// Fetch and display users in a table format
function getUsers() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const userList = document.getElementById("userList");
      userList.innerHTML = ""; // Clear the current list
      data.forEach((user, index) => {
        const userRow = document.createElement("tr");
        userRow.innerHTML = `
           <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.age}</td>
          <td>${user.gender}</td>
          <td>${user.city}</td>
          <td>
            <button class="btn btn-edit" onclick="editUser(${
              user.id
            })">Edit</button>
            <button class="btn btn-delete" onclick="deleteUser(${
              user.id
            })">Delete</button>
          </td>
        `;
        userList.appendChild(userRow);
      });
    })
    .catch((error) => console.error("Error:", error));
}

// Open the modal for adding or editing a user
function openModal() {
  document.getElementById("userModal").style.display = "flex";
  document.getElementById("modalTitle").textContent = editUserId
    ? "Edit User"
    : "Add User";
}

// Close the modal
function closeModal() {
  document.getElementById("userModal").style.display = "none";
  resetForm();
}

// Reset the form
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("city").value = "";
  editUserId = null;
}

// Save the user (Add or Update)
function saveUser() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const city = document.getElementById("city").value;

  const user = { name, age, gender, city };

  if (editUserId) {
    // Update user (PATCH)
    fetch(`${API_URL}/${editUserId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(() => {
        getUsers(); // Refresh the user list
        closeModal(); // Close the modal
      })
      .catch((error) => console.error("Error:", error));
  } else {
    // Add new user (POST)
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(() => {
        getUsers(); // Refresh the user list
        closeModal(); // Close the modal
      })
      .catch((error) => console.error("Error:", error));
  }
}

// Edit a user
function editUser(userId) {
  fetch(`${API_URL}/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      document.getElementById("name").value = user.name;
      document.getElementById("age").value = user.age;
      document.getElementById("gender").value = user.gender;
      document.getElementById("city").value = user.city;

      editUserId = userId;
      openModal();
    })
    .catch((error) => console.error("Error:", error));
}

// Delete a user
function deleteUser(userId) {
  fetch(`${API_URL}/${userId}`, {
    method: "DELETE",
  })
    .then(() => {
      getUsers(); // Refresh the user list
    })
    .catch((error) => console.error("Error:", error));
}

// Initial fetch of users
getUsers();
