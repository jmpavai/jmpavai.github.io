const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
    navbar.classList.add("opened");
    navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
    navbar.classList.remove("opened");
    navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
    if (navbar.classList.contains("opened")) {
        closeMobileNavbar();
    } else {
        openMobileNavbar();
    }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

function pcsh1() {
    var x = document.getElementById("pc1");
    if (x.classList.contains("hide")) {
        x.classList.remove("hide");
    } else {
        x.classList.add("hide");
    }
}

function pcsh2() {
    var x = document.getElementById("pc2");
    if (x.classList.contains("hide")) {
        x.classList.remove("hide");
    } else {
        x.classList.add("hide");
    }
}

function pcsh3() {
    var x = document.getElementById("pc3");
    if (x.classList.contains("hide")) {
        x.classList.remove("hide");
    } else {
        x.classList.add("hide");
    }
}

AOS.init({
    duration: 800,
    once: true

}

);

AOS.init({
    disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    }
});