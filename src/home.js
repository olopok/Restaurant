const homePara = document.createElement('p');
const text = "Since 1987 we serve the most delicious dishes from the famous italian cousine !!!";
homePara.textContent = text;
homePara.classList.add('description');

const contentContainer = document.getElementById('content');
contentContainer.appendChild(homePara);

const footer = document.querySelector('footer')
const photoCreditsText1 = document.createElement('p');
const photoCreditsText2 = document.createElement('p');
const creditsLink1 = document.createElement('a');
const creditsLink2 = document.createElement('a');

photoCreditsText1.classList.add('credits');
photoCreditsText2.classList.add('credits');

creditsLink1.setAttribute("href", "https://unsplash.com/@mggbox?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
creditsLink2.setAttribute("href", "https://unsplash.com/photos/photo-of-cooked-pasta-on-plate-98Xi5vMGKck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");

photoCreditsText1.textContent = "Photo by: ";
photoCreditsText2.textContent = " on ";

creditsLink1.textContent = "Mgg Vitchakorn";
creditsLink2.textContent = " Unsplash.";

photoCreditsText1.appendChild(creditsLink1);
photoCreditsText2.appendChild(creditsLink2);

footer.appendChild(photoCreditsText1);
footer.appendChild(photoCreditsText2);


export default contentContainer;
export { footer};

