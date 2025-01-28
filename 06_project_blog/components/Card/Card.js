function Card (idValue, titleValue, articleValue, subjectValue, dateStampValue) {
    const cardListItem = document.createElement("li");
    cardListItem.classList.add("card-list-item");
    cardListItem.setAttribute("id", idValue);

    const cardLink = document.createElement("a");
    cardLink.setAttribute("href", "../../blogTemplate.html");
    cardLink.setAttribute("rel", "noopener noreferrer");
    cardLink.classList.add("card-link");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

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

    cardHeader.appendChild(cardDateStamp);
    cardHeader.appendChild(cardSubject);
    cardLink.appendChild(cardHeader);
    cardLink.appendChild(cardTitle);
    cardLink.appendChild(cardArticle);
    cardListItem.appendChild(cardLink);

    return cardListItem;
}

export default Card;