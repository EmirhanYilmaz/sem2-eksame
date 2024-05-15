document.addEventListener("DOMContentLoaded", function () {

    const burgerMenuButton = document.getElementById('burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenuButton.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

            var links = document.querySelectorAll("nav a");

            function updateActiveLink() {
                var currentUrl = window.location.href;

                links.forEach(function (link) {
                    if (currentUrl.includes(link.getAttribute("href"))) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
            updateActiveLink();

            links.forEach(function (link) {
                link.addEventListener("click", updateActiveLink);
            });

    document.addEventListener('click', function (event) {
        const isMenuClicked = navLinks.contains(event.target);
        const isBurgerClicked = burgerMenuButton.contains(event.target);

        if (!isMenuClicked && !isBurgerClicked) {
            navLinks.classList.remove('show');
        }
    });


        });



        