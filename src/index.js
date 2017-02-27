console.log('Markich OS is running');

ViewHelper.init();
ViewHelper.findIncludes().then((res) => {
  Welcomescreen.disappear(0);
  Welcomescreen.appear(3000);
  setTimeout(() => {
    Welcomescreen.disappear(2000, true);
  }, 4000);
});
