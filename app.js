// bring loader first
const loader = document.querySelector(".loader");
const home = document.querySelector(".home");
const navPage = document.querySelector(".pages");
const navSocial = document.querySelector(".social");
const logo = document.querySelector(".header__logo");
const footer = document.querySelector(".footer");



function initLoader() {
    

        $(window).on('load', function(){ 
           
            $("body").css("overflowY","hidden");
            setTimeout(() => {
                $('.loader').fadeOut("slow");
            }, 3000);
                
            setTimeout(() => {
                $("body").css({"opacity": 0, "visibility": "visible"}).animate({"opacity": 1}, 2000);
                $("body").css("overflowY","visible");
            }, 4000);

           });
        
}

initLoader();


// switching the experience tab
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const exp1 = document.getElementById("experience1");
const exp2 = document.getElementById("experience2");
const exp3 = document.getElementById("experience3");

btn1.addEventListener("click", () => {
    exp1.style.transform = "translateX(0)";
    exp2.style.transform = "translateX(150%)";
    exp3.style.transform = "translateX(150%)";

    exp1.style.transitionDelay = ".4s";
    exp2.style.transitionDelay = "0s";
    exp3.style.transitionDelay = "0s";

    btn1.style.borderLeft = "1px solid #BFD7EA";
    btn2.style.borderLeft = "none";
    btn3.style.borderLeft = "none";

    btn1.style.color = "#BFD7EA";
    btn2.style.color = "#087E8B";
    btn3.style.color = "#087E8B";
    
});

btn2.addEventListener("click", () => {
    exp1.style.transform = "translateX(150%)";
    exp2.style.transform = "translateX(0)";
    exp3.style.transform = "translateX(150%)";

    exp1.style.transitionDelay = "0s";
    exp2.style.transitionDelay = ".4s";
    exp3.style.transitionDelay = "0s";

    btn1.style.borderLeft = "none";
    btn2.style.borderLeft = "1px solid #BFD7EA";
    btn3.style.borderLeft = "none";

    btn1.style.color = "#087E8B";
    btn2.style.color = "#BFD7EA";
    btn3.style.color = "#087E8B";
});

btn3.addEventListener("click", () => {
    exp1.style.transform = "translateX(150%)";
    exp2.style.transform = "translateX(150%)";
    exp3.style.transform = "translateX(0)"

    exp1.style.transitionDelay = "0s";
    exp2.style.transitionDelay = "0s";
    exp3.style.transitionDelay = ".4s";

    btn1.style.borderLeft = "none";
    btn2.style.borderLeft = "none";
    btn3.style.borderLeft = "1px solid #BFD7EA";

    btn1.style.color = "#087E8B";
    btn2.style.color = "#087E8B";
    btn3.style.color = "#BFD7EA";
});


