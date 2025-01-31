function menuContent() {
    const btns = document.querySelectorAll('button');
    for (let i of btns) {
        i.classList.remove('button-active');
    }
    document.getElementById('menu').classList.add('button-active');
    const menuListContainer = document.getElementById('content');
    // menuListContainer.className = "";
    // menuListContainer.classList.add = "menu-container"
    const dish = document.createElement('p');
    dish.textContent = "Spaghetti al pomodoro e basilico";

    if (menuListContainer.hasChildNodes) {
        menuListContainer.innerHTML = "";
    };

    menuListContainer.appendChild(dish);
}
export { menuContent };