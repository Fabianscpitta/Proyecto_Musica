document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('myCarousel');
    var items = carousel.getElementsByClassName('carousel-item');
    var updateBackground = function () {
        Array.prototype.forEach.call(items, function (item) {
            if (item.classList.contains('active')) {
                var img = item.querySelector('img').src;
                item.style.backgroundImage = 'url(' + img + ')';
            }
        });
    };

    carousel.addEventListener('slid.bs.carousel', updateBackground);
    updateBackground();
});
