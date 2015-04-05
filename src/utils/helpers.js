(function(window, undefined) {
  'use strict';
  
  var Helpers = {};

  Helpers.Template = {
    render: function(template, data) {
      var i;
      for (i in data) {
        var regex = new RegExp("{{" + i + "}}", 'gi');
        template = template.replace(regex, data[i]);
      }
      return template;
    }
  };

  window.Helpers = Helpers;
})(window);