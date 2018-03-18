(function() {
    var typed = new Typed('#typed-render', {
        stringsElement: '#typed-strings',
        typeSpeed: 40,
        backSpeed: 20,
        smartBackspace: true,
        backDelay: 1000,
        loop: true,
        loopCount: Infinity,
        showCursor: false
    });

    $("body").scrollspy({ target: "#navbar-scrollspy" });

    new WOW().init();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(function () {
        $(".mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });
})();