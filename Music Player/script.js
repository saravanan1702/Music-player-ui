document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.getElementById("menu-open");
  const menuclose = document.getElementById("menu-close");
  const sidebar = document.querySelector(".container .sidebar");

  openMenu.addEventListener("click", () => (sidebar.style.left = "0"));
  menuclose.addEventListener("click", () => (sidebar.style.left = "-100%"));
});

