function slider() {
    let sliders = document.getElementsByClassName('main_block')[0];
    let images = [
        'url(./img/2.jpg)',
        'url(./img/1.jpg)',
        'url(./img/3.jpg)'
    ];
    let url = 0;
    setInterval(function() {
        url += 1;
        if (url == images.length) {
        url = 0;
        }
        sliders.style.backgroundImage = images[url];
    }, 6000);
    }
    document.addEventListener("DOMContentLoaded", slider);

    