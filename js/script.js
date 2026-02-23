let rules = {}
let examples = {}

const inputField = document.getElementById("inputText");
const outputField = document.getElementById("outputText");
const clearBtn = document.getElementById("clearBtn");
const genderBtn = document.getElementById("genderBtn");

const rawField = document.getElementById("rawText");
const outputExampleField = document.getElementById("outputExampleText");
const example1Btn = document.getElementById("example1Btn");
const example2Btn = document.getElementById("example2Btn");
const example3Btn = document.getElementById("example3Btn");

const isSubfolder = window.location.pathname.includes("/html/");
const path = isSubfolder ? "../data/" : "data/";

window.addEventListener("DOMContentLoaded", () => {
    fetch(path + "regeln.json")
    .then(res => res.json())
    .then(data => {rules=data})

    fetch(path + "texte.json")
    .then(res => res.json())
    .then(data => {examples=data})
})

if (clearBtn && genderBtn) {
    clearBtn.addEventListener("click", () => clearField());
    genderBtn.addEventListener("click", () => genderText());
}

if (example1Btn && example2Btn && example3Btn) {
    example1Btn.addEventListener("click", () => loadExample(1));
    example2Btn.addEventListener("click", () => loadExample(2));
    example3Btn.addEventListener("click", () => loadExample(3));
}

function sanitize(str) {
    if (!str) return "";
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function clearField() {
    inputField.value = "";
    outputField.value = "";
}

function genderText() {
    let text = sanitize(inputField.value);

    if (!text) {
        alert("Bitte geben Sie zuerst einen Text ein.");
        return;
    }

    for (let key in rules) {
        const regex = new RegExp("\\b" + key + "\\b", "g");
        text = text.replace(regex, rules[key]);
    }

    outputField.value = text;
}

function loadExample(number) {
    let rawContent = sanitize(examples["anleitung_" + number].text);
    rawField.value = rawContent;

    let text = rawContent;
    for (let key in rules) {
        const regex = new RegExp("\\b" + key + "\\b", "g");
        text = text.replace(regex, rules[key]);
    }

    outputExampleField.value = text;
}
