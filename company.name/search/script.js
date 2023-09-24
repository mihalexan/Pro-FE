document.addEventListener("DOMContentLoaded", function () {
  const companyNameInput = document.getElementById("companyNameInput");
  const searchButton = document.getElementById("searchButton");
  const resultDiv = document.getElementById("result");

  searchButton.addEventListener("click", function () {
    const companyName = companyNameInput.value.trim();
    if (companyName === "") {
      resultDiv.textContent = "Invalid data";
      return;
    }

    // Отправка GET-запроса к API
    fetch(
      `https://jsonplaceholder.typicode.com/users?company.name=${encodeURIComponent(
        companyName
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          resultDiv.textContent = "Invalid data";
        } else {
          // Отобразить название компании
          const company = data[0].company.name;
          resultDiv.innerHTML = `<div>Название компании: ${company}</div>`;
        }
      })
      .catch((error) => {
        console.error("Ошибка при выполнении запроса:", error);
        resultDiv.textContent = "Произошла ошибка при выполнении запроса";
      });
  });
});
