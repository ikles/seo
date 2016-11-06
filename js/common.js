$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


  (function () {
    var top = $('.top');
    top.prependTo('.main');  
  }());




















}); //end ready