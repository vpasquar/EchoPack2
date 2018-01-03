$(document).ready(function() {

//THIS CODE FORMATS THE LOGIN/SIGNUP FORM AND RELATED TABS
    $("#login").hide();

    $('.tab a').on('click', function(e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

    });

     // declare variables for two forms
    const signupForm = $('.signup-form');
    const loginForm  = $('.login-form');

    // when user submits his login request
    loginForm.on('submit', function(e) {
        e.preventDefault();

        var userVerify = {
            userName: $('#login-user').val().trim(),
            pass: $('#login-pass').val().trim(),
        }

        loginUser(userVerify.userName, userVerify.pass);
    

    });

    //does a post to api/User route and if successfull brings us back to the home page logged in.
    function loginUser(username, password) {
        console.log(username, password)
       $.post("/api/login", {
          username: username,
          password: password
       }).then(function(data) {
          console.log(data);
          // window.location.replace(data);
          // If there's an error, log the error
       //}).catch(function(err) {  //#### erroring out here for some reason
       //    console.log(err);
       });
    };
    // function loginUser(username, password) {
    //    $.post("/api/login", {
    //       username: username,
    //       password: password
    //    }).then(function(data) {
    //       window.location.replace(data);
    //       // If there's an error, log the error
    //    //}).catch(function(err) {  //#### erroring out here for some reason
    //    //    console.log(err);
    //    });
    // };

  
    signupForm.on('submit', function(e) {
        e.preventDefault();

        var userCreate = {
            firstName: $('#new-first').val().trim(),
            lastName: $('#new-last').val().trim(),
            userName: $('#new-user').val().trim(),
            email: $('#new-email').val().trim(),
            password: $('#new-pass').val().trim()
        }

        $.ajax('api/User', {
            type: "POST",
            data: userCreate,
            success: function() {
                alert("You are now a member of EchoPack")
            },
            error: function(xhr, status, error) {
                console.log(status);
                alert("unsuccessful");
            }
            //check if row successfully added
        });
    });
});