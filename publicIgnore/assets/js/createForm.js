$(document).ready(function() {


    $("#post-form").hide();

    $('#forumSubmit').on('click', function(e) {
        e.preventDefault();
        // console.log('clicked');
        let fTitle = $('#forumT').val();
        let fDesc = $('#forumD').val();

        let forumInfo = {
            forumTitle: fTitle,
            forumDescription: fDesc
        }
        // console.log(forumInfo);
        // if (!forumInfo.forumTitle || !forumInfo.forumDescription) {
        //     alert("missing info")
        //     return;
        // }

        console.log('/api/box/' + fTitle);
        $.ajax('/api/box/' + fTitle, { type: 'POST', data: forumInfo }).then(function() {
            console.log("Forum Created");
            $('#forumT').val('');
            $('#forumD').val('');

            window.location.href = "/";
            // location.reload();
        });

    });

    $('#postSubmit').on('click', function(e) {
        e.preventDefault();

        let pForum = $('.postF').val();
        let pTitle = $('.postT').val();
        let pDesc = $('.postC').val();

        let postInfo = {
            box: pForum,
            postTitle: pTitle,
            postContent: pDesc
        }
        console.log(postInfo);
        // if (!postInfo.postForum || !postInfo.Title || !postInfo.postContent) {
        //     alert("missing info")
        //     return;
        // }

        // $.get('/api/box/' + pForum, { type: 'GET', data: postInfo }).then(function() {
        //     console.log(dbBox);
        //     if (false === true) 
        $.get('api/checkbox', { data: postInfo }, function(data) {
            console.log("do i make it here? ");
            console.log(JSON.stringify(data));

            let boxID = data.id;
            postInfo.boxID = boxID;

            $.ajax('/api/posts/' + pForum + '/' + pTitle, { type: 'POST', data: postInfo }).then(function() {
                console.log("Post Created");

                $('.postF').val('');
                $('.postT').val('');
                $('.postC').val('');

                window.location.href = "/box?t=" + postInfo.box;
                // location.reload();
            });
        });
        // res.render("home");



        // location.reload();




    });



    $('.tab a').on('click', function(e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

    });

});