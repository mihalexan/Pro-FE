document.addEventListener("DOMContentLoaded", () => {
  const albumsButton = document.getElementById("load-albums");
  const albumsList = document.getElementById("albums-list");

  // Функция для загрузки данных о альбомах
  async function loadAlbums() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const albumsData = await response.json();

      // Отобразить данные о альбомах
      albumsData.forEach((album) => {
        const albumElement = document.createElement("div");
        albumElement.innerHTML = `<p>${album.title}</p>`;
        albumsList.appendChild(albumElement);
      });
    } catch (error) {
      console.error("Error loading albums data:", error);
    }
  }

  // Обработчик нажатия кнопки "Load Albums"
  albumsButton.addEventListener("click", () => {
    loadAlbums();
  });

  // Обработчик перехода на другие страницы
  document
    .querySelector('a[href="todos.html"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "todos.html";
    });

  document
    .querySelector('a[href="posts.html"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "posts.html";
    });
});
