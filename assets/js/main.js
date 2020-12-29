$(document).ready(function(){
    $('.nav-button').click(function(){
      $('body').toggleClass('nav-open');
    });

    /* First option in SELECT tag need to be BLANK */
/*$('.form-control').on('focus blur', function (e) {
     $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');*/

/* First option in SELECT tag don't need to be BLANK */
$('.form-control').on('focus blur change', function (e) {
	var $currEl = $(this);
  
  if($currEl.is('select')) {
  	if($currEl.val() === $("option:first", $currEl).val()) {
    	$('.control-label', $currEl.parent()).animate({opacity: 0}, 240);
      $currEl.parent().removeClass('focused');
    } else {
    	$('.control-label', $currEl.parent()).css({opacity: 1});
    	$currEl.parents('.form-group').toggleClass('focused', ((e.type === 'focus' || this.value.length > 0) && ($currEl.val() !== $("option:first", $currEl).val())));
    }
  } else {
  	$currEl.parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
  }
}).trigger('blur');

$('label span').click(function() {
  $('label span').removeClass('btn-color');
    $(this).toggleClass('btn-color'); 
 
    // $(this).find('.btn').toggleClass('btn-default').animate({  background: "#fff",
    // width: 0}, 240);
});

  });