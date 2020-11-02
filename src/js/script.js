// Start Theme Switcher

let elHTML = document.documentElement;
let btnLight = document.getElementById('btn-light');
let btnDark = document.getElementById('btn-dark');

btnLight.onclick = function () {
  elHTML.classList.add('themeLight');
  elHTML.classList.remove('themeDark');
  btnLight.classList.add('current');
  btnDark.classList.remove('current');
};

btnDark.onclick = function () {
  elHTML.classList.remove('themeLight');
  elHTML.classList.add('themeDark');
  btnLight.classList.remove('current');
  btnDark.classList.add('current');
};

function setTheme() {
  elHTML.classList.add('themeLight');
  elHTML.classList.remove('themeDark');
  btnLight.classList.add('current');
  btnDark.classList.remove('current');
}

setTheme();

// End Theme Switcher

// Start Fold Toggle

// const sBtn = document.querySelector("button.fold-toggle#see");
// const lBtn = document.querySelector("button.fold-toggle#learn");
// const rBtn = document.querySelector("button.fold-toggle#reach");

// const sCont = document.querySelector(".fold-element#see-content");
// const lCont = document.querySelector(".fold-element#learn-content");
// const rCont = document.querySelector(".fold-element#reach-content");

// const o = {
//     animFadeOut: function (elem, dur) {
//         elem.animate([{ opacity: 1 }, { opacity: 0 }], { duration: dur });
//         return this;
//     },
//     animFadeIn: function (elem, dur) {
//         elem.animate([{ opacity: 0 }, { opacity: 1 }], { duration: dur });
//         return this;
//     },
//     expTog: function (elem) {
//         elem.classList.toggle("expanded");
//         return this;
//     },
//     curTog: function (elem) {
//         elem.classList.toggle("current");
//         return this;
//     },
//     expRemove: function (elem, wait) {
//         setTimeout(function () { elem.classList.remove("expanded"); }, wait);
//         return this;
//     },
//     curRemove: function (elem) {
//         elem.classList.remove("current");
//         return this;
//     },
//     cBtnShow: function (elem) {
//         elem.querySelector("#closeBtn").style.display = "unset";
//         return this;
//     },
//     cBtnHide: function (elem) {
//         elem.querySelector("#closeBtn").style.display = "none";
//         return this;
//     }
// };

// sBtn.onclick = function () {
//     sBtn.classList.contains("current") ? o.curRemove(sBtn).cBtnHide(sBtn).animFadeOut(sCont, 300).expRemove(sCont, 250) : o.curTog(sBtn).cBtnShow(sBtn).expTog(sCont).animFadeIn(sCont, 600);
// };

// lBtn.onclick = function () {
//     lBtn.classList.contains("current") ? o.curRemove(lBtn).cBtnHide(lBtn).animFadeOut(lCont, 300).expRemove(lCont, 250) : o.curTog(lBtn).cBtnShow(lBtn).expTog(lCont).animFadeIn(lCont, 600);
// };

// rBtn.onclick = function () {
//     rBtn.classList.contains("current") ? o.curRemove(rBtn).cBtnHide(rBtn).animFadeOut(rCont, 300).expRemove(rCont, 250) : o.curTog(rBtn).cBtnShow(rBtn).expTog(rCont).animFadeIn(rCont, 600);
// };

// End Fold Toggle
