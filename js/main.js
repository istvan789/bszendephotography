//Navigation bar effects in javascript when using the scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0);
});


 

//Services section...Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});


//photo gallery section

const list = document.querySelectorAll('.list');
const itemBox = document.querySelectorAll('.item-box');

list.forEach((elem) => {
    elem.addEventListener('click', function(){
        list.forEach((elem) =>{
        elem.classList.remove('active');
        });
        this.classList.add('active');

        let value = this.getAttribute('data-filter');

        itemBox.forEach(element => {
            element.classList.add('hide')
            if(element.getAttribute('data-item') == value || value == "all"){
                element.classList.remove('hide');
            }
        });
    });
});


//Our clints sub section - Swiper

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // dark/light , sun/moon theme in the website
  const themeBtn = document.querySelector("theme-btn");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
  });

  const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
  const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

  const savedTheme = localStorage.getItem("saved-theme");
  const savedIcon = localStorage.getItem("saved-icon");

  if(savedTheme){
      document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
      themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
  }



  //Scroll to top button 


  const scrollTopBtn = document.querySelector(".scrollToTop-btn");

  window.addEventListener("scroll", function(){
      scrollTopBtn.classList.toggle("active", window.scrollY > 500);

  });

  scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  // Navigation menu items active on page scroll

  window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop -50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            doocument.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            doocument.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
      });
  });