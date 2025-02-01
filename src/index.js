import "./style.css";
import homeContent, {loadFooter} from "./home.js";
import { menuContent } from "./menu.js";
import { contactUs } from "./contact.js";

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', menuContent);

const homeButton = document.getElementById('home');
homeButton.addEventListener('click', homeContent);

const  contactUsButton = document.getElementById('contact-us');
contactUsButton.addEventListener('click', contactUs);

window.addEventListener('load', homeContent);
window.addEventListener('load', loadFooter);




