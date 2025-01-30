function Menu () {
    const container = document.createElement("div");
    container.classList.add("menu-icon-container");

    const image = document.createElement("img");
    image.classList.add("menu-icon");
    image.src = '/src/assets/icons/menu.svg';
    image.setAttribute("alt", "Hamburger menu navigation icon click for quick links.");

    container.appendChild(image);
    return container;
}
export default Menu;