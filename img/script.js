let nightMode = document.querySelector("#night-mode");
let mode = false;

nightMode.addEventListener("click", function () {
    if (mode == false) {
        mode = true;
        document.querySelector("body").style.background = "#808080";
        document.querySelector("footer").style.background = "#808080";
        document.querySelector("header").style.background = "#808080";
    } else {
        mode = false;
        document.querySelector("body").style.background = "white";
        document.querySelector("footer").style.background = "#C0C0C0";
        document.querySelector("header").style.background = "#F5F5F5";

    }
})