$(document).ready(function () {

    //adding 10px height to header
    $("#mypage-header").addClass("header-shrink");

    //shrinking and expanding the height of header when user hover on it
    $("#mypage-header").hover(function () {
        $(this).toggleClass("header-shrink header-expand");
    });


    /****************************************
     * adding slide down animation to footer*
    ****************************************/
   let isAlert = false;
    $("#mypage-footer").on("mouseenter", function () {
        $("#mypage-footer-content").stop(true, true).slideDown(10000, function() {
            $("#card-alert").fadeIn(200); 
            isAlert = true;
        });
    });

    $("#mypage-footer").on("mouseleave", function () {
        if(!isAlert)
        {
            $("#mypage-footer-content").stop(true).slideUp(1000, function() {
            });
        }
    });

    $("#card-ok").on("click", () => {
        $("#card-alert").fadeOut(200);
        $("#mypage-footer-content").stop(true).slideUp(1000);
        isAlert = false;
    });
});