$(function () {

  var win = $(window);

  win.resize(function () {
    var win_w = win.width() + 100,
        $bg = $('#background'),

        available = [
          800, 1024, 1280, 1366,
          1400, 1680, 1920,
          2560, 3840, 4860
        ],
        current = $bg.attr('src').match(/([0-9]+)/) ? RegExp.$1 : null;

    if (!current || ((current < win_w) && (current < available[available.length - 1]))) {
      var chosen = available[available.length - 1];

      for (var i = 0; i < available.length; i++) {
        if (available[i] >= win_w) {
          chosen = available[i];
          break;
        }
      }

      var url = STATIC_URL + 'images/backgrounds/bg' + chosen + '.jpg';
      document.cookie=BACKGROUND_COOKIE_NAME + '=' + url;
      $bg.attr('src', url);
    }

    $bg.css({width: '100%', height: 'auto'});
  }).resize();
});
