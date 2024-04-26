generateBtn = document.getElementById("generateBtn");
lengthInput = document.getElementById("lengthInput");

includeLowercase = document.getElementById("includeLowercase");
includeUppercase = document.getElementById("includeUppercase");
includeNumbers = document.getElementById("includeNumbers");
includeSymbols = document.getElementById("includeSymbols");

text = document.getElementById("text");

const lowecaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = ".:,;!?@#$€%&*_+-=()[]{}<>/|\\'\"";

function generate() {
    let length = +lengthInput.value;
    if (length <= 0 || !Number.isInteger(length) || length > 99) {
        updateText("Please choose a valid password length.");
        return;
    }

    let allowedChars = "";

    allowedChars += includeLowercase.checked ? lowecaseChars : "";
    allowedChars += includeUppercase.checked ? uppercaseChars : "";
    allowedChars += includeNumbers.checked ? numberChars : "";
    allowedChars += includeSymbols.checked ? symbolChars : "";

    if (allowedChars === "") {
        updateText("Please include at least one set of characters.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let charID = Math.floor(Math.random() * allowedChars.length)
        let newChar = allowedChars[charID];
        password += newChar;
    }

    updateText(password);
}

generateBtn.onclick = generate;

function updateText(content) {
    text.textContent = content;
}

addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        generateBtn.click();
    }
});