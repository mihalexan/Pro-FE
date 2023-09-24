// Добавить код для загрузки данных о пользователе и обработки кнопок "Albums", "Todos", "Posts", а также функциональность для поиска и отображения результатов поиска.
// Использовать API для загрузки данных о постах, альбомах и задачах.

document.addEventListener("DOMContentLoaded", () => {
  const userInfoContainer = document.getElementById("user-info");
  const albumsButton = document.getElementById("albums-btn");
  const todosButton = document.getElementById("todos-btn");
  const postsButton = document.getElementById("posts-btn");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  let currentUser = null;

  // Загрузка данных о пользователе
  async function loadUserData() {
    const userURL = "https://jsonplaceholder.typicode.com/users/1"; // Замените 1 на ID пользователя, который вы хотите отобразить
    try {
      const response = await fetch(userURL);
      const userData = await response.json();
      currentUser = userData;

      // Отображение данных о пользователе
      const userHTML = `
              <p>ID: ${currentUser.id}</p>
              <p>Name: ${currentUser.name}</p>
              <p>Username: ${currentUser.username}</p>
              <p>Email: ${currentUser.email}</p>
              <p>Phone: ${currentUser.phone}</p>
              <p>Website: <span id="website">${currentUser.website}</span> <button id="edit-website">Edit</button></p>
          `;

      userInfoContainer.innerHTML = userHTML;

      // Обработчик кнопки редактирования website
      const editWebsiteButton = document.getElementById("edit-website");
      editWebsiteButton.addEventListener("click", () => {
        const websiteSpan = document.getElementById("website");
        const newWebsite = prompt("Enter new website URL:");
        if (newWebsite) {
          websiteSpan.textContent = newWebsite;
          currentUser.website = newWebsite;
        }
      });
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  }

  // Загрузка данных о постах, альбомах и задачах
  async function loadData(endpoint) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endpoint}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error loading ${endpoint} data:`, error);
    }
  }

  // Обработчик кнопки "Albums"
  albumsButton.addEventListener("click", () => {
    window.location.href = "albums.html";
  });

  // Обработчик кнопки "Todos"
  todosButton.addEventListener("click", () => {
    window.location.href = "todos.html";
  });

  // Обработчик кнопки "Posts"
  postsButton.addEventListener("click", () => {
    window.location.href = "posts.html";
  });

  // Функция для выполнения поиска
  function performSearch(query, data) {
    return data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Обработчик события ввода текста в поле поиска
  searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    if (currentUser) {
      const filteredPosts = performSearch(query, currentUser.posts);
      displaySearchResults(filteredPosts);
    }
  });

  // Отображение результатов поиска
  function displaySearchResults(results) {
    searchResults.innerHTML = "";
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.textContent = result.title;
      searchResults.appendChild(resultItem);
    });
  }

  // Загрузка данных о пользователе при загрузке страницы
  loadUserData();
});
