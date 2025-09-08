
$(document).ready(function(){

    //changing the background color for all sections
    $(".section-bg").addClass("highlight-bg");

    //changing the border color #FF1A00 and adding borders to some sections
    $(".section-border").addClass("highlight-border");

     //hiding footer section of the resume
    $("#mypage-footer").hide();

    //changing the font color to #CC0000
    $(".section-text").addClass("highlight-text");

    //changing the font color for button text to #CC0000
    $(".button").addClass("button-bg");

    //removing the border for all input elements
    $(".input-field").addClass("input-field-border");

    // showing the reference section
    $("#reference-section").show();

})