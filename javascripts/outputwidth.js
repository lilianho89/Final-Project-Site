var outputwidth = function() { console.log("width: "+ window.innerWidth)  };

jQuery(document).ready(function ($) {
  outputwidth();
  $(window).on('resize', function() {
    outputwidth();
  });
});
