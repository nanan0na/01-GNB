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
    // 마우스 휠을 조작했을 때의 이벤트 정보를 보자
    // console.log(e); //휠을 내리면 음수, 올리면 양수로 보임
    // console.log(e.originalEvent.wheelDelta);

    if (e.originalEvent.wheelDelta > 0) {
      // 휠을 올린 상태
      $header.removeClass('hide');
    } else {
      // 휠을 내린 상태
      $header.addClass('hide');
    }
  });
});
