$(function () {
    const $groupOpen = $('[data-role="folder-toggle"]')
    const $dropShow = $('[data-role="drop-toggle"]')

    $groupOpen
      .on('click', function (e) {
          const $t = $(this)
          const $parent = $t.parent('[data-role="folder"]')
          const $content = $('[data-role="folder-content"]', $parent)
          e.preventDefault()
          e.stopPropagation()
          $t.toggleClass('open')
          if ($t.hasClass('open')) {
              $content.eq(0).slideDown(400)
          } else {
              $('.open', $parent).removeClass('open')
              $content.slideUp(400)
          }
      })

    $dropShow
      .on('click', function (e) {
          const $t = $(this)
          const $parent = $t.parent('[data-role="drop"]')
          const $content = $('[data-role="drop-content"]', $parent)
          e.preventDefault()
          e.stopPropagation()
          $t.toggleClass('open')
          if ($t.hasClass('open')) {
              $content.eq(0).fadeIn(400)
          } else {
              $('.open', $parent).removeClass('open')
              $content.fadeOut(400, function () {
                  $('[data-role="folder-content"]', $parent).hide()
              })
          }
      })
})
