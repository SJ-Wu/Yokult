$(function(){
    console.log($("div.card-body"));

    $("div.card-body").on("click", "button#cancelBtn", function () {
        if (confirm("確定取消預約?")) {
            $(this).closest("div[id='cancelDiv']").animate({ "opacity": 0 }, 1000, "swing", function () {
                console.log(this);
                $(this).remove();
            });
        }

    });


});