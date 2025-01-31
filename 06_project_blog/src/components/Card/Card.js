function Card (titleValue, articleValue, subjectValue, dateStampValue) {
    const li = document.createElement("li");
    li.classList.add("card-list-item");
    li.setAttribute("id", generateRandomId());

    const link = document.createElement("a");
    link.classList.add("card-link");
    link.setAttribute("href", "#");

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = titleValue;

    const article = document.createElement("p");
    article.classList.add("card-article");
    article.textContent = articleValue;

    const subject = document.createElement("p");
    subject.classList.add("card-subject");
    subject.textContent = subjectValue;

    const dateStamp = document.createElement("p");
    dateStamp.classList.add("card-dateStamp");
    dateStamp.textContent = dateStampValue;

    link.appendChild(title);
    link.appendChild(article);
    link.appendChild(subject);
    link.appendChild(dateStamp);

    li.appendChild(link);

    return li;
}

function generateRandomId () {
    return Math.random().toString(32).substring(2);
}

export default Card;