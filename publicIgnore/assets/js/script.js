$(document).ready(function() {
    $('#logo-box').addClass('slidein');

    const clockModule = $('#watch-time');
    const tempDate = $('.date').html(moment().format('MMMM Do YYYY'));
    const tempTime = $('.time').html(moment().format('H:mm'));

    function update() {
        $('.time').html(moment().format('H:mm'));
    }

    setInterval(update, 60000);

    // const hexArray = ['#EEC25E','#F79D84','#59CD90','#39A0ED','#EE6352'];
    // const randBg = Math.floor(Math.random()*hexArray.length);


    // $('.header').css('background', hexArray[randBg]);


    // $.get("/api/topthree", function(data){
    //    console.log("Boxes: " + JSON.stringify(data));


    // });

    $('.box-card').on('click', function() {
        // console.log($(this));
        let title = $(this).children()[0].innerHTML;

        window.location.href = "/box?t=" + title;
    })

    $.get("/api/usercount", function(data) {
        // console.log("Users: " + JSON.stringify(data) + data.count);

        $('#users-count').text("Total Users:   " + data.count);


    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            $('.header').addClass('sticker');
        } else {
            $('.header').removeClass('sticker');
        }
    });
});