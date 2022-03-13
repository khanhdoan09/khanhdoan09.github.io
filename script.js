// document.querySelector("#toggle-nav").addEventListener('click',(e)=>{
//     let sideNav = document.querySelector("#navbarNav")
//     sideNav.classList.toggle('hidden')
// })

let listNav = document.querySelectorAll(".nav-link")
Array.from(listNav).forEach((element, index) => {
  element.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active')
    element.classList.add('active')
  })
});


// ?????????? show active by hover mouse
function check(element) {
  if (!element.matches('.active')) {
    element.addEventListener('mouseover', () => {
      element.classList.add('active')
    })
    element.addEventListener('mouseout', () => {
      element.classList.remove('active')
    })
  }
}

$(document).ready(() => {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= $('#project').offset().top + $('#project').outerHeight() - window.innerHeight) {
      $("#bar-html").animate({
        width: "50%"
      }, {
        duration: 600
      })
      $("#bar-css").animate({
        width: "40%"
      }, {
        duration: 600
      })
      $("#bar-js").animate({
        width: "30%"
      }, {
        duration: 600
      })
      $("#bar-java").animate({
        width: "60%"
      }, {
        duration: 600
      })
      $("#bar-cSharp").animate({
        width: "50%"
      }, {
        duration: 600
      })
    }
  });

})

// smooth scroll
$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") { // hash read href attr of this
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  let check = false
  document.querySelector(".bt-collapse-nav").addEventListener('click', () => {
    if (!check) {
      document.querySelector(".container-nav").style.display = 'block'
      document.querySelector(".bt-collapse-nav").innerHTML = `<i class="fa-solid fa-x"></i>`
      check = true
    }
    else {
      document.querySelector(".container-nav").style.display = 'none'
      check = false
      document.querySelector(".bt-collapse-nav").innerHTML = `<i class="fas fa-ellipsis-h"</i>`
    }
  });

  // to display nav because turn off nav when screen from moblie to desktop
  setInterval(() => {
    if (screen.width > 1000) {
      document.querySelector(".container-nav").style.display = 'block'
    }
    else {
      document.querySelector(".container-nav").style.display = 'none'
    }
  }, 0.1);

})



window.onscroll = function () {
  btScrollTop = document.querySelector('.bt-scroll-top');
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    btScrollTop.style.display = "block";
  } else {
    btScrollTop.style.display = "none";
  }
};
