document.addEventListener('DOMContentLoaded', function() {
    function scrollTopBack() {
        let scrollTopButton = document.querySelector("#scrollUp");
        window.onscroll = function() {
            var scroll = document.documentElement.scrollTop;
            if (scroll >= 250) {
                scrollTopButton.classList.add('scrollActive');
            } else {
                scrollTopButton.classList.remove('scrollActive');
            }
        }
        scrollTopButton.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
    scrollTopBack();
});


$(document).ready(function(){
    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();
        $('section').each(function() {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            if (scrollPosition >= top && scrollPosition <= bottom) {
                var id = $(this).attr('id');
                $('nav').find('.nav-link').removeClass('active-section');
                $('nav').find('[href="#' + id + '"]').addClass('active-section');
            }
        });
    });
});
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll('section');
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    sections.forEach(function(section, index) {
        if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight - 100) {
            navbarLinks.forEach(function(navbarLink) {
                navbarLink.classList.remove('active');
            });
            navbarLinks[index].classList.add('active');
        }
    });
});

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

