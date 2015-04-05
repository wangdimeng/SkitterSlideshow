(function($, window, undefined) {

  $(function() {
    var skitter = new Skitter($(".skitter"), {
      duration: 2000,
      easing: "easeInOutQuad"
    });
    skitter.next();
    skitter.prev();
    skitter.pause();
    skitter.resume();
  });

})(jQuery, window);