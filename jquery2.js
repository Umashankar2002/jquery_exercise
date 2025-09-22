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
    $("#mypage-footer").on("mouseenter", function () {
        $("#mypage-footer-content").stop(true, true).slideDown(1000, function() {
            $("#card-alert").fadeIn(200); 
        });
    });

    $("#card-ok").on("click", () => {
        $("#card-alert").fadeOut(200);
        $("#mypage-footer-content").stop(true).slideUp(1000);
    });
});