/*global $,Swiper, navigator*/
(function () {
    let sidebarStatus = false
    $('.burger-button').click(() => {
        const icon = sidebarStatus ? 'burger-icon.png' : 'close-icon.png'
        $('.burger-button').attr('src', 'assets/images/icons/'+icon)
        sidebarStatus ? $('.sidebar').removeClass('show') : $('.sidebar').addClass('show');

        sidebarStatus=!sidebarStatus
    })
}(jQuery));