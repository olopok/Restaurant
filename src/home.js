const homePara = document.createElement('p');
const text = "Since 1987 we serve the most delicious dishes from the famous italian cousine !!!";
homePara.textContent = text;
homePara.classList.add('description')

const contentContainer = document.getElementById('content');
contentContainer.appendChild(homePara);

export default contentContainer;

