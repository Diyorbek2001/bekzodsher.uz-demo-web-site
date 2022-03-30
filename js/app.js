// ichki navbar boshi
const ul = document.querySelector('nav .nav .ul ul li .ul2');
function chevron() {
    ul.classList.toggle('ul3');
}
//ichki navbar oxiri

// navbar boshi
var nav = document.getElementById("ul");
var bos = document.getElementById("bos");
bos.addEventListener('click', () => {
    if (nav.style.display == "block") {
        nav.classList.toggle('uyla');
        bos.classList.toggle('bosx');
        console.log(nav.className);
    }
    else {
        nav.classList.toggle('uyla');
        bos.classList.toggle('bosx');
        console.log(nav.className);
    }
})
//navbar oxiri

// navbar chiqish boshi
const nav1 = document.querySelector('.nav');
var oldin = window.pageYOffset;
window.onscroll = function () {
    var keyin = window.pageYOffset;
    if (oldin > keyin) nav1.style.opacity = '1'
    else nav1.style.opacity = '0'
    oldin = keyin;
}
//navbar chiqish oxiri

//tepaga boshi
var tepaga = document.getElementById('up'),
icon = document.getElementById('icon');
tepaga.addEventListener('click', () => {
    window.scrollTo(0,0)
})
icon.addEventListener('click', () => {
    window.scrollTo(0,0)
})
//tepaga oxiri

//animate salom boshi
var salom = document.getElementById('salom');
var sh1 = document.getElementById('h1');
console.log(salom, sh1)
salom.addEventListener('mouseenter', () => {
        sh1.style.animation = "salom 0.5s ease 0.3s forwards";
})
salom.addEventListener('mouseleave', () => {
        sh1.style.animation = "none";
})
// animate salom oxiri

//animate tel email boshi
var tel = document.getElementById('tel'),
email = document.getElementById('email'),
fas1 = document.getElementById('fas1'),
fas2 = document.getElementById('fas2');
tel.addEventListener('mouseenter', () => {
    fas1.style.animation = "tel 0.5s ease infinite"
})
tel.addEventListener('mouseleave', () => {
    fas1.style.animation = "none"
})
email.addEventListener('mouseenter', () => {
    fas2.style.animation = "tel 0.5s ease infinite"
})
email.addEventListener('mouseleave', () => {
    fas2.style.animation = "none"
})
// animate tel email oxiri




