import starter1Image from "./images/tomato-bruschetta-with-red-pepper-balsamic-vinegar-garlic-herbs.jpg";
import starter2Image from "./images/200735a6-ce4e-403a-8490-c424e2473dc8.jpg";

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

    const startersContainerTitle = document.createElement('h2');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    startersContainerTitle.textContent = "Starters";
    cardContainer.appendChild(startersContainerTitle);

    function createCard(array) {
        for (let i in array) {
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
            cardContainer.appendChild(starterCard);
        }
    };

    class Dishes {
        constructor(name, ingredients, price, img, textCredits, creditsLink) {
            this.name = name;
            this.ingredients = ingredients;
            this.price = price;
            this.img = img;
            this.textCredits = textCredits;
            this.creditsLink = creditsLink;

        };
    };

    const starter1 = new Dishes("Bruschetta",
        "Grilled bread, Tomato, Garlic, Olive oil",
        "£ 4.50",
        starter1Image,
        "Image by stockking on Freepik",
        "https://www.freepik.com/free-photo/tomato-bruschetta-with-red-pepper-balsamic-vinegar-garlic-herbs_6206302.htm"
    );

    const starter2 = new Dishes("Affettati misti",
        "Cooked Ham, Salame, Prosciutto, Mortadella",
        "£ 6.70",
        starter2Image,
        "Image by muhammad.abdullah on Freepik",
        "https://www.freepik.com/free-psd/delicious-assorted-salami-ham-arranged-as-spiral_412661275.htm"
    );
    const starters = [];
    starters.push(starter1, starter2);

    createCard(starters);

    menuListContainer.appendChild(cardContainer);

};
export { menuContent };