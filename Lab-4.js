var Language = prompt("what type of language do you want to learn");
var cancel = "Selection is canceled";
var link;
var sum;

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
var pic = '<img src="HTML.png" width= 20px/>';
var month_no = prompt("How many month do you want to finish this coures");

for (i = 0; i < month_no; i++) {
    sum = sum + pic;
}
document.write(sum);