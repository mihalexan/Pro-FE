document.addEventListener("DOMContentLoaded", () => {
  const todosButton = document.getElementById("load-todos");
  const todosList = document.getElementById("todos-list");

  // Функция для загрузки данных о задачах
  async function loadTodos() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const todosData = await response.json();

      // Отобразить данные о задачах
      todosData.forEach((todo) => {
        const todoElement = document.createElement("div");
        todoElement.innerHTML = `<p>${todo.title}</p>`;
        todosList.appendChild(todoElement);
      });
    } catch (error) {
      console.error("Error loading todos data:", error);
    }
  }

  // Обработчик нажатия кнопки "Load Todos"
  todosButton.addEventListener("click", () => {
    loadTodos();
  });

  // Обработчик перехода на другие страницы
  document
    .querySelector('a[href="albums.html"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "albums.html";
    });

  document
    .querySelector('a[href="posts.html"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "posts.html";
    });
});
