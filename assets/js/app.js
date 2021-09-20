/*global $,Swiper, navigator*/
(function () {
$(document).ready(function() {
    let swiperFilters;
    let swiperTabs;
    let swiperRooms;
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
        
        swiperTabs.on('slideChange', function () {
            swiperFilters.slideTo(swiperTabs.activeIndex)
            $('.filter-menu').removeClass('active')
        });
    }
    function initSwiperWhyUs(){
        let swiper = new Swiper('.swiper--whyus', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 4,
            spaceBetween: 40,
            speed: 600,
            navigation: {
                nextEl: '.whyus--next',
                prevEl: '.whyus--prev',
            },
            pagination: {
                el: ".whyus--pagination",
                clickable: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 1
                }
            }
        });
    }
    function initSwiperRooms(){
        swiperRooms = new Swiper('.swiper--rooms', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 600,
            navigation: {
                nextEl: '.rooms--next',
                prevEl: '.rooms--prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                }
            }
        });
    }
    function initSwiperTestimonials(){
        let swiper = new Swiper('.swiper--testimonials', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 3,
            spaceBetween: 20,
            speed: 600,
            pagination: {
                el: ".testimonials--pagination",
                clickable: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.1
                }
            }
        });
    }
    function initSwiperPartnership(){
        let swiper = new Swiper('.swiper--partnership', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 5,
            spaceBetween: 60,
            speed: 600,
            breakpoints: {
                640: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                }
            },
            navigation: {
                nextEl: '.partnership--next',
                prevEl: '.partnership--prev',
            }
        });
    }
    function initSwiperBlogs(){
        let swiper = new Swiper('.swiper--blogs', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 3,
            spaceBetween: 20,
            speed: 600,
            breakpoints: {
                640: {
                    slidesPerView: 1.2
                }
            }
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
    $('.swiper--rooms .swiper-slide').each(function(idx) {
        $(this).click(() => {
            swiperRooms.slideTo(idx)
        })
    });
    initSwiperRooms();
    initSwiperJumbotron();
    initSwiperFilters();
    initSwiperWhyUs()
    initSwiperTestimonials()
    initSwiperPartnership()
    initSwiperBlogs()
    if(isMobile) {
        initSwiperTabFilters()
    }
});
}(jQuery));