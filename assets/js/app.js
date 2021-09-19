/*global $,Swiper, navigator*/
(function () {
$(document).ready(function() {
    let swiperFilters;
    let swiperTabs;
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    function initSwiperJumbotron(){
        let swiper = new Swiper('.swiper--jumbotron', {
            effect: 'slide',
            centeredSlides: true,
            loop: true,
            watchOverflow: true,
            slidesPerView: 1.2,
            spaceBetween: 0,
            navigation: {
                nextEl: '.jumbotron--next',
                prevEl: '.jumbotron--prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.1,
                    centeredSlides: false,
                }
            }
        });
    }
    function initSwiperFilters(){
        swiperFilters = new Swiper('.swiper--filters', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
            noSwiping: true,
            speed: 600
        });
    }
    function initSwiperTabFilters(){
        swiperTabs = new Swiper('.swiper--tabFilters', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
            noSwiping: true,
            speed: 600,
            navigation: {
                nextEl: '.tab-filters--next',
                prevEl: '.tab-filters--prev',
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
    $('#dateFFO').datepicker({
        uiLibrary: 'bootstrap4'
    })
    $('#dateMRE').datepicker({
        uiLibrary: 'bootstrap4'
    })
    $('#dateStayHD').datepicker({
        uiLibrary: 'bootstrap4'
    })
    $('#dateStayVO').datepicker({
        uiLibrary: 'bootstrap4'
    })
    $('.filter-menu').each(function(idx) {
        $(this).click(() => {
            $('.filter-menu').removeClass('active')
            $(this).addClass('active')
            swiperFilters.slideTo(idx)
        })
    })
    initSwiperJumbotron();
    initSwiperFilters();
    if(isMobile) {
        initSwiperTabFilters()
        swiperTabs.on('slideChange', function () {
            swiperFilters.slideTo(swiperTabs.activeIndex)
            $('.filter-menu').removeClass('active')
        });
    }
});
}(jQuery));