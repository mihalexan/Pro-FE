const apiUrl = "https://jsonplaceholder.typicode.com/users/";
let userId = 1;

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const websiteInput = document.getElementById("website");

async function fetchUserData(id) {
  userId += id;
  if (userId < 1) userId = 1;

  try {
    const response = await fetch(apiUrl + userId);
    const userData = await response.json();

    nameInput.value = userData.name;
    emailInput.value = userData.email;
    websiteInput.value = userData.website;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

function editField(fieldId) {
  const field = document.getElementById(fieldId);
  field.removeAttribute("disabled");
  field.focus();
}
