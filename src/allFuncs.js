// function myMap() {
//   var myCenter = new google.maps.LatLng(41.878114, -87.629798);
//   var mapProp = {center:myCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
//   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//   var marker = new google.maps.Marker({position:myCenter});
//   marker.setMap(map);
// }

$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $("#program1").hide();
  $("#program2").hide();
  $("#program3").hide();
  $("#program4").hide();
  $("#program5").hide();
  $("#program6").hide();

  $("#showProg1").on('click', function(event) {
    $("#program1").show();
    $("#mainPage").hide();
    $("#program2").hide();
    $("#program3").hide();
    $("#program4").hide();
    $("#program5").hide();
    $("#program6").hide();
    window.scrollTo(0, 0);
    event.stopPropagation();
  });

  $("#showProg2").on('click', function(event) {
    $("#program2").show();
    $("#mainPage").hide();
    $("#program1").hide();
    $("#program3").hide();
    $("#program4").hide();
    $("#program5").hide();
    $("#program6").hide();
    window.scrollTo(0, 0);
    event.stopPropagation();
  });

  $("#showProg3").on('click', function(event) {
    $("#program3").show();
    $("#mainPage").hide();
    $("#program2").hide();
    $("#program1").hide();
    $("#program4").hide();
    $("#program5").hide();
    $("#program6").hide();
    window.scrollTo(0, 0);
    event.stopPropagation();
  });

  $("#showProg4").on('click', function(event) {
    $("#program4").show();
    $("#mainPage").hide();
    $("#program2").hide();
    $("#program3").hide();
    $("#program1").hide();
    $("#program5").hide();
    $("#program6").hide();
    window.scrollTo(0, 0);
    event.stopPropagation();
  });

  $("#showProg5").on('click', function(event) {
    $("#program5").show();
    $("#mainPage").hide();
    $("#program2").hide();
    $("#program3").hide();
    $("#program4").hide();
    $("#program1").hide();
    $("#program6").hide();
    window.scrollTo(0, 0);
    event.stopPropagation();
  });

  $("#showProg6").on('click', function(event) {
    $("#program6").show();
    $("#mainPage").hide();
    $("#program2").hide();
    $("#program3").hide();
    $("#program4").hide();
    $("#program5").hide();
    $("#program1").hide();
    window.scrollTo(0, 0);
    event.stopPropagation();
  });

  $("#sendBtn").on('click', function(event) {

    var name = $("#name").val();
    var email = $("#email").val();
    var comments = $("#comments").val();

    console.log(name, email, comments);
  });
});
