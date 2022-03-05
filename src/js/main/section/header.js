$(function () {
  const $header = $('[data-role="fixed-header"]')
  const $menu = $('[data-role="mobile-menu"]')
  const $sandwich = $('[data-role="menu-toggle"]')
  const hHeight = $header.outerHeight(true)
  let wWidth = screen.width
  let wHeight = screen.height
  let tScroll = $(window).scrollTop()

  function showMenu() {
    $header.addClass('open')
    $menu.slideDown(400)
  }

  function hideAll() {
    $sandwich.removeClass('active')
    $('[data-role="drop-toggle"],[data-role="folder-toggle"]', $header).removeClass('open')
    $('[data-role="drop-content"]', $header).fadeOut(400)
    $('[data-role="folder-content"]', $header).slideUp(400)
    $menu.slideUp(400, function () {
      $header.removeClass('open')
    })
  }

  function fixedHeader(ts) {
    if (ts > 0) {
      if (wWidth < 1024) $header.addClass('fixed')
    } else {
      $header.removeClass('fixed')
    }
  }

  function setMenuHeight(ww) {
    if (ww < 768) {
      $menu.height(wHeight - hHeight)
    } else {
      $menu.css({
        'height': 'auto',
        'max-height': wHeight - hHeight
      })
    }
  }

  fixedHeader(tScroll)

  $(window)
    .on('click', function(e){
      const toggles = $('[data-role="drop-toggle"]').get()

      if (!toggles.includes(e.target)) hideAll()
    })
    .resize(function () {
      wWidth = screen.width
      wHeight = screen.height
      setMenuHeight(wWidth)
      hideAll()
      fixedHeader(tScroll)
    })
    .scroll(function () {
      tScroll = $(this).scrollTop()
      hideAll()
      fixedHeader(tScroll)
    })

  $sandwich
    .on('click', function (e) {
      e.preventDefault();
      e.stopPropagation()
      setMenuHeight(wWidth)
      $(this).toggleClass('active')
      if ($(this).hasClass('active')) {
        showMenu()
      } else {
        hideAll()
      }
    })
});
