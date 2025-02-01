function contactUs() {
    const content = document.getElementById('content');

    const btns = document.querySelectorAll('button');
    for (let i of btns) {
        i.classList.remove('button-active');
        ;
    };
    document.getElementById('contact-us').classList.add('button-active');

    if (content.hasChildNodes) {
        content.innerHTML = "";
    };

    const orderOrBook = {
        title: document.createElement('h2'),
        titleText: "To order or to book a table:",
        numberContainer: document.createElement('a'),
        textNumberContainer: "+441234567890",
    };

    const collect = {
        title: document.createElement('h2'),
        titleText: "To collect your order:",
        addressElement: document.createElement('p')
    };

    const divOrderOrBook = document.createElement('div');
    orderOrBook.title.textContent = orderOrBook.titleText;
    divOrderOrBook.appendChild(orderOrBook.title);
    orderOrBook.numberContainer.textContent = orderOrBook.textNumberContainer;
    orderOrBook.numberContainer.setAttribute("href", "tel:+44123456789");
    divOrderOrBook.appendChild(orderOrBook.numberContainer);
    divOrderOrBook.classList.add('contact');



    content.appendChild(divOrderOrBook);

    const divCollect = document.createElement('div');
    collect.title.textContent = collect.titleText;
    divCollect.appendChild(collect.title);
    collect.addressElement.textContent = "12 fantasy street, Moon.";
    collect.addressElement.classList.add('address');
    divCollect.appendChild(collect.addressElement);
    divCollect.classList.add('contact');

    content.appendChild(divCollect);



};

export {contactUs};