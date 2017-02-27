class Desktop {
  static load() {
    this.desktopAll = $('.desktop-group');
    $(window).resize(Desktop.fitToScreen);
    this.desktopAll.show(800);
    Desktop.fitToScreen();
    Topmenu.appear(500);
    Topmenu.init();
    Topmenu.renderDefault();
  }
  static fitToScreen() {
    this.desktopAll.width($(window).width());
    this.desktopAll.height($(window).height());
  }
  static showContext() {

  }
  static showControls() {}
}
