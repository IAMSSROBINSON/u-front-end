function Logo () {
    const container = document.createElement("div");
    container.classList.add("logo-container");

    const a = document.createElement("a");
    a.classList.add("logotype");
    a.setAttribute("href", "index.html");
    a.setAttribute("rel", "noopener noreferrer");
    a.textContent = "iamssrobinson";

    container.appendChild(a);

    return container
}

export default Logo;