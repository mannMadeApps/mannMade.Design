
// SKills Bars V2
// https://stackoverflow.com/questions/4627203/jquery-trigger-action-when-a-user-scrolls-past-a-certain-part-of-the-page
$triggered_times = 0;
$(window).on('scroll', function() {

        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 150;   // set to whatever you want it to be

        if(y_scroll_pos > scroll_pos_test && $triggered_times == 0 ) {

            //do your stuff over here
            $('.skill-percent').each(function(){
              $(this).animate({
                width:$(this).attr('data-percent')},"fast");
              });

            $triggered_times = 1;   // to make sure the above action triggers only once

        }
});

// Simple Parallax https://github.com/pixelcog/parallax.js/
$('.parallax-window').parallax({imageSrc: '../img/background.jpg'});

// Scroll to contact form on click of contact-btn
$('.contact-btn').click(function() {
  $('html,body').animate({
    scrollTop: $('#contact').offset().top},
    'slow');
});

// alert('Testing', 'Its working to this point!');
