function Card (title, articleText, subject, dateStamp) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const title = document.createElement("h3");
    title.classList.add("card-title");

    const article = document.createElement("p");
    article.classList.add("card-article");

    const subject = document.createElement("p");
    subject.classList.add("card-subject");

    const dateStamp = document.createElement("p");
    parameter.classList.add("card-dateStamp");

    cardContainer.appendChild(title);
    cardContainer.appendChild(article);
    cardContainer.appendChild(subject);
    cardContainer.appendChild(dateStamp);

    return cardContainer;
}

export default Card;