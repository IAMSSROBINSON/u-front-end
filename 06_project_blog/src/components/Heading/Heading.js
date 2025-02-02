function Heading (pageHeadingText) {
    const container = document.createElement("div");
    container.classList.add("heading-container");

    const h1 = document.createElement("h1");
    h1.classList.add("page-heading");
    h1.textContent = pageHeadingText;

    container.appendChild(h1);

    return container;
}
export default Heading;