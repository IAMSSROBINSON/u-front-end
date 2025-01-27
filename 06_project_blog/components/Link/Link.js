function Link (hrefValue, textValue) {
    const anchor = document.createElement("a");
    anchor.setAttribute("href", hrefValue);
    anchor.textContent = textValue;

    return anchor
}

export default Link;