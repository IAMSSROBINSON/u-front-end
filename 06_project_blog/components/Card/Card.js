function Card (idValue, titleValue, articleValue, subjectValue, dateStampValue) {
    const cardContainer = document.createElement("a");
    cardContainer.setAttribute("href", "../../blogTemplate.html");
    cardContainer.setAttribute("id", idValue);
    cardContainer.classList.add("card-container");

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = titleValue;

    const cardArticle = document.createElement("p");
    cardArticle.classList.add("card-article");
    cardArticle.textContent = articleValue;

    const cardSubject = document.createElement("p");
    cardSubject.classList.add("card-subject");
    cardSubject.textContent = subjectValue;

    const cardDateStamp = document.createElement("p");
    cardDateStamp.classList.add("card-dateStamp");
    cardDateStamp.textContent = dateStampValue;


    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardArticle);
    cardContainer.appendChild(cardSubject);
    cardContainer.appendChild(cardDateStamp);

    return cardContainer;
}

export default Card;