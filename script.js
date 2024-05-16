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


        document.addEventListener("DOMContentLoaded", function () {
    const countryMenuButton = document.getElementById('country-menu');
    const dropdownMenu = document.getElementById('dropdown-menu');

    countryMenuButton.addEventListener('click', function (event) {
        // Prevent the document-level click handler from firing
        event.stopPropagation();
        // Toggle the display
        dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
    });

    // Hide the dropdown when clicking anywhere else on the page
    document.addEventListener('click', function () {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
    });
});



        