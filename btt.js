const btt = document.querySelector(".btt");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        if (!btt.classList.contains("btnEntrance")) {
            btt.classList.remove("btnExit");
            btt.classList.add("btnEntrance");
            btt.style.display = "block";
        }
    } else {
        if (btt.classList.contains("btnEntrance")) {
            btt.classList.remove("btnEntrance");
            btt.classList.add("btnExit");
            setTimeout(function() {
                btt.style.display = "none";
            }, 250);

        }
    }
}

btt.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}