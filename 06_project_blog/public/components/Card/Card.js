function Card (idValue, titleValue, articleValue, subjectValue, dateStampValue) {
    const li = document.createElement("li");
    li.classList.add("card-list-item");
    li.setAttribute("id", idValue);

    const link = document.createElement("a");
    link.classList.add("card-link");
    link.setAttribute("href", "/public/blogTemplate.html");

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = titleValue;

    const article = document.createElement("p");
    article.classList.add("card-article");
    article.textContent = articleValue;

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const subject = document.createElement("p");
    subject.classList.add("card-subject");
    subject.textContent = subjectValue;

    const dateStamp = document.createElement("p");
    dateStamp.classList.add("card-dateStamp");
    dateStamp.textContent = dateStampValue;

    link.appendChild(title);
    link.appendChild(article);
    cardFooter.appendChild(subject);
    cardFooter.appendChild(dateStamp);
    link.appendChild(cardFooter);

    li.appendChild(link);

    return li;
}

export default Card;