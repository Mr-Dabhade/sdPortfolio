$(document).ready(function(){
    
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student","Student"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

  
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


const toggleBtn = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const icon = toggleBtn.querySelector("i");
const menuLinks = document.querySelectorAll("#sidebar .menu a");

toggleBtn.addEventListener("click", () => {

  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  } else {
    sidebar.classList.add("active");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }

});

/* menu click → close sidebar */
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});



document.addEventListener("DOMContentLoaded", function () {

  (function(){
    emailjs.init("xPcqzZ4F-thO3As2r");
  })();

  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Contact form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ⭐ MOST IMPORTANT

    emailjs.sendForm(
      "service_srz2bk8",
      "template_ricq0re",
      form
    ).then(
      function () {
        document.querySelector(".button-area").innerHTML =
  "<span style='color:#4ade80;'>Message sent successfully 💙 I will reply to you soon. Thank you!</span>";
 form.reset();
      },
      function (error) {
        console.log(error);
        alert("Failed to send message ❌");
      }
    );
  });

});

