$(document).ready(function () {
  // Load data to table
  function loadData() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let output = "";

    users.forEach((user, index) => {
      output += `
        <tr class="text-center">
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.city}</td>
          <td>${user.dob}</td>
          <td><button class="btn btn-sm btn-primary px-1 py-0 btn-edit" data-id="${
            user.id
          }">Edit</button></td>
          <td><button class="btn btn-sm btn-danger px-1 py-0 btn-delete" data-id="${
            user.id
          }">Delete</button></td>
        </tr>
      `;
    });

    $("tbody").html(output);
  }

  // Add user
  function addUser() {
    const name = $("#name").val();
    const email = $("#email").val();
    const city = $("#city").val();
    const dob = $("#dob").val();

    if (!name || !email || !city || !dob) {
      alert("Please fill in all details.");
      return;
    }

    const user = {
      id: Math.floor(1000 + Math.random() * 9000),
      name,
      email,
      city,
      dob,
    };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    loadData();
  }

  // Edit user
  function editUser(id) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.id === id);

    if (user) {
      $("#name").val(user.name);
      $("#email").val(user.email);
      $("#city").val(user.city);
      $("#dob").val(user.dob);

      $("#btnSave")
        .off("click")
        .click(function () {
          updateUser(id);
        });
    }
  }

  // Update user
  function updateUser(id) {
    const name = $("#name").val();
    const email = $("#email").val();
    const city = $("#city").val();
    const dob = $("#dob").val();

    if (!name || !email || !city || !dob) {
      alert("Please fill in all details.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex((user) => user.id === id);

    if (index > -1) {
      users[index] = { id, name, email, city, dob };
      localStorage.setItem("users", JSON.stringify(users));
      loadData();
      clearForm();
    }
  }

  // Delete user
  function deleteUser(id) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    loadData();
  }

  // Clear form fields
  function clearForm() {
    $("#name").val("");
    $("#email").val("");
    $("#city").val("");
    $("#dob").val("");
  }

  // Add user on save button click
  $("#btnSave").click(addUser);
  $("#btnSave").click(clearForm);

  // Handle edit and delete button clicks
  $("tbody").on("click", ".btn-edit", function () {
    const id = $(this).data("id");
    editUser(id);
  });

  $("tbody").on("click", ".btn-delete", function () {
    const id = $(this).data("id");
    if (confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
    }
  });

  // Initial Load
  loadData();
});
