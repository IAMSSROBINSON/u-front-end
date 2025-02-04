function Logo (logotype = "iamssrobinson", url = "index.html") {
    const container = document.createElement("div");
    container.classList.add("logo-container");

    const logoType = document.createElement("a");
    logoType.classList.add("logo-type");
    logoType.textContent = logotype;
    logoType.setAttribute("href", url);

    container.appendChild(logoType);
    
    return container;
}
export default Logo;