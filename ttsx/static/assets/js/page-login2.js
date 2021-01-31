

/* 
    Created on  : Tuesday, 01 Nov 2016 at 10:20 AM
    Author      : Prakasam Mathaiyan
    URL         : http://www.prakasam.co
    E-Mail      : hello@prakasam.co
*/


jQuery(document).ready(function () {
    Login.init();
});


var Login = function() {
    
    var handleLogin = function() {
        
        $('#forgotDiv').hide();
        $('#registerDiv').hide();
        
        
        $('.lnkForgot').on('click', function (){
            $('#logindiv').hide();
            $('#registerDiv').hide();
            $('#forgotDiv').show();    
        });
        
        
        $('.lnkLogin').on('click', function (){
            $('#forgotDiv').hide();
            $('#registerDiv').hide();
            $('#logindiv').show();    
        });
        
        
        $('.lnkRegister').on('click', function (){
            $('#forgotDiv').hide();
            $('#logindiv').hide();
            $('#registerDiv').show();   
        });
       
        
    };  //  Handle Login Page
    
    var handleValidationLogin = function() {

        var formLogin = $('.loginForm');

        formLogin.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                lgn_email: {
                    required: true,
                    email: true
                },
                lgn_pwd: {
                    minlength: 6,
                    required: true
}
            },
            highlight: function(element) { // hightlight error inputs
                $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function(element) { // revert the change done by hightlight
                $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function(label) {
                label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
            }
        });

    };
    
    var handleValidationForgot = function() {

        var formForgot = $('.ForgotForm');

        formForgot.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                forgot_email: {
                    required: true,
                    email: true
                }
            },
            highlight: function(element) { // hightlight error inputs
                $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function(element) { // revert the change done by hightlight
                $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function(label) {
                label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
            }
        });

    };
    
       
    return {        
        init: function() {
            handleLogin();
            handleValidationLogin();
            handleValidationForgot();
        }
         
    };
}();

