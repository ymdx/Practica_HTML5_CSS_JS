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

    	setTimeout(function(){
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
