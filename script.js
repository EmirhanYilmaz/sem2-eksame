document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from bubbling up to the document
        navLinks.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target)) {
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

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.right-sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});




        