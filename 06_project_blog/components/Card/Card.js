function Card (idValue, titleValue, articleValue, subjectValue, dateStampValue) {
    const cardListItem = document.createElement("li");
    cardListItem.classList.add("card-list-item");
    cardListItem.setAttribute("id", idValue);

    const cardLink = document.createElement("a");
    cardLink.setAttribute("href", "../../blogTemplate.html");
    cardLink.setAttribute("rel", "noopener noreferrer");
    cardLink.classList.add("card-link");

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = titleValue;

    const cardArticle = document.createElement("p");
    cardArticle.classList.add("card-article");
    cardArticle.textContent = articleValue;

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const cardSubject = document.createElement("p");
    cardSubject.classList.add("card-subject");
    cardSubject.textContent = subjectValue;

    const cardDateStamp = document.createElement("p");
    cardDateStamp.classList.add("card-dateStamp");
    cardDateStamp.textContent = dateStampValue;


    cardLink.appendChild(cardTitle);
    cardLink.appendChild(cardArticle);
    cardFooter.appendChild(cardSubject)
    cardFooter.appendChild(cardDateStamp)
    cardLink.appendChild(cardFooter);
    cardListItem.appendChild(cardLink);

    return cardListItem;
}

export default Card;