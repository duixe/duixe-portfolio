$(function() {

    $(".portfolio__others-buttons a").click(function(e) {
        e.preventDefault();
        $(".portfolio__others-buttons .current").removeClass("current");
        $(this).addClass("current");

        var selectedbtn = $(this).attr("data-filter");
        if (selectedbtn == "all") {
            $(".element-item").show(1000, "swing");
        }else {
            $(".portfolio__others-container .element-item").not(`.${selectedbtn}`).hide(1000, "swing");
            $(".portfolio__others-container .element-item").filter(`.${selectedbtn}`).show(1000, "swing");
        }
        // console.log(selectedbtn);
        
        
        
        return false;
    });
    
}) ;