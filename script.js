const hamMenu = document.querySelector('.hamburger-menu');
const offscreenMenu = document.querySelector('.offscreen-menu');
const navbarList = document.querySelector('.navbar-list');
const navbarLinks = navbarList.querySelectorAll('li');

window.addEventListener('load', () => {
  //Loading screen
  var div = $('#overlay');
  // div.fadeOut(1300);
  div.fadeOut(0);
  //Navbar animation
  navbarList.classList.add('active');
  document.querySelector('.navbar-list li').classList.add('active');


});

//Hamburger menu transformation
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offscreenMenu.classList.toggle('active');
});


navbarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Remove the active class from all links
    navbarLinks.forEach((link) => link.classList.remove('active'));
    // Add the active class to the clicked link
    event.target.parentElement.classList.add('active');
  });
});


// document.querySelectorAll('.navbar-list li a').forEach(link => {
//   link.addEventListener('click', e => {
//     const className = e.target.parentElement.className;
//     const selectedDiv = document.querySelector(`#${className.split('-')[0]}`);
//     const otherDivs = document.querySelectorAll(`section:not(#${className.split('-')[0]})`);
//     selectedDiv.style.display = 'block';
//     otherDivs.forEach(div => div.style.display = 'none');
//   });
// });



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


$(document).ready(function(){
  $("#myForm").submit(function(event){
      event.preventDefault();

      var formData = {
          name: $("#name").val(),
          email: $("#email").val(),
          message: $("#message").val()
      };

      // $.ajax({
      //     method: 'POST',
      //     url: 'https://formsubmit.co/b88cf1c56dd32e2515a9be585bc0a14c',
      //     dataType: 'json',
      //     accepts: 'application/json',
      //     data: formData,
      //     success: (data) => console.log("success"),
      //     error: (err) => console.log("error")
      // });

      $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/amiralimg@yahoo.com',
        dataType: 'json',
        accepts: 'application/json',
        data: {
            name: "FormSubmit",
            message: "I'm from Devro LABS"
        },
        success: (data) => console.log(data),
        error: (err) => console.log(err)
    });
  });
});