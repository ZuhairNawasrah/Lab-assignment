var Language = prompt("Which of 'HTML' or 'CSS' you wanna learn first?");
var link;
var pic = '<img src="HTML.png" width= 20px/>';

function input() {
    while (Language !== "HTML" && Language !== "CSS") {
        Language = prompt("Can you re-enter the answer 'HTML' or 'CSS'?!");
    }
}
input();
for (var i = 0; i < 2;) {
    if (Language === "HTML" || Language === "CSS") {
        if (confirm("Are you sure?")) {
            link = "Click " + Language + " Link";
            document.write(link);
            i = 2;

        } else {
            alert("Your answer is canceled!");
            Language = prompt("Can you re-enter the answer 'HTML' or 'CSS'?!");
            input();
        }
    }
}

