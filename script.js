/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
===================================================== */

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =====================================================
   BOOKING FORM
===================================================== */

const form = document.getElementById("bookingForm");

const formMessage = document.getElementById("form-message");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    const school =
        document.getElementById("school").value;

    const contact =
        document.getElementById("contact").value;


    if (school === "" || contact === "") {

        formMessage.textContent =
            "Please fill in all required fields.";

        return;

    }


    formMessage.textContent =
        "Thank you! Your program request has been received. We will contact you shortly.";


    form.reset();

});


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   SIMPLE SCROLL ANIMATION
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".program-card, .value-card, .why-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "all 0.7s ease";

    observer.observe(element);

});