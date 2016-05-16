
$(document).ready(function(){/* off-canvas sidebar toggle */

$('[data-toggle=offcanvas]').click(function() {
  	$(this).toggleClass('visible-xs text-center');
    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
    $('.row-offcanvas').toggleClass('active');
    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
    $('#btnShow').toggle();
});
});

var $grid = $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 0
});

var grid;
function resize(){
  var w = window.outerWidth;
  if( w < 768 ){
    grid = document.getElementsByClassName("grid-item");
    $(grid).removeClass("grid-item");
    setTimeout(function(){
      $grid.masonry('layout');
    } ,1000);

  }
}
