function Copyright (copyrightText) {
    const copyright = document.createElement("p");  
    copyright.classList.add("copyright");
    copyright.textContent = copyrightText;

    return copyright;
}

export default Copyright;