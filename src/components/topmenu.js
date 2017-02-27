class Topmenu {
  static init(menuObj) {
    if (!menuObj)
      this.defaults = {
        file: {
          name: "File",
          sub: ["New window", "Close", "Exit"]
        },
        edit: {
          name: "Edit",
          sub: ["Paste", "Copy", "Cut"]
        },
        help: {
          name: "Help",
          sub: ["About"]
        }
      }
    else console.log(menuObj);
    $('*').click((e) => {
      if (!e.target.className.match(/(menu-item|submenu-item)/)) {
        $('.submenu').hide();
        $('.menu-item.selected').removeClass('selected');
      }
    });
  }
  static appear(time) {
    $('.topmenu').fadeIn(time);
  }
  static renderDefault() {
    for (let item in this.defaults) {
      let name = this.defaults[item].name;
      Topmenu.renderOne($('.topmenu'), 'menu-item', name);
      Topmenu.renderOne($('.menu-item#'+ name), 'submenu');
      for (let subItem of this.defaults[item].sub) {
        Topmenu.renderOne(
          $('.menu-item#' + name + ' .submenu'),
          'submenu-item',
          subItem
        );
      }
    }
  }
  static renderOne(appendIn, className, innerHTML) {
    let tmpElement = document.createElement('div');
    tmpElement.className = className;
    tmpElement.onclick = Topmenu.openMenu;
    if (innerHTML)
      tmpElement.innerHTML = tmpElement.id = innerHTML;
    appendIn.append(tmpElement);

  }
  static openMenu(e) {
    if ($(this).hasClass('menu-item')) {
      $('.menu-item').removeClass('selected');
      $(this).addClass('selected');
      $('.submenu').hide();
      $('#'+this.id+' .submenu').slideDown(50);
    }
  }
}
