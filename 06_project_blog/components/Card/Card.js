function Card (idValue, titleValue, articleValue, subjectValue, dateStampValue) {
    const cardListItem = document.createElement("li");
    cardListItem.classList.add("card-list-item");
    cardListItem.setAttribute("id", idValue);

    const cardLink = document.createElement("a");
    cardLink.setAttribute("href", "../../blogTemplate.html");
    cardLink.setAttribute("rel", "noopener noreferrer");
    cardLink.classList.add("card-link");

    const cardDateStamp = document.createElement("p");
    cardDateStamp.classList.add("card-dateStamp");
    cardDateStamp.textContent = dateStampValue;

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = titleValue;

    const cardArticle = document.createElement("p");
    cardArticle.classList.add("card-article");
    cardArticle.textContent = articleValue;

    const cardSubject = document.createElement("p");
    cardSubject.classList.add("card-subject");
    cardSubject.textContent = subjectValue;


    cardLink.appendChild(cardDateStamp);
    cardLink.appendChild(cardTitle);
    cardLink.appendChild(cardArticle);
    cardLink.appendChild(cardSubject);
    cardListItem.appendChild(cardLink);

    return cardListItem;
}

export default Card;