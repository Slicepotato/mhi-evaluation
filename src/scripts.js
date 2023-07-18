$( document ).ready(function() {
    $('.navbar-toggler').on('click', function() {
        $(this).next('#mainNav').toggleClass('show');
    });

    $(".clickable-row").on('click', function() {
        window.location = $(this).data("href");
    });
});
