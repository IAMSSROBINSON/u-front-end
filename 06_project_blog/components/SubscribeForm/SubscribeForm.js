function SubscribeForm () {
    const form = document.createElement("form");
    form.classList.add("subscribe-form");
    form.setAttribute("method", "#");
    form.setAttribute("action", "#");
    form.setAttribute("novalidate", "");

    const label = document.createElement("label");
    label.classList.add("label");
    label.setAttribute("for", "emailInput");
    label.textContent = "Subscribe to stay updated";

    const inputAndButtonContainer = document.createElement("div");
    inputAndButtonContainer.classList.add("input-and-button-container");

    const emailInput = document.createElement("input");
    emailInput.classList.add("email-input");
    emailInput.setAttribute("id", "emailInput");
    emailInput.setAttribute("placeholder", "myEmail@example.com");

    const submitButton = document.createElement("input");
    submitButton.classList.add("submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.value = "Join";

    form.appendChild(label);
    inputAndButtonContainer.appendChild(emailInput);
    inputAndButtonContainer.appendChild(submitButton);
    form.appendChild(inputAndButtonContainer);

    return form;
}

export default SubscribeForm;