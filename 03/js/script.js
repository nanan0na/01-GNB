// HTML 구조 파악이 끝난 후 실행
$(function () {
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;
  const $window = $(window);

  $menu.on('mouseenter', function () {
    $(this).addClass('on');
    $header.addClass('active');
    $submenu.stop().slideDown(duration);
  });
  $menu.on('mouseleave', function () {
    $menu.removeClass('on');
    $header.removeClass('active');
    $submenu.stop().slideUp(duration);
  });

  // 마우스 휠을 조작했을 때 : wheel
  $window.on('wheel', function (e) {
    e.originalEvent.wheelDelta > 0 ? $header.removeClass('hide') : $header.addClass('hide');
  });
});
