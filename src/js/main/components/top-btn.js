$(function () {
  const $topButton = $('[data-role="scroll-top"]')
  let wHeight = screen.height

  $(window)
    .scroll(function () {
      const tScroll = $(this).scrollTop()

      if (tScroll > wHeight) {
        $topButton.addClass('show')
      } else {
        $topButton.removeClass('show')
      }
    })

  $topButton
    .on('click', function(e){
      e.preventDefault()
      $('html,body').animate({
        scrollTop: 0
      }, 1000)
    })
})
