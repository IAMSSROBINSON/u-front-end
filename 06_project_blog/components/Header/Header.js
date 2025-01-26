function Header () {
    const container = document.createElement("header");
    container.classList.add("header-container");

    const wrapper = document.createElement("div");
    wrapper.classList.add("header-wrapper");

    container.appendChild(wrapper);
    return container;
}

export default Header;