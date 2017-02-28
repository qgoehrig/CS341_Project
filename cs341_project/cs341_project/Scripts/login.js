$(document).ready(function(){

    console.log("login.js working!");

    //Initialize first tab

    $('.tab').css("display", "none");

    $('#login-tab').addClass('active');

    //Tab clicking functionality
    $('#login-tab').click(function () {
        console.log("click");
        $('#login-tab').addClass('active');
        $('#login-content').css("display", "block");
        $('#register-tab').removeClass('active');
        $('#register-content').css("display", "none");
    });
    $('#register-tab').click(function () {
        console.log("clickly");
        $('#login-tab').removeClass('active');
        $('#login-content').css("display", "none");
        $('#register-tab').addClass('active');
        $('#register-content').css("display", "block");
    });

});
