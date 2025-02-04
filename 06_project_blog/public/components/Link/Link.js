function Link (linkText, linkHref) {
    const a = document.createElement("a");
    a.classList.add("header-nav-list-item-link");
    a.textContent = linkText;
    a.setAttribute("href", linkHref);
    a.setAttribute("rel", "noopener noreferrer");

    return a;
}
export default Link;