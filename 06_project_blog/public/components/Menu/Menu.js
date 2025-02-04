function Menu () {
    const container = document.createElement("div");
    container.classList.add("menu-icon-container");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", "index.html");

    const image = document.createElement("img");
    image.classList.add("menu-icon");
    image.src = '/public/assets/icons/menu.svg';
    image.setAttribute("alt", "Hamburger menu navigation icon click for quick links.");

    anchor.appendChild(image);

    container.appendChild(anchor);
    return container;
}
export default Menu;