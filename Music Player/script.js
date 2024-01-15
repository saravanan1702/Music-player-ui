const menuOpen = document.getElementsById("menu-opn");
const menuClose = document.getElementsById("menu-cls");
const sidebar = document.querySelector(".container .sidebar");
menuOpen.addEventListener("click", () => (sidebar.style.left = "0"));
menuClose.addEventListener("click", () => (sidebar.style.left = "-100%"));
