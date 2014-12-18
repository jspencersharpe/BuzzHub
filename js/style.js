/*$('.ratings_stars').click(function(){
  $(this).toggleClass('highlight');
})*/

$('.ratings_stars').hover(
    // Handles the mouseover
    function() {
        $(this).prevAll().andSelf().addClass('highlight');
        $(this).nextAll().removeClass('highlight'); 
    },
    // Handles the mouseout
    function() {
        $(this).prevAll().andSelf().removeClass('highlight');
        //set_votes($(this).parent());
    }
  );
  $('.ratings_stars').bind('click', function() {
    var star = this;
    var widget = $(this).parent();
    });
