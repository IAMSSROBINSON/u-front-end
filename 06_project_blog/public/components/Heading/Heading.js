function Heading (pageHeadingText) {

    const h1 = document.createElement("h1");
    h1.classList.add("page-heading");
    h1.textContent = pageHeadingText;

    return h1;
}
export default Heading;