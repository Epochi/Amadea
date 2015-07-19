$('a.scrolly').click(function(){
  $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1200, "easeInOutCubic");
    return false;
});




//initialize popovers

$(function () {
  $('[data-toggle="popover"]').popover()
});

//add popover html attributes(for cleanerer html)
$('.popover-helper').attr({
    "data-toggle" : "popover",
    "data-placement" : "right",
    "data-trigger" : "hover",
    "data-container" : "body"
});

//switch icon after click


$('.InnerAcc').on('show.bs.collapse', function(e){
        //e.stopPropagation();
        var thisID = $(this).attr('id');
        var locator = "." + thisID + "-i";       
        $(this).parent().find(locator).switchClass( 'glyphicon-menu-right', 'glyphicon-menu-down');  

        if ($(this).siblings().hasClass('in')) {  
          var scrollDurr = ($(this).offset().top - $('#services').offset().top);
          if (scrollDurr > 0) {
            $('html, body').animate({
            scrollTop: $('#services').offset().top},0); 
          };          
          $('#accordion1 > .InnerAcc.in').collapse('hide');
        };               

});

$('.InnerAcc').on('hide.bs.collapse', function(e){
        //e.stopPropagation();
        var thisID = $(this).attr('id');
        var locator = "." + thisID + "-i";
        $(this).parent().find(locator).switchClass( 'glyphicon-menu-down', 'glyphicon-menu-right');     
});

//dont let clicking children to switch the icon of parent
$('.deepest-acc').on('hidden.bs.collapse', function(e){
        e.stopPropagation(); 
});
$('.deepest-acc').on('show.bs.collapse', function(e){
        e.stopPropagation();
});

//prevent collapse when panel is showing
$('.custom-nav').on('click', function(e){
  e.preventDefault();
  var thisID = $(this).attr('href');
  var thisTab = $(this).find('a');
    if(!$(this).hasClass('active') && $(this).siblings().hasClass('active')  && !$(thisID).siblings().hasClass('collapsing')){
      $(thisID).collapse('toggle');
      $(thisTab).tab('show')
    } else if(!$(thisID).hasClass('in') && !$(thisID).hasClass('collapsing')  && !$(thisID).siblings().hasClass('collapsing')){
       $(thisID).collapse('toggle');
       $(thisTab).tab('show')
     } else if ($(thisID).hasClass('in') && $(this).hasClass('active')){
      $(thisID).collapse('toggle');
      $(this).removeClass('active');
    }
  });


