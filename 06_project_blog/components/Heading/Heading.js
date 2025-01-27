function Heading (headingType = "h1", headingText = undefined) {
    const heading = document.createElement(headingType);
    heading.classList.add("heading");
    heading.textContent = headingText;
    return heading;
}

export default Heading;