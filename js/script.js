let rules = {}
let examples = {}

const rawField = document.getElementById("rawText");
const outputField = document.getElementById("outputExampleText");
const btn1 = document.getElementById("example1Btn");
const btn2 = document.getElementById("example2Btn");
const btn3 = document.getElementById("example3Btn");

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

document.getElementById("example1Btn").addEventListener("click", () => loadExample(1))
document.getElementById("example2Btn").addEventListener("click", () => loadExample(2))
document.getElementById("example3Btn").addEventListener("click", () => loadExample(3))

function loadExample(number) {
    rawField.value = examples["anleitung_"+number].text;
    let text = rawField.value;

    for (let key in rules) {
        const regex = new RegExp("\\b" + key + "\\b", "g");
        text = text.replace(regex, rules[key]);
    }

    outputField.value = text;
}
