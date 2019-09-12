(function($) { // Begin jQuery
    $(function() { // DOM ready
        //hides drop down when link is clicked
        $("nav li").click(function () {
          $('.nav-list').hide();
          $("#nav-toggle").toggleClass('active').show();

        });

      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function(e) {
        e.preventDefault();
        $('nav ul').slideToggle();
      });

      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });

      var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

      

    }); // end DOM ready
  })(jQuery); // end jQuery

