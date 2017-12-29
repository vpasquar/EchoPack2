$(document).ready(function() {



    $('.postc-submit').on('click', function(e) {
        let comment = $('.postb-text textarea').val().trim();
        let sub = window.location.href.indexOf("?id=")
        // console.log(sub);
        let fID = window.location.href.substring(sub + 4);


        let commentInfo = {
        	fID : fID,
        	comment:comment

        }

        $.ajax('/api/post/f', {
            type: "POST",
            data: commentInfo
        }).then(function(data) {
        	// console.log(data);
        	location.reload();
        })
        // console.log(fID);

    });

});