window.$ = window.jQuery = require("jquery");
global.Popper = require("popper.js");
var bootstrap = require("bootstrap");
var magnificPopup = require("magnific-popup");
var matchHeight = require("jquery-match-height");

$(".dropdown-chevron-mobile").on("click", function(e) {
  e.preventDefault();

  // Toggles the arrow class on itself.
  $(this).toggleClass("open");

  // Get the parent list item and its id.
  var parent = $(e.target).parent("li");
  parent.children("ul").toggleClass("open");
});

/* Back to top */
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn();
  } else {
    $(".back-to-top").fadeOut();
  }
});

$(".back-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

/* Match height */
$(".pricing-card-features").matchHeight();
$(".panel").matchHeight();

/* Magnific Popup */
$(".image-link").magnificPopup({
  type: "image",
  gallery: {
    enabled: true
  }
});


  // var color = ["#708284","#536870","#475B62","#0A2933","#042029","#FCF4DC","#EAE3CB","#A57706","#BD3613","#D11C24","#C61C6F","#595AB7","#2176C7","#259286","#738A05"];

  

  var safeColors = ['0A','25','62','80','0C','E0'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;

   
};

  $(".blog-post-img").each(function(i) {
    $(this).css("background-color", randomColor());
  });  



      jQuery(".skillbar").each(function() {
        jQuery(this)
          .find(".skillbar-bar")
          .animate({ width: jQuery(this).attr("data-percent") }, 6e3);
      });
 
   
        // Configure/customize these variables.
        var showChar = 100;  // How many characters are shown by default
        var ellipsestext = "...";
        var moretext = "Show more >";
        var lesstext = "< Show less";
        
    
        $('.more').each(function() {
            var content = $(this).html();
     
            if(content.length > showChar) {
     
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
     
                var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
     
                $(this).html(html);
            }
     
        });
     
        $(".morelink").click(function(){
            if($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).html(moretext);
            } else {
                $(this).addClass("less");
                $(this).html(lesstext);
            }
            $(this).parent().prev().toggle();
            $(this).prev().toggle();
            return false;
        });

        var contactform =  document.getElementById('contact-form');
    contactform.setAttribute('action', '//formspree.io/' + 'ste' + '@' + 'thewhitefox' + '.' + 'ninja');
 
  