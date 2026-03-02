$(document).ready(function() {

	
	/* Navigation burger onclick side navigation show */
	$('.burger-container').on('click', function() {
		$('.main-navigation').toggle('slow');

		if($('#myBtn').hasClass('change')) {
			$('body').addClass('stop-scroll');
		} else {
			$('body').removeClass('stop-scroll');
		}
	});


	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
	
});



var counta = 0;

$(window).scroll(function(e){


	/* Onscroll number counter */
	var statisticNumbers = $('.single-count');
	if(statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (counta == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				});
			});
			counta = 1;
		}
	}


});

/* arch starts */
 function openProject(type) {

    var modal = document.getElementById("projectModal");
    var title = document.getElementById("projectTitle");
    var details = document.getElementById("projectDetails");

    if (type === "cyber") {
        title.innerHTML = "Cybersecurity Project";
        details.innerHTML = "Performed penetration testing using Nmap and Wireshark. Conducted vulnerability scanning and secured enterprise systems.";
    }

    if (type === "devops") {
        title.innerHTML = "DevOps Automation Project";
        details.innerHTML = "Built CI/CD pipeline using Docker and GitHub Actions. Automated deployments and reduced manual release time.";
    }

	 if (type === "cloud") {
        title.innerHTML = "Cloud Computing";
        details.innerHTML = "Designed and deployed a highly available multi-tier application on Amazon Web Services with load balancing and auto-scaling: Implemented Infrastructure as Code using Terraform and configured monitoring, IAM security, and automated deployments.";
    }

	 if (type === "software") {
        title.innerHTML = "Software Development";
        details.innerHTML = "Developed a full-stack web application with RESTful APIs, authentication, and database integration Implemented responsive UI, backend validation, and optimized database queries for performance.";
    }

    modal.classList.add("active");
}

function closeProject() {
    document.getElementById("projectModal").classList.remove("active");
}

/* Close when clicking outside panel */
document.getElementById("projectModal").addEventListener("click", function(e) {
    if (e.target === this) {
        closeProject();
    }
});  


document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector('.books');
    const slides = document.querySelectorAll('.single-book');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let index = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        index++;
        if (index >= slides.length) index = 0;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        index--;
        if (index < 0) index = slides.length - 1;
        updateSlider();
    });

});
const books = document.querySelector('.books');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;
let itemsPerSlide = getItemsPerSlide();

function getItemsPerSlide() {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 992) return 2;
  return 3;
}

function updateSlider() {
  itemsPerSlide = getItemsPerSlide();
  const slideWidth = 100 / itemsPerSlide;
  books.style.transform = `translateX(-${index * slideWidth}%)`;
}

next.addEventListener('click', () => {
  const maxIndex = books.children.length - itemsPerSlide;
  if (index < maxIndex) {
    index++;
    updateSlider();
  }
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

window.addEventListener('resize', () => {
  index = 0;
  updateSlider();
});
/* arch ends */