$('.facebook').click(() => {
  alert('facebook')
})
$('.instagram').click(() => {
  alert('instagram')
})
$('.twitter').click(() => {
  alert('twitter')
})
$('.youtube').click(() => {
  alert('youtube')
})

// $('body').scrollTop(() => {
//   $('.menu').css({
//     background: 'rgba(0, 0, 0, 0.720)'
//   })
// })

var vid = $('.video')[0]
// const playVideo = () => {
//   vid.play()
// }

const showVideo = () => {
  $('.conteiner').addClass('remuve')
  $('.menu').addClass('remuve')
  $('.conteiner-video').addClass('conteiner-video-show')

  vid.paused ? vid.play() : vid.pause()
}

$('.go-back').click(() => {
  $('.conteiner').removeClass('remuve')
  $('.menu').removeClass('remuve')
  $('.conteiner-video').removeClass('conteiner-video-show')
  vid.pause() ? vid.play() : vid.pause()
})

$(document).ready(() => {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSilerLoad: () => {
      $('#autoWidth').removeClass('cs-hidden')
    }
  })
})

let cont = 1
$('#icon-menu').click(() => {
  if (cont == 1) {
    $('.menu').addClass('menuForMobile')
    $('.menu ul').addClass('ul-mobile')
    $('.menu li').addClass('li-mobile')
  } else {
    $('.menu').removeClass('menuForMobile')
    $('.menu ul').removeClass('ul-mobile')
    $('.menu li').removeClass('li-mobile')
  }
  cont == 1 ? (cont = 0) : (cont = 1)
})
