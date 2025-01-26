function Header () {
    const container = document.createElement("header");
    container.classList.add("header-container");

    const wrapper = document.createElement("div");
    wrapper.classList.add("header-wrapper");
    wrapper.classList.add("wrapper-constraint");

    container.appendChild(wrapper);
    return container;
}

export default Header;