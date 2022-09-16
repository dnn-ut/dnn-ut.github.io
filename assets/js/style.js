$(function() {
    var screen_resize_handler = function() {
        if ($(window).width() > 768) {
            $('#course_outline_table').removeClass('table-responsive');
        } else {
            $('#course_outline_table').addClass('table-responsive');
        }
    };
    screen_resize_handler();
    $(window).resize(screen_resize_handler);
});
