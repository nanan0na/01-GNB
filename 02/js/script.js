// HTML 구조 파악이 끝난 후 실행
$(function () {
  // 대상을 변수에 저장
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;
  const $header = $('#header');

  // 메뉴에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    // 진입한 영역의 메뉴에 on클래스 부여
    $(this).addClass('on');
    // 서브메뉴를 활성화 = 보이게 = slide down
    $submenu.stop().slideDown(duration);

    /* 헤더에 active 클래스 부여 */
    $header.addClass('active');
  });

  // 메뉴에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');

    /* 헤더에 active 클래스 삭제 */
    $header.removeClass('active');
  });
});
