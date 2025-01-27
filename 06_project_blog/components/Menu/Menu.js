function Menu () {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const img = document.createElement("img");
    img.classList.add("menu-icon");
    img.src = "../../assets/icons/menu.svg";

    menuContainer.appendChild(img);

    return menuContainer;
}
export default Menu;