// SWITCH PAGE 
function switchPage() {
    const pages = document.querySelectorAll(".page");
    const slides = document.querySelectorAll(".pages__icon");
    const body = document.querySelector("body")

    
    
    //current slide in array index 👇
    let current = 0;

    slides.forEach((slide, index) => {
        slide.addEventListener("click", function() {
            changeMenu(this);

            switch (index) {
                case 0:
                    pages.forEach(page => {
                        page.style.visibility = "hidden";
                        page.style.opacity = "0";
                        page.style.zIndex = "0";
                        pages[3].style.display = "none";
                        
                        
                    });
                    setTimeout(() => {
                        pages[0].style.visibility = "visible";
                        pages[0].style.opacity = "1";
                        pages[0].style.zIndex = "1";
                    }, 600)
                    
                    break;
                case 1:
                    pages.forEach(page => {
                        page.style.visibility = "hidden";
                        page.style.opacity = "0";
                        page.style.zIndex = "0";
                        pages[3].style.display = "none";
                        
                    });
                    setTimeout(() => {
                        pages[1].style.visibility = "visible";
                        pages[1].style.opacity = "1";
                        pages[1].style.zIndex = "1";
                    }, 600)
                    break;
                case 2:
                    pages.forEach(page => {
                        page.style.visibility = "hidden";
                        page.style.opacity = "0";
                        page.style.zIndex = "0";
                        pages[3].style.display = "none";
                        
                    });
                    setTimeout(() => {
                        pages[2].style.visibility = "visible";
                        pages[2].style.opacity = "1";
                        pages[2].style.zIndex = "1";
                    }, 600)
                    break;
                case 3:
                    pages.forEach(page => {
                        page.style.visibility = "hidden";
                        page.style.opacity = "0";
                        page.style.zIndex = "0";
                    });
                    setTimeout(() => {
                        pages[3].style.display = "block";
                        pages[3].style.visibility = "visible";
                        pages[3].style.opacity = "1";
                        pages[3].style.zIndex = "1";
                        // body.style.overflowY = "scroll"
                    }, 600)
                    break;
                case 4:
                    pages.forEach(page => {
                        page.style.visibility = "hidden";
                        page.style.opacity = "0";
                        page.style.zIndex = "0";
                        pages[3].style.display = "none";
                        
                    });
                    setTimeout(() => {
                        pages[4].style.visibility = "visible";
                        pages[4].style.opacity = "1";
                        pages[4].style.zIndex = "1";
                    }, 600)
                    break;

            }
            // nextPage(index);
            // scrollSlide = index;
        });
    });

    function changeMenu(dot) {
        slides.forEach(slide => {
          slide.classList.remove("active");
        });
        dot.classList.add("active");
    }

    function nextPage(pageNum) {

        // const nextPage = pages[pageNum];
        // const currentPage = pages[current];

        // const tl = new TweenMax({
        //     onStart: function() {
        //         slides.forEach(slide => {
        //           slide.style.pointerEvents = "none";
        //         });
        //       },
        //       onComplete: function() {
        //         slides.forEach(slide => {
        //           slide.style.pointerEvents = "all";
        //         });
        //     }
        // });


        // TweenMax.fromTo(
        //     currentPage, 
        //     0.3, 
        //     { opacity: 1, pointerEvents: "all" }, 
        //     { opacity: 0, pointerEvents: "none" }
        // )
        // .fromTo(
        //     nextPage, 
        //     0.3, 
        //     { opacity: 0, pointerEvents: "none" }, 
        //     { opacity: 1, pointerEvents: "all" }, 
        //     "-=0.6"
        // );
        // current = pageNum;
        
    }
    
}

// ANIMATE TEXT
function animateText() {
    const typeWriter = function(stmt, elementTxt, pause = 3000) {
        this.stmt = stmt;
        this.elementTxt = elementTxt;
        this.txt = "";
        this.wordIndex = 0;
        this.pause = parseFloat(pause, 10);
        this.type();
        this.isDeleting = false;
    }

    // TYPE METHOD
    typeWriter.prototype.type = function() {
        // Current Index of Word
        const current = this.wordIndex % this.stmt.length;

        // Get full text of current words
        const fullStmt = this.stmt[current];
        // console.log(fullStmt);

        // check if it's in the deleting state
        if (this.isDeleting ) {
            // remove a char
            this.txt = fullStmt.substring(0, this.txt.length - 1);
        }else {
            // Add char
            this.txt = fullStmt.substring(0, this.txt.length + 1);
        }
        
        //  Insert txt into elementTxt
        this.elementTxt.textContent = this.txt;

        // Initial Type Speed 
        let typeSpeed = 300;

        if (this.isDeleting) {
          typeSpeed /= 2;  
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullStmt) {
            // make pause at end
            typeSpeed = this.pause;
            this.isDeleting = true;
        }else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;

            // move to the next word
            this.wordIndex++;

            // pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => {
            this.type();
        }, typeSpeed)
    }

    // INIT ON DOM LOAD
    document.addEventListener('DOMContentLoaded', init);

    // Init function 
    function init() {
        const elementTxt = document.querySelector(".home-testtype");
        const stmt = JSON.parse(elementTxt.getAttribute('data-words')); 
        const pause = elementTxt.getAttribute("data-wait");
        // Init Typewriter
        new typeWriter(stmt, elementTxt, pause)
    }
}

function navigation() {
    const navbg = document.querySelector(".navigation__background")
    const navcheck = document.querySelector(".navigation__checkbox")
    const navnv = document.querySelector(".navigation__nav")
    const tryList = document.querySelectorAll(".navigation__item")
    
    tryList.forEach(item => {
        item.addEventListener("click", () => {
            if(navcheck.checked === true) {
                navcheck.checked = false;
            }
        });
    })

        

}

switchPage();
animateText();
navigation();
