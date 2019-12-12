let changeBackground = document.querySelector('.bg');
let date = new Date();
let a = date.getHours();

if ((a >= 0) && (a <= 8)) {
    changeBackground.style.backgroundImage = "url(img/bg_login-page.png)";
} else if ((a >= 8) && (a < 16)) {
    changeBackground.style.backgroundImage = "url(img/minimalism-wallpaper-1920x1080-004.jpg)";
} else if ((a >= 16) && (a <= 24)) {
    changeBackground.style.backgroundImage = "url(img/headerbg.jpg)";
}
