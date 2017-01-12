var navbaritems = document.getElementsByClassName("navbar-item");

for (var i = 0; i < navbaritems.length; i++) {
    navbaritems[i].addEventListener("click", function(event) {
        deleteActiveClass();
        this.classList.add("active");

        var sectionToGo = this.getElementsByTagName("a")[0].href.split("#");
        if (sectionToGo.length > 1) {
            event.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo);
        }
    });
}

function getElementByIdAndScroll(name) {
    var element;
    if (name == '') {
        element = document.getElementsByClassName("header")[0];
    } else {
        element = document.getElementById(name);
    }

    scrollToElement(element);
}

function scrollToElement(element) {
    var jump = parseInt(element.getBoundingClientRect().top * 0.3);
    document.body.scrollTop += jump;

    if (!element.lastJump ||  element.lastJump > Math.abs(jump)) {
        element.lastJump = Math.abs(jump);

        setTimeout(function() {
            scrollToElement(element);
        }, "60");
    } else {
        element.lastJump = null;
    }

}

function deleteActiveClass() {
    for (var i = 0; i < navbaritems.length; i++) {
        navbaritems[i].classList.remove("active");
    }
}

// Scroll Spy

var cumulativeOffset = function(element) {
    var top = 0;
    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while (element);
    return top;
};

var offsetQuienSoy = cumulativeOffset(document.getElementById("quien-soy")) - 51;
var offsetEstudios = cumulativeOffset(document.getElementById("estudios")) - 51;
var offsetExperiencia = cumulativeOffset(document.getElementById("experiencia")) - 51;
var offsetSobreMi = cumulativeOffset(document.getElementById("sobre-mi")) - 51;

window.addEventListener("scroll", changeMenuStyle);

function changeMenuStyle(event) {
    var previous;

    if (window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy) {
        if (!previous) {
            previous = 1;
        } else if (previous == 1) {
            return false;
        }
        deleteActiveClass();
        document.querySelector('a[href="#"]').parentNode.classList.add("active");
    } else if (window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetEstudios) {
        if (!previous) {
            previous = 2;
        } else if (previous == 2) {
            return false;
        }
        deleteActiveClass();
        document.querySelector('a[href$="quien-soy"]').parentNode.classList.add("active");
    } else if (window.pageYOffset >= offsetEstudios && window.pageYOffset < offsetExperiencia) {
        if (!previous) {
            previous = 3;
        } else if (previous == 3) {
            return false;
        }
        deleteActiveClass();
        document.querySelector('a[href$="estudios"]').parentNode.classList.add("active");
    } else if (window.pageYOffset >= offsetExperiencia && window.pageYOffset < offsetSobreMi) {
        if (!previous) {
            previous = 4;
        } else if (previous == 4) {
            return false;
        }
        deleteActiveClass();
        document.querySelector('a[href$="experiencia"]').parentNode.classList.add("active");
    } else if (window.pageYOffset >= offsetSobreMi) {
        if (!previous) {
            previous = 5;
        } else if (previous == 5) {
            return false;
        }
        deleteActiveClass();
        document.querySelector('a[href$="sobre-mi"]').parentNode.classList.add("active");
    }
}
