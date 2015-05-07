$(document).ready(function() {

  $("#basic").hover(function () {
  $(this).find(".item_header").css({"background-color":"#d9638e"});
  },

  function () {
  $(this).find(".item_header").css({"background-color":"#E5C5B6"});
  });

  $("#premium").hover(function () {
  $(this).find(".item_header").css({"background-color":"#d9638e"});
  },

  function () {
  $(this).find(".item_header").css({"background-color":"#E5C5B6"});
  });

  $("#platinum").hover(function () {
  $(this).find(".item_header").css({"background-color":"#d9638e"});
  },

  function () {
  $(this).find(".item_header").css({"background-color":"#E5C5B6"});
  });

});
