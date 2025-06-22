$(document).ready(function () {
    // Show animation instantly
    new Snowflakes({
        color: "#ffd700",
        minSize: 20,
    });

    $(".main").fadeIn("slow");
    $(".song")[0].play();
    $(".brith-balloon").animate({ top: -500 }, 8000);

    new Typed("#typed", {
        stringsElement: "#greeting-word",
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
    });
});
