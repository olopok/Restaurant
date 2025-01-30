import "./style.css";
// import contentContainer, { footer } from "./home.js";
import homeContent from "./home.js";
import { menuContent } from "./menu.js";

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', menuContent);

window.addEventListener('load', homeContent);




