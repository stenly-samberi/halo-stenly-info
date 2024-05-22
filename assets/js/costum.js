$(document).ready(function(){
    $(".humberger").click(function(){
        $(".wrapper-nav").toggleClass("show");
        $(".icon-bar").toggleClass("d-none");
        $(".close").toggleClass("d-none")

    });
});