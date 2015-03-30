(function($, window, undefined) {
  /**
   * Skitter plugin constructor
   * @constructor
   * @param {object} context - Context element
   * @param {object} options - Options
   */
  var Skitter = function(context, options) {
    var defaults = {
      duration: 3500, 
      responsive: true
    };
    this.context = context;
    this.options = $.extend(defaults, options);
    this.init();
  };

  Skitter.prototype.animations = {};

  Skitter.prototype.init = function() {
    
  };

  Skitter.prototype.next = function() {
    console.log("next", arguments);
  };

  Skitter.prototype.prev = function() {
    console.log("prev", arguments);
  };

  Skitter.prototype.pause = function() {
    console.log("pause", arguments);
  };

  Skitter.prototype.resume = function() {
    console.log("resume", arguments);
  };

  /** jQuery plugin */
  $.fn.skitter = function(options) {
    return this.each(function() {
      var context = $(this);
      if (!context.data("skitter")) {
        var skitter = new Skitter(context, options);
        context.data("skitter", skitter);
      } else if (typeof options === "string") {
        var object = context.data("skitter");
        object[options].apply(this, arguments);
      }
    });
  };

  window.Skitter = Skitter;
})(jQuery, window);