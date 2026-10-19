function createGreeting(name) {
    const trimmedName = name.trim();

    if (trimmedName === "") {
        return "Please enter your name.";
    }

    return `Hello ${trimmedName}, welcome to the ADT DevOps module!`;
}

const greetingForm = document.getElementById("greetingForm");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

greetingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent = createGreeting(nameInput.value);

    if (nameInput.value.trim() === "") {
        nameInput.focus();
    }
});

// Makes the function available to Jest.
// The browser ignores this section.
if (typeof module !== "undefined") {
    module.exports = { createGreeting };
}
