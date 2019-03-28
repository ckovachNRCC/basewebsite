// WHEN THE DOCUMENT IS READYYYY, DO THISSSSS
// it means the DOM has completed loading all of the nodes for this page
$(document).ready(function () {
    // Handler for .ready() called.
    $("#invalidlogin").hide();
    $("#emailwarning").hide();
    $("#passwarning").hide();
    $("#submit").removeClass("submitinactive")

    $("#submit").click(function (e) {
        e.preventDefault();
        $("#invalidlogin").show();
    });

});
