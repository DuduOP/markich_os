class Bottompanel {
  static init() {
    $('.bottompanel').show();
    Bottompanel.centrelized();
  }
  static centrelized() {
    $('.bottompanel').offset({left: $(window).width()/2 - $('.bottompanel').width()/2})
  }
  static setAvailableApps(arr) {
    this.apps = arr;
  }
  static addApp(app) {
    this.apps.push(app);
  }
}
