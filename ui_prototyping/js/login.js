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
    
    ///Checking password requirements
    $('#pwd-reg').active(function() {
        var pwd, requirements, leng, special, num;
        var pwd = ('#pwd-reg').value();
        var requirements = [3]
        if(pwd.length() <= 8) {
            length = false; }
         else {
            length = true; }
        special = new regex(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g, pwd);
        $('#test-field').val( "length: " + length + ", special: " + special);

});
