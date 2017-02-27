class Welcomescreen {
  static appear(time) {
    $('.welcomescreen').fadeIn(time);
  }
  static disappear(time, wrapper) {
    $('.welcomescreen').fadeOut(time);
    if (wrapper) {
      setTimeout(()=>{
        $('.welcomescreen-wrapper').remove();
      },time + 300);
    }
  }
}
