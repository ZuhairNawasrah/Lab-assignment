var Language = prompt("what type of language do you want to learn");
var cancel = "Selection is canceled";
var link;

while (Language !== "HTML" && Language !== "CSS") {
    Language = prompt("Can you re-enter the answer");
}

if (Language == "HTML") {
    if (confirm("Are you sure?")) {
        alert("Good luck with coding journey");
        link = "Click 1st link";
        document.write(link);
    }
    else {
        Language = prompt("what type of language do you want to learn");
        if (Language == "CSS") {
            if (confirm("Are you sure?")) {
                alert("Good luck with coding journey");
                link = "Click 2nd link";
                document.write(link);
            } else {
                document.write(cancel);
            }
        }
    }
} else {
    if (Language == "CSS") {
        if (confirm("Are you sure?")) {
            alert("Good luck with coding journey");
            link = "Click 2nd link";
            document.write(link);
        }
        else {
            Language = prompt("what type of language do you want to learn");
            if (Language == "HTML") {
                if (confirm("Are you sure?")) {
                    alert("Good luck with coding journey");
                    link = "Click 1st link"
                    document.write(link);
                } else {
                    document.write(cancel);
                }
            }
        }
    }
}







