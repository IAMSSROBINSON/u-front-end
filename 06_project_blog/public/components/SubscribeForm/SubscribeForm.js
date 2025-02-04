function SubscribeForm () {
    const form = document.createElement("form")
    form.classList.add("subscribe-form");
    form.setAttribute("id", "subscribe-form");
    form.setAttribute("method", "#");
    form.setAttribute("action", "#");

    const label = document.createElement("label")
    label.classList.add("subscribe-form-label");
    label.setAttribute("for", "email-input");
    label.textContent = "Subscribe to stay updated";

    const inputAndButtonContainer = document.createElement("div")
    inputAndButtonContainer.classList.add("subscribe-input-and-button-container");

    const email = document.createElement("input")
    email.classList.add("subscribe-form-email-input");
    email.setAttribute("type", "email");
    email.setAttribute("id", "subscribe-form-email-input");
    email.setAttribute("name", "email");
    email.setAttribute("required", "");
    email.setAttribute("placeholder", "myemail@example.com");

    const button = document.createElement("input");
    button.classList.add("subscribe-button");
    button.setAttribute("type", "submit");
    button.value = "Join";

    inputAndButtonContainer.appendChild(email);
    inputAndButtonContainer.appendChild(button);
    form.appendChild(label);
    form.appendChild(inputAndButtonContainer);

    return form;
}

export default SubscribeForm;