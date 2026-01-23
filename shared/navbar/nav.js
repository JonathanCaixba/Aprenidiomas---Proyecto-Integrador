const navBarMenu = document.getElementById("navbar-menu");
const iconX = document.getElementById("icon-x");
const navLinks = document.getElementById("nav-links");
const activeClass = "active";
let toggle = false;
const hamburgerSvg = navBarMenu.innerHTML;
const normalize = (path) => path.replace(/\/$/, "");
const currentPath = normalize(window.location.pathname);

document.querySelectorAll("#nav-links li a").forEach((element) => {
  const linkPath = normalize(new URL(element.href).pathname);
  console.log(linkPath, currentPath);

  if (currentPath === "" && linkPath === "/index.html") {
    element.classList.add(activeClass);
  }
  if (linkPath === currentPath) {
    element.classList.add(activeClass);
  }
});

navBarMenu.addEventListener("click", () => {
  navLinks.classList.add("active");
  document.body.style.overflow = "hidden";
});

iconX.addEventListener("click", () => {
  navLinks.classList.remove("active");
  document.body.style.overflow = "";
});
