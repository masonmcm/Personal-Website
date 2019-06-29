
function hover(hide, show) {
    document.getElementsByClassName(hide)[0].style.display = "none";
    document.getElementsByClassName(show)[0].style.display = "block";
}

function navOnClick(hide1, hide2, show, color) {
    document.getElementsByClassName(hide1)[0].style.display = "none";
    document.getElementsByClassName(hide2)[0].style.display = "none";
    document.getElementsByClassName(show)[0].style.display = "block";
    document.getElementsByClassName("header")[0].style.backgroundColor = color;
}

function navOffClick(hide, show1, show2, color) {
    document.getElementsByClassName(hide)[0].style.display = "none";
    document.getElementsByClassName(show1)[0].style.display = "block";
    document.getElementsByClassName(show2)[0].style.display = "block";
    document.getElementsByClassName("header")[0].style.backgroundColor = color;
}
