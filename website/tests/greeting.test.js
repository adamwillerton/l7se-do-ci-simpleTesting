document.body.innerHTML = `
    <form id="greetingForm">
        <input id="nameInput" type="text">
        <button type="submit">Submit</button>
    </form>
    <p id="message"></p>
`;

const { createGreeting } = require("../script.js");

test("creates a greeting when name 'Adam' is entered", () => {
    const result = createGreeting("Adam");

    expect(result).toBe(
        "Hello Adam, welcome to the ADT DevOps module!"
    );
});

test("returns a message when the name is empty", () => {
    const result = createGreeting("");

    expect(result).toBe("Please enter your name.");
});

test("removes spaces from the beginning and end of the name", () => {
    const result = createGreeting("  Adam  ");

    expect(result).toBe(
        "Hello Adam, welcome to the ADT DevOps module!"
    );
});
