const hamMenu = document.querySelector('.hamburger-menu');
const offscreenMenu = document.querySelector('.offscreen-menu');
const navbarList = document.querySelector('.navbar-list');
const navbarLinks = navbarList.querySelectorAll('li');

window.addEventListener('load', () => {

  // Get the current URL
  var currentUrl = window.location.href;

  // Get the query string from the URL
  var queryString = currentUrl.split('?')[1];

  // Create an instance of URLSearchParams
  var urlParams = new URLSearchParams(queryString);

  // Get the value of a specific query string parameter
  var success = urlParams.get('success');

  //Loading screen
  var div = $('#overlay');
  div.fadeOut(1300);
  div.fadeOut(0);
  //Navbar animation
  navbarList.classList.add('active');
  document.querySelector('.navbar-list li').classList.add('active');


  if (success == "True") {
    setTimeout(function () {
      history.pushState("", document.title, window.location.pathname);
    }, 500);

    navbarLinks.forEach((link) => link.classList.remove('active'));
    document.querySelector('.navbar-list li:nth-child(3)').classList.add('active');

    $("#home").animate({ height: "0px" }, 500, function () {
      $("#home").hide();
      $("#contact").show().animate({ height: "100%" }, 500);
    });
  }


});

//Hamburger menu transformation
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offscreenMenu.classList.toggle('active');
});


//Activates navbar links
navbarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Remove the active class from all links
    navbarLinks.forEach((link) => link.classList.remove('active'));
    // Add the active class to the clicked link
    event.target.parentElement.classList.add('active');
  });
});


$(".navbar-list li").click(function () {
  // Get the ID of the section to show
  var arr = $(this).attr("class");
  //Format the class name
  var divId = arr.split(" ")[0];

  //Find the current visible section
  var visibleDiv = $("section:not(:hidden)");
  //Replace current section with the new one
  visibleDiv.animate({ height: "0px" }, 500, function () {
    $(visibleDiv).hide();
    $("#" + divId).show().animate({ height: "100%" }, 500);
  });
});

