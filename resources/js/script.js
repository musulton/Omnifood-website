$(document).ready(function() {
    // $('h1').click(function() {
    //     $(this).css('background-color', 'red')
    // })

    $('.js--section-features').waypoint(function(direction) {
        console.log('msuk')
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    })
})