//Adaptive functions
$(window).resize(function (event) {
   adaptive_function();
});
function adaptive_header(w, h) {
      var headerMenu = $('.header-menu');    //переменные
      var headerLang = $('.language');
   if (w < 767){
      if (!headerLang.hasClass('done')) {
         headerLang.addClass('done').appendTo(headerMenu);
      }
   } else {
      if (headerContacts.hasClass('done')) {
         headerContacts.removeClass('done').appendTo(headerMenu);
      }
   }
}
function adaptive_function() {
      var w = $(window).outerWidth();
      var h = $(window).outerHeight();
   adaptive_header(w, h);
}
adaptive_function();