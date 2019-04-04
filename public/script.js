// WHEN THE DOCUMENT IS READYYYY, DO THISSSSS
// it means the DOM has completed loading all of the nodes for this page

$(document).ready(function () {
    // Handler for .ready() called.
    // $("#invalidlogin").show();
    // $("#emailwarning").show();
    // $("#passwarning").show();
    $("#submit").removeClass("submitinactive")

    $("#submit").click(function (e) {
        e.preventDefault();
        $("#invalidlogin").show();
    });

    $("#email").keypress(function () {
        console.log("Handler for .keypress() called.");
    });

    // $('#password').keyup(function() {
    //     // if the password is >= 3
    //     let pass = $('#password').val();
    //     console.log(pass);

    //     if (pass.length >= 3) {
    //         $("#passwarning").hide();
    //     } else {
    //         $("#passwarning").show();
    //     }
    //     // then don't show ewrror
    //     // else show the error
    // });

    $('#password').focus();

    $('#password').blur(function() {
        if ( $('#password').val().length >= 3) {
            $("#passwarning").hide();
        } else {
            $("#passwarning").show();
        }
    });




});
