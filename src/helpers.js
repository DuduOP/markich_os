class ViewHelper {
  static init() {
    console.log('--- Helpers were loaded');
  }

  static findIncludes() {
    let def = $.Deferred();
    $('include-view').each(($i, $element) => {
      let path = $element.getAttribute('path'),
          className = path.substring(path.search('/') + 1);
      $.get(ViewHelper.validatePath(path)).then((res) => {
        if (res) {
          ViewHelper.includeFile($element, className, res);
          def.resolve(true);
        }
        else def.reject(false);
      });
    });
    return def.promise();
  }

  static includeFile(element, className, context) {
    let node = document.createElement('div');
    node.innerHTML = context;
    node.className = className;
    element.className = className +'-wrapper';
    element.appendChild(node);
  }

  static validatePath(path) {
    return '/src/' + path + '.html';
  }
}
