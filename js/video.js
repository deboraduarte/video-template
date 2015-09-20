$(function(){
  $('#player').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' })
  // If you want to keep full screen on window resize
  $(window).resize(function(){
    $('#player').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px', })
  })
})

var tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

function onYouTubeIframeAPIReady(){
    var player = new YT.Player('player',{
        videoId: 'TtVxbTuOLTU' ,
        playerVars: {
         'controls': 0 ,
         'autohide': 0
        },
        events: {
            'onReady' : onPlayerReady,
            'onStateChag': onPlayerStateChange
        }
    })
}

function onPlayerReady(event){
    $('#btn-play').on('click', function() {
        $('.image-video').css('display', 'none')
        $('.video').css('display', 'block')
        $('#btn-play').css('display', 'none')
        $('#btn-pause').css('display','block')
        $('.texto').css('visibility', 'hidden')
        $('.form').css('visibility', 'hidden')
        event.target.playVideo()
    })
    $('#btn-pause').on('click', function() {
        $('.image-video').css('display', 'block')
        $('.video').css('display', 'none')
        $('#btn-play').css('display', 'block')
        $('#btn-pause').css('display','none')
        $('.texto').css('visibility', '')
        $('.form').css('visibility', '')
        event.target.stopVideo()
    })

}


function onPlayerStateChange(event){
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000)
        done = true
    }
}
autoplay = 0
function activeMenu(event){

}

