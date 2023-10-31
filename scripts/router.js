import about from "./about.js";
import contact from "./contactUs.js";

const routes = {
  "#about": about,
  "#contact": contact,
};
let root = document.getElementById("root");
window.addEventListener("popstate", (event) => {
  console.log(window.location);
  root.innerHTML = routes[window.location.hash];
});
function navItemClick(route) {
  window.history.pushState({}, route, window.location.origin + route);
}
window.navItemClick = navItemClick;
