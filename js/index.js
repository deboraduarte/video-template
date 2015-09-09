$(function(){
  $('ul.nav-group li a').each(function(){
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1)
    if($(this).attr('href') == pgurl){
        $(this).addClass('a-visited')
    }
  })

})

