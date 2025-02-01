import starter1Image from "./images/tomato-bruschetta-with-red-pepper-balsamic-vinegar-garlic-herbs.jpg";
import starter2Image from "./images/200735a6-ce4e-403a-8490-c424e2473dc8.jpg";
import main1Image from "./images/1172.jpg";
import main2Image from "./images/1788.jpg";

function menuContent() {
    const btns = document.querySelectorAll('button');
    for (let i of btns) {
        i.classList.remove('button-active');
        ;
    };

    document.getElementById('menu').classList.add('button-active');

    const menuListContainer = document.getElementById('content');

    if (menuListContainer.hasChildNodes) {
        menuListContainer.innerHTML = "";
    };
    const starterContainer = document.createElement('div');
    const startersContainerTitle = document.createElement('h2');

    const mainContainer = document.createElement('div');
    const mainContainerTitle = document.createElement('h2');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    startersContainerTitle.textContent = "Starters";

    mainContainerTitle.textContent = "Mains Courses";

    function createCard(array) {

        for (let i in array) {
            if (array[i].category === "starter") {
                const starterCard = document.createElement('div');
                starterCard.classList.add('card');
                const image = document.createElement('img');
                image.classList.add('dish-img');
                const dishName = document.createElement('h3');
                const dishIngredients = document.createElement('p');
                dishIngredients.classList.add('dish-text');
                const dishPrice = document.createElement('p');
                dishPrice.classList.add('dish-price');
                const creditLink = document.createElement('a');
                creditLink.classList.add('menu-credits');
                image.src = array[i].img;
                dishName.textContent = array[i].name;
                dishIngredients.textContent = array[i].ingredients;
                dishPrice.textContent = array[i].price;
                creditLink.textContent = array[i].textCredits;
                creditLink.setAttribute("href", array[i].creditsLink)
                starterCard.appendChild(image);
                starterCard.appendChild(dishName);
                starterCard.appendChild(dishIngredients);
                starterCard.appendChild(dishPrice);
                starterCard.appendChild(creditLink);
                starterContainer.appendChild(starterCard);
                cardContainer.appendChild(starterContainer);
            };

            if (array[i].category === "main") {
                const mainCard = document.createElement('div');
                mainCard.classList.add('card');
                const image = document.createElement('img');
                image.classList.add('dish-img');
                const dishName = document.createElement('h3');
                const dishIngredients = document.createElement('p');
                dishIngredients.classList.add('dish-text');
                const dishPrice = document.createElement('p');
                dishPrice.classList.add('dish-price');
                const creditLink = document.createElement('a');
                creditLink.classList.add('menu-credits');
                image.src = array[i].img;
                dishName.textContent = array[i].name;
                dishIngredients.textContent = array[i].ingredients;
                dishPrice.textContent = array[i].price;
                creditLink.textContent = array[i].textCredits;
                creditLink.setAttribute("href", array[i].creditsLink)
                mainCard.appendChild(image);
                mainCard.appendChild(dishName);
                mainCard.appendChild(dishIngredients);
                mainCard.appendChild(dishPrice);
                mainCard.appendChild(creditLink);
                mainContainer.appendChild(mainCard);
                cardContainer.appendChild(mainContainer);
            };
        };
    };

    class Dishes {
        constructor(name, ingredients, price, img, textCredits, creditsLink, category) {
            this.name = name;
            this.ingredients = ingredients;
            this.price = price;
            this.img = img;
            this.textCredits = textCredits;
            this.creditsLink = creditsLink;
            this.category = category;
        };
    };

    const starter1 = new Dishes("Bruschetta",
        "Grilled bread, Tomato, Garlic, Olive oil",
        "£ 4.50",
        starter1Image,
        "Image by stockking on Freepik",
        "https://www.freepik.com/free-photo/tomato-bruschetta-with-red-pepper-balsamic-vinegar-garlic-herbs_6206302.htm",
        "starter"
    );

    const starter2 = new Dishes("Affettati misti",
        "Cooked Ham, Salame, Prosciutto, Mortadella",
        "£ 6.70",
        starter2Image,
        "Image by muhammad.abdullah on Freepik",
        "https://www.freepik.com/free-psd/delicious-assorted-salami-ham-arranged-as-spiral_412661275.htm",
        "starter"
    );

    const mainCourse1 = new Dishes("Pasta al pomodoro",
        "Pasta, Tomato sauce, Olive oil, and Basil",
        "£ 9.50",
        main1Image,
        "Image by Valeria Aksakova on Freepik",
        "https://www.freepik.com/author/valeria-aksakova",
        "main"
    );

    const mainCourse2 = new Dishes("Lasagne",
        "Pasta lasagne, Tomato sauce, Olive oil, ragu', bechamel sauce, and Basil",
        "£ 12.50",
        main2Image,
        "Image by stockking on Freepik",
        "https://www.freepik.com/free-photo/tomato-bruschetta-with-red-pepper-balsamic-vinegar-garlic-herbs_6206302.htm",
        "main"
    );

    const starters = [];
    starters.push(starter1, starter2);

    starterContainer.appendChild(startersContainerTitle);

    const mains = [];
    mains.push(mainCourse1, mainCourse2);

    mainContainer.appendChild(mainContainerTitle);

    createCard(starters);
    createCard(mains);

    menuListContainer.appendChild(cardContainer);

};
export { menuContent };