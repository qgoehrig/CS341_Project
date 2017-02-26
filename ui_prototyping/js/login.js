$(document).ready(function(){

    //Initialize first tab
    $('#login-tab').addClass('active');

    //Tab clicking functionality
    $('#login-tab').click(function() {
        $('#login-tab').addClass('active');
        $('#login-content').css("display", "block");
        $('#register-tab').removeClass('active');
        $('#register-content').css("display", "none");
    });
    $('#register-tab').click(function() {
        $('#login-tab').removeClass('active');
        $('#login-content').css("display", "none");
        $('#register-tab').addClass('active');
        $('#register-content').css("display", "block");
    });

});
