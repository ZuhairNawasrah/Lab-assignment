var Language = prompt("what type of do you want to learn");
var Lang;

if (Language == HTML) {
    Lang = "Press the first link in nav. bar";
} else if (Language == CSS) {
    Lang = "Press the second link in nav. bar";
} else {
    Lang = "Please re-enter the language name";
}

document.write(Lang);
confirm("Are you sure about your pick?");
alert("Good luck with coding journey");