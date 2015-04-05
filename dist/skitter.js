/*! skitter-slideshow by Thiago Silva Ferreira - v5.0.0 - 2015-04-05 */
(function($, window, undefined) {
  'use strict';

  /**
   * Skitter plugin constructor
   * @constructor
   * @param {object} context - Context element
   * @param {object} options - Options
   */
  var Skitter = function(context, options) {
    var defaults = {
      theme: "default", 
      width: 800, 
      height: 300, 
      duration: 3500, 
      responsive: true
    };
    this.context = context;
    this.options = $.extend(defaults, options);
    this.init();
  };

  /** Animations */
  Skitter.prototype.animations = {};

  /** Markup structures */
  Skitter.prototype.structure = {
    container: '
      <div class="skitter-all-slides">
      </div>
    ',
    navigation: '
      <div class="skitter-navigation">
        <div class="skitter-prev"></div>
        <div class="skitter-next"></div>
      </div>
    ', 
    item: '
      <div class="skitter-container-item">
        <div class="skitter-item">
          {{content}}
        </div>
        <div class="skitter-label">
          {{label}}
        </div>
      </div>
    '
  };

  /** Init methods */
  Skitter.prototype.init = function() {
    this.loadSlides();
    this.resetData();
    this.onResize();
    this.start();
  };

  /** Load slides */
  Skitter.prototype.loadSlides = function() {
    var self = this;

    this.container = $( Helpers.Template.render(this.structure.container) );
    this.navigation = $( Helpers.Template.render(this.structure.navigation) );
    this.context.addClass( this.options.theme );

    this.map_animation = [];

    this.context.find("li").each(function() {
      var label = $(this).find(".label").html();
      var item = $(this).clone();
      item.find(".label").remove();
      var data_item = {
        content: item.html(), 
        label: label
      };
      var item = $( Helpers.Template.render(self.structure.item, data_item) );
      self.container.append(item);
      self.map_animation[ $(this).index() ] = {
        animation: $(this).data("animation") || null, 
        duration: $(this).data("duration") || null
      };
    });

    this.context.append(this.navigation);
    this.context.append(this.container);
  };

  /** Reset data */
  Skitter.prototype.resetData = function() {
    this.current_index = 0;
  };

  /** Set dimensions */
  Skitter.prototype.onResize = function() {
    var width = this.options.width || $(window).width();
    var height = this.options.height || $(window).height();
    var dimensions = { width: width, height: height };

    this.container.css(dimensions);
    this.container.find(".skitter-item").css(dimensions);
    this.container.find(".skitter-container-item").css(dimensions);
  };

  /** Start */
  Skitter.prototype.start = function() {
    this.toSlide( this.current_index + 1 );
  };

  /** Start */
  Skitter.prototype.toSlide = function(index) {
    
  };

  /** Next */
  Skitter.prototype.next = function() {
    console.log("next", arguments);
  };

  /** Prev */
  Skitter.prototype.prev = function() {
    console.log("prev", arguments);
  };

  /** Pause */
  Skitter.prototype.pause = function() {
    console.log("pause", arguments);
  };

  /** Resume */
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

(function(window, undefined) {
  'use strict';
  
  Skitter.prototype.animations.fade = function() {
    console.log("fade animation");
  };
})(window);