$(document).ready(function () {
    $(".nav-toggle").click(function () {
        $("#navbar ul").slideToggle("slow");
    });
    $(window).on("resize", function (e) {
        let windowsSize = $(window).width();
        if (windowsSize >= 861) {
            $("#navbar ul").show();
        } else {
            $("#navbar ul").hide();
        }
    });
});