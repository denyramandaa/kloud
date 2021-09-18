/*global $,Swiper, navigator*/
(function () {
$(document).ready(function() {
    function initSwiperProducts(){
        let swiper = new Swiper('.swiper--jumbotron', {
            effect: 'slide',
            loop: true,
            centeredSlides: true,
            slidesPerView: 1.2,
            spaceBetween: 0,
            navigation: {
                nextEl: '.jumbotron--next',
                prevEl: '.jumbotron--prev',
            },
        });
    }
    let sidebarStatus = false
    $('.burger-button').click(() => {
        const icon = sidebarStatus ? 'burger-icon.png' : 'close-icon.png'
        $('.burger-button').attr('src', 'assets/images/icons/'+icon)
        sidebarStatus ? $('.sidebar').removeClass('show') : $('.sidebar').addClass('show');

        sidebarStatus=!sidebarStatus
    })
    initSwiperProducts();
});
}(jQuery));