// user login form
let logoutView = document.querySelector("[data-logout-view]");
let loggedInView = document.querySelector("[data-loggedin-view]");
let usernameView = document.querySelector("[data-username-view]");

let isLoggedIn = localStorage.getItem("isLoggedIn");
let username = localStorage.getItem("username");

// user login form
function handleLogin() {
  let username = document.querySelector("[data-username]").value;
  let password = document.querySelector("[data-password]").value;

  document.cookie = `username=${username}; expires=Thu, 18 Dec 9999 12:00:00 UTC`;

  if (username === "filiz" && password === "12345") {
    logoutView.classList.add("hidden");
    loggedInView.classList.remove("hidden");

    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", true);
  } else {
    alert("Wrong username or password");
  }
}

// add username to the page as username view

window.addEventListener("DOMContentLoaded", function () {
  if (!!isLoggedIn) {
    logoutView.classList.add("hidden");
    loggedInView.classList.remove("hidden");
    usernameView.innerHTML = username;
  } else {
    logoutView.classList.remove("hidden");
    loggedInView.classList.add("hidden");
  }
});

// user logout form
function handleLogout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");

  logoutView.classList.remove("hidden");
  loggedInView.classList.add("hidden");

  document.querySelector("[data-username]").value = "";
  document.querySelector("[data-password]").value = "";
}

// localstorage
// 1. Create a variable to store the data
// 2. Create a function to save the data
// 3. Create a function to load the data
// 4. Create a function to clear the data

// cookies
// 1. Create a variable to store the data
// 2. Create a function to save the data
// 3. Create a function to load the data
// 4. Create a function to clear the data
