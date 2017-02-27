class Desktop {
  static load() {
    $(window).resize(Desktop.fitToScreen);
    $('.desktop-group').show(800);
    Desktop.fitToScreen();
    Topmenu.appear(500);
    Topmenu.init();
    Topmenu.renderDefault();
    Bottompanel.init();
  }
  static fitToScreen() {
    $('.desktop-group').width($(window).width());
    $('.desktop-group').height($(window).height());
    Bottompanel.centrelized();
  }
  static showContext() {

  }
  static showControls() {}
}
