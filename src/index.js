import "./style.css";
import homeContent, {loadFooter} from "./home.js";
import { menuContent } from "./menu.js";

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', menuContent);

const homeButton = document.getElementById('home');
homeButton.addEventListener('click', homeContent);

window.addEventListener('load', homeContent);
window.addEventListener('load', loadFooter);




