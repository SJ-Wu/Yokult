$(function(){

    $("input#double").on("click", function(){
        if ($("input#double").prop("checked")){
    
            $("input#yourname").css("display", "none");
            $("input#IDcard").css("display", "none");
        } else {
            $("input#yourname").css("display", "");
            $("input#IDcard").css("display", "");
        }
    });
    $("input#single").on("click", function () {
        if ($("input#single").prop("checked")) {

            $("input#yourname").css("display", "");
            $("input#IDcard").css("display", "");
        }
    });



});
