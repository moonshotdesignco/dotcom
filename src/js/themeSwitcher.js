let elHTML = document.documentElement;
let logo = document.getElementById("logo");
let cres = document.getElementById("cres");
let btnLight = document.getElementById("btn-light");
let btnDark = document.getElementById("btn-dark");

btnLight.onclick = function() {
    elHTML.classList.add("themeLight");
    elHTML.classList.remove("themeDark");
    logo.setAttribute("src", "/img/mdco-logotype.svg");
    cres.setAttribute("src", "/img/crescent.svg");
    btnLight.classList.add("current");
    btnDark.classList.remove("current");
};

btnDark.onclick = function() {
    elHTML.classList.remove("themeLight");
    elHTML.classList.add("themeDark");
    logo.setAttribute("src", "/img/mdco-logotype_alt.svg");
    cres.setAttribute("src", "/img/crescent_alt.svg");
    btnLight.classList.remove("current");
    btnDark.classList.add("current");
};

function setTheme() {
    elHTML.classList.add("themeLight");
    elHTML.classList.remove("themeDark");
    btnLight.classList.add("current");
    btnDark.classList.remove("current");
}

setTheme();