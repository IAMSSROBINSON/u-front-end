function Card (titleValue, articleTextValue, subjectValue, dateStampValue) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = titleValue;


    const article = document.createElement("p");
    article.classList.add("card-article");
    article.textContent = articleTextValue;

    const subject = document.createElement("p");
    subject.classList.add("card-subject");
    subject.textContent = subjectValue;

    const dateStamp = document.createElement("p");
    dateStamp.classList.add("card-dateStamp");
    dateStamp.textContent = dateStampValue;


    cardContainer.appendChild(title);
    cardContainer.appendChild(article);
    cardContainer.appendChild(subject);
    cardContainer.appendChild(dateStamp);

    return cardContainer;
}

export default Card;