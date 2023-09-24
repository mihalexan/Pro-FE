document.addEventListener("DOMContentLoaded", () => {
  const postsButton = document.getElementById("load-posts");
  const postsList = document.getElementById("posts-list");

  // Функция для загрузки данных о постах
  async function loadPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await response.json();

      // Отобразить данные о постах
      postsData.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        postsList.appendChild(postElement);
      });
    } catch (error) {
      console.error("Error loading posts data:", error);
    }
  }

  // Обработчик нажатия кнопки "Load Posts"
  postsButton.addEventListener("click", () => {
    loadPosts();
  });

  // Обработчик перехода на другие страницы
  document
    .querySelector('a[href="albums.html"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "albums.html";
    });

  document
    .querySelector('a[href="todos.html"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "todos.html";
    });
});
