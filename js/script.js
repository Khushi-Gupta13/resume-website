$(document).ready(function() {
    $('nav ul li a').on('click', function(event) {
        event.preventDefault();
        var targetPage = $(this).attr('href');
        $('main').load(targetPage + ' main > *');
    });
});
