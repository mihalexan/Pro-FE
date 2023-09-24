document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login-btn");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");

  loginButton.addEventListener("click", async () => {
    const username = usernameInput.value;
    const email = emailInput.value;

    if (username && email) {
      const url = `https://jsonplaceholder.typicode.com/users?username=${username}&email=${email}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) {
          errorMessage.textContent = "Такого пользователя не существует.";
        } else {
          // Пользователь успешно авторизован
          const user = data[0];
          errorMessage.textContent = "";

          // Переход на следующую страницу
          window.location.href = "search.html";
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      errorMessage.textContent = "Пожалуйста, заполните все поля.";
    }
  });
});
