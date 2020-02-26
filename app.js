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
switchPage();